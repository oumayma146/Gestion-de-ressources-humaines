/* eslint-disable */
import axios from "axios";
export const LEAVE ='LEAVE';
export const DELETELEAVE ='DELETELEAVE';
export const ADDLEAVE ='ADDLEAVE';

export const getLeave = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/congee/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:LEAVE,payload:{leaveList:response.data.congees ,}});
    };
}
export const DeleteLeave = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/congee/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETELEAVE,payload:{id,}});
    };
}
export const AddLeave= (startdate,enddate,nbday,type,name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
       
        formData.append("debut", startdate);
        formData.append("fin",enddate);
        formData.append("nbJour", nbday);
        formData.append("typeCongee", type);
        formData.append("user",name)
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/congee/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
            console.log(response.data);
    };

}