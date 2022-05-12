/* eslint-disable */
import axios from "axios";
export const PERMISSION ='PERMISSION';
export const DELETEPERMISSION ='DELETEPERMISSION';


export const getPermission = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/permission',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:PERMISSION,payload:{permission:response.data.permission}});
    };
}
export const DeletePermission = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/permission/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETEPERMISSION,payload:{id,}});
    };
}
export const AddPermission= (name,guard_name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
       
        formData.append("name", name);
        formData.append("guard_name",guard_name);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/permission/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
            console.log(response.data);
    };

}