/* eslint-disable */
import axios from "axios";
export const INSTRUCTOR ='INSTRUCTOR';
export const DELETEINSTRUCTOR ='DELETEINSTRUCTOR';
export const ADDINSTRUCTOR ='ADDINSTRUCTOR';
export const NAME ='NAME';

export const getInstructor = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/formateur/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:INSTRUCTOR,payload:{instructorList:response.data.formateur ,}});
    };
}
export const DeleteInstructor = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/formateur/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETEINSTRUCTOR,payload:{id,}});
    };
}
export const AddInstructor= (speciality,phonenumber,name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
        formData.append("nom", name);
        formData.append("specialité",speciality);
        formData.append("numero",phonenumber)
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/formateur/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
    
    };
}
export const getName = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/formateur/nom',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        console.log("rse",response);
        dispatch({type:NAME,payload:{nameList:response.data.formateur,}});

    };
} 