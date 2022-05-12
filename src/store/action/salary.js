/* eslint-disable */
import axios from "axios";
export const SALARY ='SALARY';
export const DELETESALARY ='DELETESALARY';
export const ADDSALARY ='ADDSALARY';

export const getSalary = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/salaire/',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:SALARY,payload:{salaryList:response.data.salaires ,}});
    };
}
export const DeleteSalary = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/salaire/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
     dispatch({type:DELETESALARY,payload:{id,}});
    };
}
export const AddSalary= (startdate,chargepaternes,grosssalary,name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        let formData  = new FormData();
        formData.append("Datedebut", startdate);
        formData.append("ChargePaterneles",chargepaternes);
        formData.append("SalaireBrut", grosssalary);
        formData.append("user",name)
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/salaire/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
    
    };
}