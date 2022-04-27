/* eslint-disable */
import axios from "axios";
export const LANG ='LANG';
export const SKILL='SKILL';
export const DELETESKILL ='DELETESKILL';
export const DELETELANG ='DELETELANG';
export const ADDSKILL ='ADDSKILL';
export const ADDLANG ='ADDLANG';


export const getLanguge = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/langue/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:LANG,payload:{langugeList:response.data.langue ,}});
    };
}
export const getSkill = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/competance/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:SKILL,payload:{skillList:response.data.competance ,}});
    };
}
/* export const DeleteAds = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/ads/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
        console.log("hhh",response);
     dispatch({type:DELETEADS,payload:{id,}});
    };
} */
export const AddSkill= ( skill ) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();  
        formData.append("nomCompetence", skill);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/competance/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })

         console.log("res",response);
    
    };
}
export const AddLanguge= ( languge) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();  
        formData.append("nom", languge);
        
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/langue/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })

         console.log("res",response);
    
    };
}