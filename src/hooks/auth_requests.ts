import axios from "axios";
import { login, logout } from "../state/features/authSlice";
import { useDispatch } from "react-redux";


const LoginRequest = () => {
    const dispatch = useDispatch();

    const login_request = async (username:string, password:string, remember: boolean) => {
        try{
            const response = await axios.post(process.env.REACT_APP_API_BACKEND + '/login', {
                username:username,
                password:password
            },{
                headers: {
                    remember: remember
                }
            });

            const { access_token, refresh_token } = response.data;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            dispatch(login({username:response.data.username}));
            return true;
        }catch(err){
            return null;
        }
    };
    return login_request;
};

export default LoginRequest;

export const initializeAuht = () => (dispatch:any) => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        dispatch(login({ username: 'username' })); // You might need to fetch the username from the backend or store it in local storage
    } else {
        dispatch(logout());
    }
};

export const logout_request = () => (dispatch:any) => {
    axios.post(process.env.REACT_APP_API_BACKEND + "/logout", {
        refreshToken: localStorage.getItem('refresh_token')
    }).catch(error => {console.log(error);return null;})
    .finally(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(logout());
        // window.location.reload();
    });
}