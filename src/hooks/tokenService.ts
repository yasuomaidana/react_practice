import axios from "axios";
import { logout_request } from "./auth_requests";

async function refreshToken(refreshToken:string): Promise<string|null>{
	try{
        const response = await axios.post(process.env.REACT_APP_API_BACKEND + '/oauth/access_token', {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        });
        const new_access_token = response.data.access_token;
        localStorage.setItem('access_token', new_access_token);
        return new_access_token;

    } catch(error){
        return null;
    }
}

async function handleUnauthorizedError(error: any): Promise<any> {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Refreshing token...');
      const refreshToken_ = await refreshToken(localStorage.getItem('refresh_token') || '');
      if (refreshToken_) {
        const newAccessToken = await refreshToken(refreshToken_);
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
        else{
          logout_request();
        }
      }
    }
    return Promise.reject(error);
  }

  export {refreshToken, handleUnauthorizedError};