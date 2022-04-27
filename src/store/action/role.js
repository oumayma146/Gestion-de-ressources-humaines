/* eslint-disable */
import axios from "axios";
export const ROLE ='ROLE';
export const DELETEROLE ='DELETEROLE';
export const ADDROLE ='ADDROLE';
export const NAME ='NAME';

export const getRole = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/role/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:ROLE,payload:{roleList:response.data.roles ,}});
    };
}
export const DeleteRole = (id) => {
    return async (dispatch,getState) =>{
        console.log('inside action',id);
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/role/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETEROLE,payload:{id,}});
    };
}
export const AddRole = (title,list_permissions) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
        formData.append("name", title);
        formData.append("permission",JSON.stringify(list_permissions));
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/role/store`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
            console.log(response.data);
    };

}
 export const UpdateRole = (id ,title,list_permissions) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let permissions = [];
        let list_permissions = JSON.stringify(permissions);
        let formData  = new FormData();
        formData.append("name", title);
        formData.append("permission",list_permissions);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/role/update/${id}`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
            console.log(response.data);
    };
} 

export const getName = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/users/emp',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        console.log("res",response);
        dispatch({type:NAME,payload:{nameList:response.data.user,}});

    };
} 