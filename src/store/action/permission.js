/* eslint-disable */
import axios from "axios";
export const PERMISSION ='PERMISSION';


export const getPermission = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/role/permission',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:PERMISSION,payload:{permission:response.data.permission}});
    };
}