import {jwtDecode} from "jwt-decode";
import {IToken} from "../models/IToken.ts";
import {AuthResponse} from "../models/responce/AuthResponse.ts";

export const decodeToken = (response: AuthResponse) : string => {
    const decode:IToken = jwtDecode(response.data.access_jwt_token)
    return decode.scope
}
