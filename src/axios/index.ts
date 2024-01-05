import axios from "axios";
import { getToken } from "../utils/token.ts";

export const axiosInstance = axios.create({
  baseURL: "https://alpha-gramms.zavsoft.net",
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
