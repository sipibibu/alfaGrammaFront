import axios from "axios";

export const axiosInstance = axios.create({
        baseURL: "http://78.153.5.24:8080",
    }
)

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
