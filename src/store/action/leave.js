/* eslint-disable */
import axios from "axios";
export const LEAVE ='LEAVE';
export const DELETELEAVE ='DELETELEAVE';
export const ADDLEAVE ='ADDLEAVE';
export const SEARCHLEAVE ='SEARCHLEAVE';

export const getLeave = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/congee/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        console.log(response.data.congees);
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
        formData.append("typeCongee", type.value);
        formData.append("user",name.value)

        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/congee/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
    };

}
export const UpdateLeave= (startdate,enddate,nbday,type,name,id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
     
        formData.append("debut", startdate);
        formData.append("fin",enddate);
        formData.append("nbJour", nbday);
        formData.append("typeCongee", type.value);
        formData.append("user_id",name.value)
        formData.append("_method", "put");
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/congee/update/${id}`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            }) 
          
    };

}
export const SearchLeave = (name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
    
     dispatch({type:SEARCHLEAVE,payload:{name,}});
    
    };
}