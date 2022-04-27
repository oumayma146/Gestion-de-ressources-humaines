/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function LangugesFrom({languge,setLanguge}) {
    const addlangugeHandler =(e)=>{
        setLanguge(e.target.value)
      }
  return (
    <CForm className="row g-3">
    <CCol md={12}>
      <CFormLabel htmlFor="inputName"> Languge Name</CFormLabel>
      <CFormInput type="name" value={languge} onInput={e => addlangugeHandler(e)}/>
    </CCol>
  </CForm>
  )
}