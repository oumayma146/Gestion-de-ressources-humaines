/* eslint-disable */
import axios from "axios";
export const TRAINING ='TRAINING';
export const DELETETRAINING ='DELETETRAINING';
export const ADDTRAINING ='ADDTRAINING';
export const INSTRUCTORINFO ='INSTRUCTORINFO';

export const getTraining = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/formation/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:TRAINING,payload:{trainingList:response.data.formation ,}});
    };
}
export const DeleteTraining = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/formation/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETETRAINING,payload:{id,}});
    };
}
export const getInstructorInfo = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get(`http://127.0.0.1:8000/api/formation/${id}`,{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
   
        dispatch({type:INSTRUCTORINFO,payload:{InstructorInfoo:response.data.formateurs ,}});
    };
}
export const AddTraining= ( date,nbHour,place,price,title,mode,list_instructor ) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
        formData.append("date", date);
        formData.append("nbHeure",nbHour);
        formData.append("titre", title);
        formData.append("local",place);
        formData.append("prix",price);
        formData.append("type_payement",mode.value);
        formData.append("formateurs",JSON.stringify(list_instructor));
        console.log(mode);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/formation/store`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })

         
    
    };
}