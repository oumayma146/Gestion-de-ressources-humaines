/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function SkillsFrom({skill,setSkill}) {
    const addSkillHandler =(e)=>{
        setSkill(e.target.value)
      }
  return (
    <CForm className="row g-3">
    <CCol md={12}>
      <CFormLabel htmlFor="inputName">Skills Name</CFormLabel>
      <CFormInput type="name" value={skill} onInput={e => addSkillHandler(e)}/>
    </CCol>
  </CForm>
  )
}
