import {axiosInstance} from "../axios";
import AxiosResponce from 'axios';
import {AuthResponse} from "../models/responce/AuthResponse.ts";

export default class AuthService{
    static async login(login: string, password: string): Promise<AxiosResponce<AuthResponse>>{
        return axiosInstance.post<AuthResponse>("/auth/login",
            {
                username: login,
                password: password
            }
        )
    }

    // static async login(login: string, password: string): Promise<AxiosResponce<AuthResponse>>{
    //     return axiosInstance.post<AuthResponse>("/auth/login",
    //         {
    //             username: login,
    //             password: password
    //         },
    //         {
    //             headers: {
    //                 'RequireAuth': 'Bearer ' + localStorage.getItem('token')
    //             }
    //         }
    //     )
    // }

    static async registration(name: string, surname: string, login: string, password: string, role: string): Promise<AxiosResponce<AuthResponse>>{
        return axiosInstance.post<AuthResponse>(`/auth/register/${role}`,
            {
                firstname: name,
                lastname: surname,
                email: login,
                password: password
            })
    }

    static async logout(): Promise<void>{
        return await axiosInstance.post("/auth/logout")
    }

}
