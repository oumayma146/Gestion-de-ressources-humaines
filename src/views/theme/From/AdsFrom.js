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
import React, { Component, useState } from 'react'
import Select from 'react-select'
import { MultiSelect } from 'react-multi-select-component'

export default function AdsFrom({
  title,
  abs,
  date,
  poster,
  typeliste,
  setTitle,
  setAbs,
  setDate,
  setPoster,
  setTypeliste,
}) {
  const [selected, setSelected] = useState([])
  const addDateHandler = (e) => {
    setDate(e.target.value)
  }
  const addAbsHandler = (e) => {
    setAbs(e.target.value)
  }

  const addPosterHandler = (e) => {
    setPoster(e.target.value)
  }
  const addTitleHandler = (e) => {
    setTitle(e.target.value)
  }

  const options = [
    { value: 1, label: 'Text, image and rich media ads' },
    { value: 2, label: 'Video Ads' },
    { value: 3, label: 'Interactive Ads' },
  ]
  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel>Title</CFormLabel>
        <CFormInput type="text" value={title} onInput={(e) => addTitleHandler(e)} />
      </CCol>
      <CCol md={6}>
        <CFormLabel>Abstract</CFormLabel>
        <CFormInput type="ltext" value={abs} onInput={(e) => addAbsHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Date</CFormLabel>
        <CFormInput type="date" value={date} onInput={(e) => addDateHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Poster </CFormLabel>
        <CFormInput type="file" value={poster} onInput={(e) => addPosterHandler(e)} />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputState">Type</CFormLabel>
        <div>
          <MultiSelect
            options={options}
            value={typeliste}
            onChange={setTypeliste}
            labelledBy="Select"
          />
        </div>
      </CCol>
    </CForm>
  )
}
