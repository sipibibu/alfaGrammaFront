import {axiosInstance} from "../axios";
import AxiosResponce from 'axios';
import {AuthResponce} from "../models/responce/AuthResponce";

export default class AuthService{
    static async login(login: string, password: string): Promise<AxiosResponce<AuthResponce>>{
        const access = await axiosInstance.post<AuthResponce>("/auth/login",
            {
                username: login,
                password: password
            }).then(response => response)
        return {data: access.data, status: access.status}
    }

    static async registration(login: string, password: string, role: string): Promise<AxiosResponce<AuthResponce>>{
        const access = await axiosInstance.post<AuthResponce>(`/auth/register/${role}`,
            {
                username: login,
                password: password
            }).then(response => response)
        return {status: access.status}
    }

    static async logout(): Promise<void>{
        return await axiosInstance.post("/auth/logout")
    }

}
