export interface AuthResponse {
  data: AuthResponseData;
  status: number;
}

export interface AuthResponseData {
  access_jwt_token: string;
  message: string;
  refresh_jwt_token: string;
}
