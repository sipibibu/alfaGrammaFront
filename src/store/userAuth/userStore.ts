import { IManager, IRespondent, IUserAuth } from "../../models/IUser.ts";
import AuthService from "../../services/AuthService.ts";
import { makeAutoObservable } from "mobx";
import { decodeToken } from "../../utils/decodeToken.ts";
import ProfileService from "../../services/ProfileService.ts";
import { AuthorizationStatus } from "../../types.ts";

class UserStore {
  respondent = {} as IRespondent;
  manager = {} as IManager;
  isAuth = AuthorizationStatus.Unknown;
  isLogin = false;
  role = "";

  constructor() {
    makeAutoObservable(this);
  }

  setRespondent(respondent: IRespondent) {
    this.respondent = respondent;
  }

  setManager(manager: IManager) {
    this.manager = manager;
  }

  setAuth(authStatus: AuthorizationStatus) {
    this.isAuth = authStatus;
  }

  setLogin(login: boolean) {
    this.isLogin = login;
  }

  setRole(role: string) {
    this.role = role;
  }

  async registration(userAuth: IUserAuth) {
    try {
      const response = await AuthService.registration(userAuth);
      this.setAuth(AuthorizationStatus.Auth);
      console.log(response);
    } catch (e) {
      this.setAuth(AuthorizationStatus.NoAuth);
      console.log(e);
    }
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("token", response.data.access_jwt_token);
      this.setAuth(AuthorizationStatus.Auth);
      this.setLogin(true);
      this.setRole(decodeToken(response));
      console.log(response);
    } catch (e) {
      this.setAuth(AuthorizationStatus.NoAuth);
      console.log(e);
    }
  }

  async authorization(userAuth: IUserAuth) {
    await this.registration(userAuth);
    if (this.isAuth === AuthorizationStatus.Auth) {
      await this.login(userAuth.login, userAuth.password);
    }
  }

  async getAccount() {
    try {
      const response = await ProfileService.getAccount();
      this.isLogin = true;
      this.setAuth(AuthorizationStatus.Auth);
      if (response.data.roles[0] == "Respondent") {
        this.setRespondent({
          name: response.data.firstName,
          surname: response.data.lastName,
          login: response.data.email,
          role: response.data.roles[0],
          additionalData: {
            imageUrl: response.data.image,
            age: response.data.age,
            education: response.data.education,
            interests: response.data.interests,
          },
        });
      } else {
        this.setManager({
          name: response.data.firstName,
          surname: response.data.lastName,
          login: response.data.email,
          role: response.data.roles[0],
          additionalData: {
            companyName: response.data.company.title,
            description: response.data.company.description,
          },
        });
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setLogin(false);
      this.setAuth(AuthorizationStatus.NoAuth);
      this.setRespondent({} as IRespondent);
      this.setManager({} as IManager);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserStore();
