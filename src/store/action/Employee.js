/* eslint-disable */
import axios from 'axios'
export const EMPLOYEE = 'EMPLOYEE'
export const DELETEEMPLOYEE = 'DELETEEMPLOYEE'
export const ADDEMPLOYEE = 'ADDEMPLOYEE'
export const EMPLOYEEINFO = 'EMPLOYEEINFO'
export const SEARCHEMPLOYEE = 'SEARCHEMPLOYEE'
export const UPDATEEMPLOYEE = 'UPDATEEMPLOYEE'

export const getEmployee = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const response = await axios.get('http://127.0.0.1:8000/api/users/employee', {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch({ type: EMPLOYEE, payload: { employeeList: response.data.users } })
  }
}
export const DeleteEmployee = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const response = await axios.delete(`http://127.0.0.1:8000/api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    dispatch({ type: DELETEEMPLOYEE, payload: { id } })
  }
}
export const getEmployeeInfo = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const response = await axios.get(`http://127.0.0.1:8000/api/users/employee/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    dispatch({ type: EMPLOYEEINFO, payload: { EmployeeInfo: response.data.user_info } })
  }
}
export const AddEmployee = (
  name,
  Lastname,
  email,
  adress,
  status,
  Gender,
  password,
  post,
  description,
  cinNum,
  BAnum,
  Tnumber,
  startDate,
  endDate,
  Rnumber,
  Nhour,
  type,
  skill,
  languge,
  role,
  Education,
  Certificates,
) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const data = {
      user: {
        name: name,
        prenom: Lastname,
        email: email,
        adresse: adress,
        statu: status.value,
        genre: Gender,
        password: password,
      },
      user_info: {
        numeroCIN: cinNum,
        numeroCarteBancaire: BAnum,
        numeroTelephone: Tnumber,
      },
      contrat: {
        debutdate: startDate,
        findate: endDate,
        matricule: Rnumber,
        nbheure: Nhour,
        typeContart: type.value,
      },

      competance_ids: skill,
      langue_ids: languge,
      role_id: [role?.value],

      posts: [
        {
          title: post,
          description: description,
        },
      ],

      cartification: Certificates,
      education: Education,
    }

    const response = await axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/api/users/create`,
      data: data,
      headers: { Authorization: `Bearer ${token}` },
      'Content-Type': 'multipart/form-data',
    })
    console.log(response.data)
  }
}
export const SearchEmployee = (name) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    dispatch({ type: SEARCHEMPLOYEE, payload: { name } })
  }
}

export const UpdateEmployee = (
    name,
    Lastname,
    email,
    adress,
    status,
    Gender,
    post,
    description,
    cinNum,
    BAnum,
    Tnumber,
    startDate,
    endDate,
    Rnumber,
    Nhour,
    type,
    skill,
    languge,
    role,
    Education,
    Certificates,
    id,
    Employe
  ) => {
  

    return async (dispatch, getState) => {
      const token = getState().auth.token
  
   console.log(Education);
      const data = {
        user: {
          name: name,
          prenom: Lastname,
          email: email,
          adresse: adress,
          statu: status.value,
          genre: Gender,
         
        },
        user_info: {
          id:Employe?.user_info?.id ,
          numeroCIN: cinNum,
          numeroCarteBancaire: BAnum,
          numeroTelephone: Tnumber,
        },
        contrat: {
         id:Employe?.contrat?.id,
          debutdate: startDate,
          findate: endDate,
          matricule: Rnumber,
          nbheure: Nhour,
          typeContart: type.value,
        },
  
        competance_ids: skill,
        langue_ids: languge,
        role_id: [role?.value],
  
        posts: [
          {
            id:Employe.posts[0]?.id,
            title: post,
            description: description,
          },
        ],
  
        cartification: [{
          id:Employe.cartification?.id,
          Certificates }
         ] ,
       

        education: Education,
      }
    
      const response = await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/users/update/${id}`,
        data: data,
        headers: { Authorization: `Bearer ${token}` },
        'Content-Type': 'multipart/form-data',
      })
    
    }
  }