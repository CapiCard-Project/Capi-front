import axios from "axios";
import { useNavigate } from "react-router-dom";


export const apiService = axios.create({
    baseURL: 'https://api.capi.shop/api/',
})

apiService.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
)

export default apiService;