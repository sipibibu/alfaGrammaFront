import {MultiValue} from "react-select";

export interface IUser {
    name: string,
    surname: string,
    login: string,
    role: string,
    additionalData?: additionalDataUser
}

export interface additionalDataUser{
    age: string,
    education: string,
    interests: string[],
    options?: MultiValue<string> | string,
}
