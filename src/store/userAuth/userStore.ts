import {IManager, IRespondent, IUserAuth} from "../../models/IUser.ts";
import AxiosResponce from "axios";
import { AuthResponse } from "../../models/responce/AuthResponse.ts";
import AuthService from "../../services/AuthService.ts";
import { makeAutoObservable } from "mobx";
import { decodeToken } from "../../utils/decodeToken.ts";
import ProfileService from "../../services/ProfileService.ts";

class UserStore{
    respondent = {} as IRespondent;
    manager = {} as IManager;
    isAuth = false;
    isLogin = false;
    role = '';

    constructor() {
        makeAutoObservable(this)
    }

    setRespondent(respondent: IRespondent) {
        this.respondent = respondent;
    }

    setManager(manager: IManager) {
        this.manager = manager;
    }

    setAuth(auth: boolean) {
        this.isAuth = auth;
    }

    setLogin(login: boolean) {
        this.isLogin = login;
    }

    setRole(role: string) {
        this.role = role
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

    async login(login: string, password: string) {
        try {
            const response: AxiosResponce<AuthResponse> = await AuthService.login(
                login,
                password,
            );
            localStorage.setItem("token", response.data.access_jwt_token);
            this.setAuth(true);
            this.setLogin(true);
            this.setRole(decodeToken(response))
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

    async getAccount(){
        try {
            const response = await ProfileService.getAccount();
            if (this.role == 'Respondent'){
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
            }
            else {
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
            this.setAuth(false);
            this.setRespondent({} as IRespondent);
            this.setManager({} as IManager);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UserStore();
