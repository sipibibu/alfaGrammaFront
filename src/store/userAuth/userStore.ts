import { IManager, IRespondent, IUserAuth } from "../../models/IUser.ts";
import AuthService from "../../services/AuthService.ts";
import { makeAutoObservable } from "mobx";
import { decodeToken } from "../../utils/decodeToken.ts";
import ProfileService from "../../services/ProfileService.ts";
import { Role } from "../../const.ts";
import { dropToken, saveToken } from "../../utils/token.ts";

class UserStore {
  respondent = {} as IRespondent;
  manager = {} as IManager;
  isLogin = false;
  role = Role.None;

  constructor() {
    makeAutoObservable(this);
  }

  setRespondent(respondent: IRespondent) {
    this.respondent = respondent;
  }

  setManager(manager: IManager) {
    this.manager = manager;
  }

  setLogin(login: boolean) {
    this.isLogin = login;
  }

  setRole(role: Role) {
    this.role = role;
  }

  async registration(userAuth: IUserAuth) {
    try {
      await AuthService.registration(userAuth);
    } catch (e) {
      this.setRole(Role.NoAuth);
      dropToken();
      console.log(e);
    }
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      saveToken(response.data.access_jwt_token);
      this.setLogin(true);
      this.setRole(decodeToken(response) as Role);
    } catch (e) {
      dropToken();
      this.setRole(Role.NoAuth);
      console.log(e);
    }
  }

  async authorization(userAuth: IUserAuth) {
    try {
      await this.registration(userAuth);
      await this.login(userAuth.login, userAuth.password);
    } catch (e) {
      this.setRole(Role.NoAuth);
      console.log(e);
    }
  }

  async getAccount() {
    try {
      const response = await ProfileService.getAccount();
      this.isLogin = true;
      if (response.roles[0] == "Respondent") {
        this.setRole(Role.Respondent);
        this.setRespondent({
          name: response.firstName,
          surname: response.lastName,
          login: response.email,
          role: response.roles[0],
          additionalData: {
            imageUrl: response.image,
            age: response.age,
            education: response.education,
            interests: response.interests,
          },
        });
      } else {
        this.setRole(Role.Manager);
        this.setManager({
          name: response.firstName,
          surname: response.lastName,
          login: response.email,
          role: response.roles[0],
          additionalData: {
            companyName: response.company.title,
            description: response.company.description,
          },
        });
      }
    } catch (e) {
      dropToken();
      this.setRole(Role.NoAuth);
      console.log(e);
    }
  }

  async logout() {
    try {
      dropToken();
      this.setLogin(false);
      this.setRole(Role.NoAuth);
      this.setRespondent({} as IRespondent);
      this.setManager({} as IManager);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserStore();
