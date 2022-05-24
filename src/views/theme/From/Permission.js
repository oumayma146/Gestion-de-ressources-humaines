/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function PermissionFrom({name,setName,guard_name, setGuard_name}) {
    const addNameHandler =(e)=>{
        setName(e.target.value)
      }
      const addGuardHandler =(e)=>{
        setGuard_name(e.target.value)
      }
  return (
    <CForm className="row g-3">
    <CCol md={12}>
      <CFormLabel htmlFor="inputName">Permission Name</CFormLabel>
      <CFormInput type="name" value={name} onInput={e => addNameHandler(e)}/>
    </CCol>
  {/*   <CCol md={12}>
      <CFormLabel htmlFor="inputName">Guard_Name</CFormLabel>
      <CFormInput type="name" value={guard_name} onInput={e => addGuardHandler(e)}/>
    </CCol> */}
  </CForm>
  )
}
