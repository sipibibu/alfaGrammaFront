import {IManager, IRespondent, IUser, IUserAuth} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {AuthResponse} from "../models/responce/AuthResponse.ts";
import AxiosResponce from "axios";
import {decodeToken} from "../utils/decodeToken.ts";

export default class Store {
    user = {} as IUser
    respondent = {} as IRespondent
    manager = {} as IManager
    isAuth = false
    isLogin = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(auth: boolean){
        this.isAuth = auth
    }

    setLogin(login: boolean){
        this.isLogin = login
    }

    setUser(user: IUser){
        this.user = user
    }

    setRespondent(respondent: IRespondent){
        this.respondent = respondent
    }

    setManager(manager: IManager){
        this.manager = manager
    }

    async login(login: string, password: string){
        try {
            const response: AxiosResponce<AuthResponse> = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.access_jwt_token)
            this.setAuth(true)
            this.setLogin(true)
            this.setUser(decodeToken(response))
            console.log(response, this.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(userAuth: IUserAuth){
        try {
            const response: AxiosResponce<AuthResponse> = await AuthService.registration(userAuth)
            this.setAuth(true)
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async authorization(userAuth: IUserAuth){
        await this.registration(userAuth)
        if(this.isAuth) {
            await this.login(userAuth.login, userAuth.password)
        }
    }

    async logout(){
        try {
            localStorage.removeItem('token')
            this.setLogin(false)
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}
