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

  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Employee Name</CFormLabel>
        <Select defaultValue={name} onChange={setName} options={formattedEmployee} />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="date">Start Date</CFormLabel>
        <CFormInput type="date" value={startdate} onInput={(e) => addStartDateHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="ChargePaternes">ChargePaternes</CFormLabel>
        <CFormInput type="text" value={chargepaternes} onInput={(e) => addChargesDateHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="Gross Salarys">Gross Salary </CFormLabel>
        <CFormInput type="text" value={grosssalary} onInput={(e) => addGrossSalaryHandler(e)} />
      </CCol>
    </CForm>
  )
}
