import axios from "axios";
import { login } from "../state/features/authSlice";
import { useDispatch } from "react-redux";


const login_request = async (username:string, password:string) => {

    
    try{
        
        const response = await axios.post(process.env.REACT_APP_API_BACKEND + '/login', {
            username:username,
            password:password
        },{
            withCredentials: true
        }).then(response => 
            response
        );
        
        //(login({username:response.data.username}));
        return response.data.username;
    }catch(err){
        return null;
    }
};

export default login_request;

