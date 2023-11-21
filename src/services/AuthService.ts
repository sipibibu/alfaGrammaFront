import {axiosInstance} from "../axios";
import AxiosResponce from 'axios';
import {AuthResponce} from "../models/responce/AuthResponce";

export default class AuthService{
    static async login(login: string, password: string): Promise<AxiosResponce<AuthResponce>>{
        return axiosInstance.post<AuthResponce>("/auth/login",
            {
                username: login,
                password: password
            }
        )
    }

    // static async login(login: string, password: string): Promise<AxiosResponce<AuthResponce>>{
    //     return axiosInstance.post<AuthResponce>("/auth/login",
    //         {
    //             username: login,
    //             password: password
    //         },
    //         {
    //             headers: {
    //                 'Authorization': 'Bearer ' + localStorage.getItem('token')
    //             }
    //         }
    //     )
    // }

    static async registration(login: string, password: string, role: string): Promise<AxiosResponce<AuthResponce>>{
        return axiosInstance.post<AuthResponce>(`/auth/register/${role}`,
            {
                username: login,
                password: password
            })
    }

    static async logout(): Promise<void>{
        return await axiosInstance.post("/auth/logout")
    }

}
