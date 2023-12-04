export interface AuthResponse {
    data: {
        access_jwt_token:string,
        message:string,
        refresh_jwt_token:string
    },
    status:number
}
