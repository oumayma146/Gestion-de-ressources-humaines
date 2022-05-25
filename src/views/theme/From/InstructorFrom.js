/* eslint-disable */
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import React from 'react'

export default function InstructorFrom({
  name,
  setName,
  speciality,
  setSpeciality,
  phonenumber,
  setPhonneNumber,
  addHandler,
}) {
  const addNameHandler = (e) => {
    setName(e.target.value)
  }
  const addNumberHandler = (e) => {
    setPhonneNumber(e.target.value)
  }
  const addSpecialityHandler = (e) => {
    setSpeciality(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Name</CFormLabel>
        <CFormInput
          type="name"
          value={name}
          onInput={(e) => addNameHandler(e)}
          id="validationDefault01"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormLabel>speciality</CFormLabel>
        <CFormInput
          type="text"
          value={speciality}
          onInput={(e) => addSpecialityHandler(e)}
          id="validationDefault02"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>phone number</CFormLabel>
        <CFormInput
          type="number"
          value={phonenumber}
          onInput={(e) => addNumberHandler(e)}
          id="validationDefault03"
          required
        />
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
