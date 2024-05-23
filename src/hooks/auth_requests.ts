import axios from "axios";
import { login, logout } from "../state/features/authSlice";
import { useDispatch } from "react-redux";


const LoginRequest = () => {
    const dispatch = useDispatch();

    const login_request = async (username:string, password:string) => {
        try{
            const response = await axios.post(process.env.REACT_APP_API_BACKEND + '/login', {
                username:username,
                password:password
            },{
                withCredentials: true
            });
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
    axios.get(process.env.REACT_APP_API_BACKEND||"",{withCredentials:true})
    .then(response => {
        if(response){
            dispatch(login({username:response.data.username}));
        }
    },
    error => {
        dispatch(logout());
        return;
    })
    
};

export const logout_request = () => (dispatch:any) => {
    axios.post(process.env.REACT_APP_API_BACKEND + "/logout",{}, 
    {withCredentials:true})
    .finally(() => {
        dispatch(logout());
        window.location.reload();
    });
}