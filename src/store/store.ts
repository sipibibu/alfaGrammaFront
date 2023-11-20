import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {AuthResponce} from "../models/responce/AuthResponce";
import AxiosResponce from "axios";

export default class Store {
    user = {} as IUser
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(auth: boolean){
        this.isAuth = auth
    }

    setUser(user: IUser){
        this.user = user
    }

    async login(name: string, surname: string, login: string, password: string, role: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.access_jwt_token)
            this.setAuth(true)
            this.setUser({name, surname, role})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(name: string, surname: string, login: string, password: string, role: string){
        try {
            const response: AxiosResponce<AuthResponce> = await AuthService.registration(login, password, role)
            localStorage.setItem('token', response.data.access_jwt_token)
            this.setAuth(true)
            this.setUser({name, surname, role})
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}
