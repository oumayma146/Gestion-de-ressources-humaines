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
  
        dispatch({type:EMPLOYEEINFO,payload:{EmployeeInfo:response.data.user_info ,}});
    };
}
export const AddEmployee= (name,Lastname,email,adress,status,Gender,password,cinNum,BAnum,Tnumber,post,description) => {
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
    const    data={
            "user":{
                   "name":name,
                   "prenom":Lastname,
                    "email":email,
                    "adresse":adress,
                    "statu":status,
                    "genre":Gender,
                    "password":password
                  
          },
                    "user_info":{
                
                    "numeroCIN":cinNum,
                    "numeroCarteBancaire": BAnum,
                    "numeroTelephone":  Tnumber
              },
             "contrat":{
             
                  "debutdate":"2022-04-01",
                    "findate" :"2022-04-06",
                    "matricule":"23346",
                    "nbheure":"24",
                    "typeContart":"CDI"
                   
             },
            
              "competance_ids":[1,3,5,2] ,
               "langue_ids":[1,2,3],
               "role_id":[3],
        
               "posts":[{
             
                   "title":"pddd",
                   "description":"kkkkk"
                   
               }],
              
               "cartification":[{
                
                   "titre":"redux",
                   "date":"2022-04-01",
                   "source":"5555"
                  
               },
               {
                    "titre":"react",
                   "date":"2022-04-01",
                   "source":"dd"
                            
               }] ,
               "education":[{
                   
                   "diplome":"master"
                   
                
               }]
             
              
             
                
        }
      /*   let formData  = new FormData();
       
        formData.append("debut", startdate);
        formData.append("fin",enddate);
        formData.append("nbJour", nbday);
        formData.append("typeCongee", type);
        formData.append("user",name) */
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/users/create`,
             data: data,
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