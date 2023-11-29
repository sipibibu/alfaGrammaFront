import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {AuthResponce} from "../models/responce/AuthResponce";
import AxiosResponce from "axios";

export default class Store {
    user = {} as IUser
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

    async login(login: string, password: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.access_jwt_token)
            this.setAuth(true)
            this.setLogin(true)
            this.setUser({name: this.user.name, surname: this.user.surname, login, role: this.user.role})
            console.log(response)
            console.log(this.isAuth, this.isLogin)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(name: string, surname: string, login: string, password: string, role: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.registration(name, surname, login, password, role)
            this.setAuth(true)
            this.setUser({name, surname, login, role})
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async authorization(name: string, surname: string, login: string, password: string, role: string){
        await this.registration(name, surname, login, password, role)
        if(this.isAuth) {
            await this.login(login, password)
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
