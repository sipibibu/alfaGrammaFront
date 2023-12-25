import { IManager, IRespondent, IUser, IUserAuth } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../models/responce/AuthResponse.ts";
import AxiosResponce from "axios";
import { decodeToken } from "../utils/decodeToken.ts";
import { IGrammaForm, IGrammaStructure } from "../types.ts";
import GrammasService from "../services/GrammasService.ts";
import { MockGrammas } from "../mock/mock-grammas.ts";

export default class Store {
  user = {} as IUser;
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

  async login(login: string, password: string) {
    try {
      const response: AxiosResponce<AuthResponse> = await AuthService.login(
        login,
        password,
      );
      localStorage.setItem("token", response.data.access_jwt_token);
      this.setAuth(true);
      this.setLogin(true);
      this.setUser(decodeToken(response));
      console.log(response, this.user);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(userAuth: IUserAuth) {
    try {
      const response: AxiosResponce<AuthResponse> =
        await AuthService.registration(userAuth);
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

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setLogin(false);
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.log(e.response?.data?.message);
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
}
