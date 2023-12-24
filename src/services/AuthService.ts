import {axiosInstance} from "../axios";
import AxiosResponce from 'axios';
import {AuthResponse} from "../models/responce/AuthResponse.ts";
import {IUserAuth} from "../models/IUser.ts";

export default class AuthService{
    static async login(login: string, password: string): Promise<AxiosResponce<AuthResponse>>{
        return axiosInstance.post<AuthResponse>("/auth/login",
            {
                email: login,
                password: password
            }
        )
    }

    static async registration(userAuth: IUserAuth): Promise<AxiosResponce<AuthResponse>>{
        return axiosInstance.post<AuthResponse>(`/auth/register/${userAuth.role}`,
            {
                firstName: userAuth.name,
                lastName: userAuth.surname,
                email: userAuth.login,
                password: userAuth.password
            })
    }

    static async logout(): Promise<void>{
        return await axiosInstance.post("/auth/logout")
    }

}
