import { axiosInstance } from "../axios";
import AxiosResponce from "axios";
import { AuthResponse } from "../models/responce/AuthResponse.ts";
import { IUser, IUserAuth } from "../models/IUser.ts";

export default class AuthService {
  static async login(
    login: string,
    password: string,
  ): Promise<AxiosResponce<AuthResponse>> {
    return axiosInstance.post<AuthResponse>("/auth/login", {
      email: login,
      password: password,
    });
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

  static async registration(
    userAuth: IUserAuth,
  ): Promise<AxiosResponce<AuthResponse>> {
    return axiosInstance.post<AuthResponse>(`/auth/register/${userAuth.role}`, {
      firstname: userAuth.name,
      lastname: userAuth.surname,
      email: userAuth.login,
      password: userAuth.password,
    });
  }

  static async logout(): Promise<void> {
    return await axiosInstance.post("/auth/logout");
  }
}
