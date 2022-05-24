/* eslint-disable */
import axios from "axios";
export const EMPLOYEE ='EMPLOYEE';
export const DELETEEMPLOYEE ='DELETEEMPLOYEE';
export const ADDEMPLOYEE ='ADDEMPLOYEE';
export const EMPLOYEEINFO ='EMPLOYEEINFO';
export const SEARCHEMPLOYEE='SEARCHEMPLOYEE'

export const getEmployee = () => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get('http://127.0.0.1:8000/api/users/employee',{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
        dispatch({type:EMPLOYEE,payload:{employeeList:response.data.users ,}});
    };
}
export const DeleteEmployee = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.delete(`http://127.0.0.1:8000/api/users/${id}`,{ headers: {"Authorization" :`Bearer ${token}`, }} 
        )
        
     dispatch({type:DELETEEMPLOYEE,payload:{id,}});
    };
}
export const getEmployeeInfo = (id) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        const response = await axios.get(`http://127.0.0.1:8000/api/users/employee/${id}`,{ headers: {"Authorization" :`Bearer ${token}` }} 
        )
   console.log('emp',response.data.user_info );
        dispatch({type:EMPLOYEEINFO,payload:{EmployeeInfo:response.data.user_info ,}});
    };
}
export const AddEmployee= () => {
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
            url: `http://127.0.0.1:8000/api/users/create`,
             data: formData,
             headers: {"Authorization" :`Bearer ${token}`} ,
             "Content-Type": "multipart/form-data" 
            })
            console.log(response.data);
    };
}
export const SearchEmployee=(name) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
    
     dispatch({type:SEARCHEMPLOYEE,payload:{name,}});
    
    };
}