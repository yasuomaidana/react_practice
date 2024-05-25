import axios from 'axios';

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
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refresh_token = localStorage.getItem('refresh_token');
            if (refresh_token) {
                try {
                    const response = await axios.post(process.env.REACT_APP_API_BACKEND + '/oauth/access_token', {
                        grant_type: 'refresh_token',
                        refresh_token: refresh_token
                    });
                    const new_access_token = response.data.access_token;
                    localStorage.setItem('access_token', new_access_token);
                    originalRequest.headers.Authorization = `Bearer ${new_access_token}`;
                    return axios(originalRequest);
                } catch (err) {
                    // Handle refresh token error
                }
            }
        }
        return Promise.reject(error);
    }
);