import {axiosInstance} from "../const";

export default class AuthService{
    static async axiosGet(login: string, password: string){
        return await axiosInstance.post("/login",
            {
                username: login,
                password: password
            })
    }
}
