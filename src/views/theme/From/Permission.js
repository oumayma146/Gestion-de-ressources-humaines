/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function PermissionFrom({name,setName,addHandler, setGuard_name}) {
    const addNameHandler =(e)=>{
        setName(e.target.value)
      }
   
  return (
    <CForm className="row g-3">
    <CCol md={12}>
      <CFormLabel htmlFor="inputName">Permission Name</CFormLabel>
      <CFormInput type="name" value={name} onInput={e => addNameHandler(e)}    id="validationDefault01"
          required/>
    </CCol>
    <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </CButton>
        </div></CCol>
  </CForm>
  )
}
