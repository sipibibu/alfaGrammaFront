import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {AuthResponce} from "../models/responce/AuthResponce";
import AxiosResponce from "axios";
import {LoginRoute} from "../router/routing";

export default class Store {
    user = {} as IUser
    isAuth = false
    status = 401

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(auth: boolean){
        this.isAuth = auth
    }

    setStatus(code: number){
        this.status = code
    }

    setUser(user: IUser){
        this.user = user
    }

    async login(login: string, password: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.access_jwt_token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(name: string, surname: string, login: string, password: string, role: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.registration(login, password, role)
            this.setStatus(response.status)
            this.setAuth(true)
            this.setUser({name, surname, role})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async authorization(name: string, surname: string, login: string, password: string, role: string){
        await this.registration(name, surname, login, password, role)
        if(this.status == 200 && this.isAuth && this.user != {}) {
            await this.login(login, password)
            if(localStorage.getItem('token') != '') {
                LoginRoute(this.user.role)
            }
        }
    }

    async logout(){
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}
