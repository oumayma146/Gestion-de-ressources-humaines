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
import { MultiSelect } from 'react-multi-select-component'
import { useDispatch, useSelector } from 'react-redux'
import { getName } from 'src/store/action/instructor'
import Select from 'react-select'

export default function TrainingFrom({
  date,
  setDate,
  nbHour,
  setNbhour,
  place,
  setPlace,
  price,
  setPrice,
  title,
  setTitle,
  mode,
  setMode,
  list_instructor,
  setListInstructor,
}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getName())
  }, [])
  const Name = useSelector((state) => state.instructor.nameList)
  const nameInstructor = Name.map((elem) => {
    return { value: elem.id, label: elem.nom }
  })

  const addDateHandler = (e) => {
    setDate(e.target.value)
  }
  const addNbhourHandler = (e) => {
    setNbhour(e.target.value)
  }
  const addPlaceHandler = (e) => {
    setPlace(e.target.value)
  }
  const addPriceHandler = (e) => {
    setPrice(e.target.value)
  }
  const addTitleHandler = (e) => {
    setTitle(e.target.value)
  }
  /* const addModeHandler = (e) => {
    setMode(e)
    console.log(e)
  }
 */
  const ModeList = [
    { label: 'check', value: 'check' },
    { label: 'Bank cards', value: 'Bank cards' },
    { label: 'cash', value: 'cash' },
  ]

  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel>Date</CFormLabel>
        <CFormInput type="date" value={date} onInput={(e) => addDateHandler(e)} />
      </CCol>
      <CCol md={6}>
        <CFormLabel>Number Hour</CFormLabel>
        <CFormInput type="text" value={nbHour} onInput={(e) => addNbhourHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Title</CFormLabel>
        <CFormInput type="text" value={title} onInput={(e) => addTitleHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Place </CFormLabel>
        <CFormInput value={place} onInput={(e) => addPlaceHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputAddress">Price </CFormLabel>
        <CFormInput type="text " value={price} onInput={(e) => addPriceHandler(e)} />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputState">Mode of payment</CFormLabel>
        <Select defaultValue={mode} onChange={setMode} options={ModeList} />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputState">Instructor</CFormLabel>
        <div>
          <MultiSelect
            options={nameInstructor}
            value={list_instructor}
            onChange={setListInstructor}
            labelledBy="Select"
          />
        </div>
      </CCol>
    </CForm>
  )
}
