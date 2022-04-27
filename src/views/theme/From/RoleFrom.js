/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPermission } from 'src/store/action/permission'


export default function RoleFrom({setTitle,setPermission,permission,title}) {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getPermission());
  }, [])

  const checkValue = (e) => {
 let list_permissions =[...permission]
 list_permissions.push(e.target.value)

 setPermission(list_permissions);
   
  }
  const addTitleHandler =(e)=>{
    setTitle(e.target.value)
  }

  const Permission = useSelector(state => state.permissions.permissions);

  return (
    <CForm className="row g-3">
    <CCol md={6}>
      <CFormLabel >Title</CFormLabel>
      <CFormInput type="text" value={title} onInput={e => addTitleHandler(e)} />
    </CCol>
    
    <CFormLabel htmlFor="inputAddress">Permission</CFormLabel>
    {Permission.map((elem)=>{
      return(
      <CCol xs={2}>
      
      <CFormCheck  onChange={checkValue} value={elem.id} id={elem.id} label={elem.name}/>
    </CCol>
      )
    })}
    
   
  </CForm>
  )
  }
