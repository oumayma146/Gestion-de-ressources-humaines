/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function InstructorFrom({name,setName,speciality,setSpeciality,phonenumber,setPhonneNumber}) {
  const addNameHandler =(e)=>{
    setName(e.target.value)
  }
  const addNumberHandler =(e)=>{
    setPhonneNumber(e.target.value)
  }
  const addSpecialityHandler =(e)=>{
    setSpeciality(e.target.value)
  }
  

  return (
    <CForm className="row g-3">
    <CCol md={6}>
      <CFormLabel htmlFor="inputName">Name</CFormLabel>
      <CFormInput type="name"value={name} onInput={e => addNameHandler(e)}/>
    </CCol>
    <CCol md={6}>
      <CFormLabel >speciality</CFormLabel>
      <CFormInput type="text"value={speciality} onInput={e => addSpecialityHandler(e)} />
    </CCol>
    <CCol xs={6}>
      <CFormLabel >phone number</CFormLabel>
      <CFormInput type='number' value={phonenumber} onInput={e => addNumberHandler(e)}/>
    </CCol>
   
    
  </CForm>
  )
}
