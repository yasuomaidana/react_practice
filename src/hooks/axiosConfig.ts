import axios from 'axios';
import { handleUnauthorizedError } from './tokenService';

axios.interceptors.request.use(
    async config => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => handleUnauthorizedError(error)
);