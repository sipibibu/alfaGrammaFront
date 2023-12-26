import { IManager, IRespondent, IUser, IUserAuth } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { decodeToken } from "../utils/decodeToken.ts";
import ProfileService from "../services/ProfileService.ts";
import { IGrammaForm, IGrammaStructure } from "../types.ts";
import GrammasService from "../services/GrammasService.ts";
import { MockGrammas } from "../mock/mock-grammas.ts";

export default class Store {
  user = {} as IUser;
  age = "";
  education = "";
  interests = [""];
  respondent = {} as IRespondent;
  manager = {} as IManager;
  isAuth = false;
  isLogin = false;
  grammaCard = {} as IGrammaForm;
  grammasList = [] as IGrammaForm[];
  grammaForm: IGrammaForm | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(auth: boolean) {
    this.isAuth = auth;
  }

  setLogin(login: boolean) {
    this.isLogin = login;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setRespondent(respondent: IRespondent) {
    this.respondent = respondent;
  }

  setManager(manager: IManager) {
    this.manager = manager;
  }

  setGramma(gramma: IGrammaForm) {
    this.grammaCard = gramma;
  }

  setGrammasList(grammasList: IGrammaForm[]) {
    this.grammasList = grammasList;
  }

  setGrammaForm(grammaForm: IGrammaForm) {
    this.grammaForm = grammaForm;
  }

  async registration(userAuth: IUserAuth) {
    try {
      const response = await AuthService.registration(userAuth).then(
        (res) => res.data,
      );
      this.setAuth(true);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async authorization(userAuth: IUserAuth) {
    await this.registration(userAuth);
    if (this.isAuth) {
      await this.login(userAuth.login, userAuth.password);
    }
  }

  setAge(age: string) {
    this.age = age;
  }

  setEducation(education: string) {
    this.education = education;
  }

  setInterests(interests: string[]) {
    this.interests = interests;
  }

  async login(login: string, password: string) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("token", response.data.access_jwt_token);
      this.setAuth(true);
      this.setLogin(true);
      this.setUser(decodeToken(response));
      console.log(response, this.user);
    } catch (e) {
      console.log(e);
    }
  }

  async createGramma(gramma: IGrammaStructure) {
    try {
      await GrammasService.createGramma(gramma);
    } catch (e) {
      console.log(e);
    }
  }

  async getGramma(id: number) {
    try {
      const gramma = MockGrammas.find((gramma) => gramma.id === id);
      if (gramma) {
        this.setGramma(gramma);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammasList() {
    try {
      setTimeout(() => {
        this.setGrammasList(MockGrammas);
      }, 500);
    } catch (e) {}
  }

  async updateAge(age: string) {
    try {
      const response = await ProfileService.updateProfileRespondentAge(age);
      this.setAge(response.data.age);
      console.log(response, this.age);
    } catch (e) {
      console.log(e);
    }
  }

  async updateEducation(education: string) {
    try {
      const response =
        await ProfileService.updateProfileRespondentEducation(education);
      this.setEducation(response.data.education);
      console.log(response, this.education);
    } catch (e) {
      console.log(e);
    }
  }

  async updateInterests(interests: string[]) {
    try {
      const response =
        await ProfileService.updateProfileRespondentInterests(interests);
      this.setInterests(response.data.interests);
      console.log(response, this.interests);
    } catch (e) {
      console.log(e);
    }
  }

  async updateProfile(age: string, education: string, interests: string[]) {
    if (age != this.respondent.additionalData?.age) {
      await this.updateAge(age);
    }
    if (education != this.respondent.additionalData?.education) {
      await this.updateEducation(education);
    }
    if (interests != this.respondent.additionalData?.interests) {
      await this.updateInterests(interests);
    }
    this.setRespondent({
      name: "",
      surname: "",
      login: this.user.login,
      role: this.user.role,
      additionalData: {
        age: this.age,
        education: this.education,
        interests: this.interests,
      },
    });
  }

  async getAccount() {
    try {
      const response = await ProfileService.getAccount();
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
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammasForm(id: number) {
    try {
      setTimeout(() => {
        const gramma = MockGrammas.find((gramma) => gramma.id === id);
        if (gramma) {
          this.setGrammaForm(gramma);
        }
      }, 500);
    } catch (e) {}
  }

  async getPlannedGrammas() {
    try {
      setTimeout(() => {
        this.setGrammasList(MockGrammas);
      }, 500);
    } catch (e) {}
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setLogin(false);
      this.setAuth(false);
      this.setUser({} as IUser);
      this.setRespondent({} as IRespondent);
      this.setManager({} as IManager);
    } catch (e) {
      console.log(e);
    }
  }
}
