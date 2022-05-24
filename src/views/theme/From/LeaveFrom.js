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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getName } from 'src/store/action/role'
import Select from 'react-select'
export default function LeaveFrom({
  setStartDate,
  setEndDate,
  setNbDays,
  setType,
  setName,
  name,
  startdate,
  enddate,
  nbday,
  type,
}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getName())
  }, [])
  const addStartDateHandler = (e) => {
    setStartDate(e.target.value)
  }
  const addEndDateHandler = (e) => {
    setEndDate(e.target.value)
  }
  const addNbDaysHandler = (e) => {
    setNbDays(e.target.value)
  }
  const addTypeHandler = (el) => {
    setType(el)
  }
  const addNameHandler = (e) => {
    setName(e)
    console.log(e)
  }

  const typeList = [
    { label: 'congé de maladie', value: 'congé de maladie' },
    { label: 'congé maternité', value: 'congé maternité' },
    { label: 'Congé sans solde', value: 'Congé sans solde' },
  ]

  const Name = useSelector((state) => state.role.nameList)
  const formattedEmployee = Name.map((elem) => {
    return { value: elem.id, label: elem.name }
  })

  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Employee Name</CFormLabel>
        <Select defaultValue={name} onChange={setName} options={formattedEmployee} />
      </CCol>
      <CCol md={6}>
        <CFormLabel>Start Date</CFormLabel>
        <CFormInput type="date" value={startdate} onInput={(e) => addStartDateHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>End Date</CFormLabel>
        <CFormInput value={enddate} onInput={(e) => addEndDateHandler(e)} type="date" />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Number Of Days </CFormLabel>
        <CFormInput value={nbday} onInput={(e) => addNbDaysHandler(e)} type="number" />
      </CCol>
      <CCol md={3}>
        <CFormLabel>Type</CFormLabel>
        <Select defaultValue={type} onChange={setType} options={typeList} />
      </CCol>
    </CForm>
  )
}
