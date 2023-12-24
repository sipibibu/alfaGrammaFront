import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://78.153.5.24:8080",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
