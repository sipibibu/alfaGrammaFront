import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://alpha-gramms.zavsoft.net",
});

axiosInstance.interceptors.request.use((config) => {
const token = localStorage.getItem("token");

if (token && config.headers) {
  config.headers["Authorization"] = `Bearer ${token}`;
}

return config;
});
