import {MultiValue} from "react-select";

export interface IUser{
    name: string,
    surname: string,
    login: string,
    role: string
}

export interface IUserAuth extends IUser{
    password: string
}

export interface additionalDataUser{
    age: string,
    education: string,
    interests: string[],
    options?: MultiValue<string> | string
}

export interface additionalDataManager{
    companyName: string,
    description: string
}

export interface IRespondent extends IUser{
    additionalData?: additionalDataUser
}

export interface IManager extends IUser{
    additionalData?: additionalDataManager
}
