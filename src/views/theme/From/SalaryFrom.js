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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getName } from 'src/store/action/role'
import Select from 'react-select'

export default function SalaryFrom({
  name,
  setName,
  startdate,
  setStartDate,
  chargepaternes,
  setChargePaternes,
  grosssalary,
  setGrossSalary,
  addHandler
}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getName())
  }, [])
  const Name = useSelector((state) => state.role.nameList)
  const formattedEmployee = Name.map((elem) => {
    return { value: elem.id, label: elem.name }
  })
  const addNameHandler = (e) => {
    setName(e)
  }
  const addStartDateHandler = (e) => {
    setStartDate(e.target.value)
  }
  const addChargesDateHandler = (e) => {
    setChargePaternes(e.target.value)
  }
  const addGrossSalaryHandler = (e) => {
    setGrossSalary(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Employee Name</CFormLabel>
        <Select
          defaultValue={name}
          onChange={setName}
          options={formattedEmployee}
          id="validationDefault01"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="date">Start Date</CFormLabel>
        <CFormInput
          type="date"
          value={startdate}
          onInput={(e) => addStartDateHandler(e)}
          id="validationDefault02"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="ChargePaternes">ChargePaternes</CFormLabel>
        <CFormInput
          type="text"
          value={chargepaternes}
          onInput={(e) => addChargesDateHandler(e)}
          id="validationDefault03"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="Gross Salarys">Gross Salary </CFormLabel>
        <CFormInput
          type="text"
          value={grosssalary}
          onInput={(e) => addGrossSalaryHandler(e)}
          id="validationDefault04"
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
