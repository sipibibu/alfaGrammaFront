import {jwtDecode} from "jwt-decode";
import {IToken} from "../models/IToken.ts";
import {AuthResponse} from "../models/responce/AuthResponse.ts";
import {IUser} from "../models/IUser.ts";

export const decodeToken = (response: AuthResponse) : IUser => {
    const decode:IToken = jwtDecode(response.data.access_jwt_token)
    const [name, surname] = decode.sub.split(' ')
    const login = response.data.message.split(' ')[4]
    return {name: name, surname: surname, login: login,role: decode.scope}
}
