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
export const AddEmployee= (name,Lastname,email,adress,status,Gender,password,post,description,cinNum,BAnum,Tnumber,startDate,endDate,Rnumber,Nhour,type,skill,languge,role) => {
  
    return async (dispatch,getState) =>{
        const token = getState().auth.token;
        console.log("Gender",Gender);
    const data={
            "user":{
                   "name":name,
                   "prenom":Lastname,
                    "email":email,
                    "adresse":adress,
                    "statu":status.value,
                    "genre":Gender,
                    "password":password
                  
          },
                    "user_info":{
                
                    "numeroCIN":cinNum,
                    "numeroCarteBancaire": BAnum,
                    "numeroTelephone":  Tnumber
              },
             "contrat":{
             
                  "debutdate":startDate,
                    "findate" :endDate,
                    "matricule":Rnumber,
                    "nbheure":Nhour,
                    "typeContart":type.value,
                   
             },
            
              "competance_ids":skill,
               "langue_ids":languge,
               "role_id":[role?.value],
        
               "posts":[{
             
                   "title":post,
                   "description":description
                   
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