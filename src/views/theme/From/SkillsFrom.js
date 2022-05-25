/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'


export default function SkillsFrom({skill,setSkill,addHandler}) {
    const addSkillHandler =(e)=>{
        setSkill(e.target.value)
      }
  return (
    <CForm className="row g-3">
    <CCol md={12}>
      <CFormLabel htmlFor="inputName">Skills Name</CFormLabel>
      <CFormInput type="name" value={skill} onInput={e => addSkillHandler(e)}/>
    </CCol>
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
