/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPermission } from 'src/store/action/permission'


export default function RoleFrom({setTitle,setPermission,permission,title,addHandler}) {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getPermission());
  }, [])
  const onSubmit = (e) => {
    e.preventDefault()
  }
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
    <CForm className="row g-3" onSubmit={onSubmit}>
    <CCol md={6}>
      <CFormLabel >Title</CFormLabel>
      <CFormInput type="text" value={title} onInput={e => addTitleHandler(e)} id="validationDefault01"
          required/>
    </CCol>
    
    <CFormLabel htmlFor="inputAddress">Permission</CFormLabel>
    {Permission.map((elem)=>{
      return(
      <CCol xs={2}> 
      <CFormCheck  onChange={checkValue} value={elem.id} id={elem.id} label={elem.name} 
     />
    </CCol>
      )
    })}
    
    <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </CButton>
        </div>
      </CCol>
  </CForm>
  )
  }
