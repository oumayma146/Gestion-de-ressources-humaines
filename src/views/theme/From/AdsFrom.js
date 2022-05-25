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
  addHandler,
}) {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const addDateHandler = (e) => {
    setDate(e.target.value)
  }
  const addAbsHandler = (e) => {
    setAbs(e.target.value)
  }

  const addPosterHandler = (e) => {
    setPoster(e.target.files[0])
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
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel>Title</CFormLabel>
        <CFormInput
          type="text"
          value={title}
          onInput={(e) => addTitleHandler(e)}
          id="validationDefault01"
          required
        />
      </CCol>
      <CCol md={6}>
        <CFormLabel>Abstract</CFormLabel>
        <CFormInput
          type="text"
          value={abs}
          onInput={(e) => addAbsHandler(e)}
          id="validationDefault02"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel>Date</CFormLabel>
        <CFormInput
          type="date"
          value={date}
          onInput={(e) => addDateHandler(e)}
          id="validationDefault03"
          required
        />
      </CCol>
      <CCol xs={6}>
        <label style={{ height: '40px' }}>Poster</label>
        <br></br>

        <input type="file" onChange={addPosterHandler} id="validationDefault04" required></input>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputState">Type</CFormLabel>
        <div>
          <MultiSelect
            options={options}
            value={typeliste}
            onChange={setTypeliste}
            labelledBy="Select"
            id="validationDefault05"
            required
          />
        </div>
      </CCol>
      <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addHandler} className="me-md-2">
            Save
          </CButton>
        </div>{' '}
      </CCol>
    </CForm>
  )
}
