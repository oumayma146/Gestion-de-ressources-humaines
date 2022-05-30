/* eslint-disable */
import { cilColorBorder, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { useDispatch, useSelector } from 'react-redux'
import { getLanguge, getSkill } from 'src/store/action/configuration'
import Select from 'react-select'

export default function MoreInfoFrom({
  Education,
  setEducation,
  skill,
  setSkill,
  languge,
  setLanguge,
  Certificates,
  setCertificates,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  Nhour,
  setNhour,
  Rnumber,
  setRnumber,
  type,
  setType
}) {
  const [educ, seteduc] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLanguge())
    dispatch(getSkill())
  }, [])
  const Languges = useSelector((state) => state.conf.langugeList)
  const Skill = useSelector((state) => state.conf.skillList)
  const nameLanguge = Languges.map((elem) => {
    return { value: elem.id, label: elem.nom }
  })
  const nameSkills = Skill.map((el) => {
    return { value: el.id, label: el.nomCompetence }
  })
  const typeList = [
    { label: 'CDI', value: 'CDI' },
    { label: 'CDD', value: 'CDD' },
    { label: 'CVP', value: 'CVP' },
  ]
  const addStartDateHandler = (e) => {
    setStartDate(e.target.value)
  }
  const addEndDateHandler = (e) => {
    setEndDate(e.target.value)
  }
  const addNhourHandler = (e) => {
    setNhour(e.target.value)
  }
  const addRgNumberHandler = (e) => {
    setRnumber(e.target.value)
  }
  useEffect(() => {
    let edu = []
    edu.push({ id: 1, text: educ })
    seteduc('')
    setEducation(edu)
    let cert = []
    cert.push({ id: 1, title: '', date: '', source: '' })
    setCertificates(cert)
  }, [])

  const addEducationhandler = () => {
    let edu = [...Education]
    edu.push({ id: Math.random(), text: educ })
    setEducation(edu)
  }

  const addCertifhandler = () => {
    let cert = [...Certificates]
    cert.push({ id: Math.random(), title: '', date: '', source: '' })
    setCertificates(cert)
  }

  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel htmlFor="inputLanguage">Language</CFormLabel>

        <div>
          <MultiSelect
            options={nameLanguge}
            value={languge}
            onChange={setLanguge}
            labelledBy="Select"
          />
        </div>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="inputSkills">Skills</CFormLabel>

        <div>
          <MultiSelect options={nameSkills} value={skill} onChange={setSkill} labelledBy="Select" />
        </div>
      </CCol>

      <CCol xs={6}>
        <CFormLabel htmlFor="inputEducation">Education</CFormLabel>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 0.8, marginRight: '20px' }}>
            {Education.map((elem) => {
              return (
                <CFormInput
                  type="text"
                  id="inputleducation"
                  key={elem.id}
                  value={educ}
                  onInput={(e) => seteduc(e.target.value)}
                />
              )
            })}
          </div>
          <div style={{ flex: 0.2 }} onClick={addEducationhandler}>
            <CButton shape="rounded-pill">
              <CIcon icon={cilPlus}></CIcon>
            </CButton>
          </div>
        </div>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="inputCertificates">Certificates</CFormLabel>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 0.8, marginRight: '20px' }}>
            {Certificates.map((elem) => {
              return (
                <>
                  <CFormLabel>Title</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput />
                  </CCol>
                  <CFormLabel>Date</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="date" />
                  </CCol>
                  <CFormLabel>Source</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" />
                  </CCol>
                </>
              )
            })}
          </div>
          <div style={{ flex: 0.2 }}>
            <CButton shape="rounded-pill" onClick={addCertifhandler}>
              <CIcon icon={cilPlus}></CIcon>
            </CButton>
          </div>
        </div>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="inputContract">Contract</CFormLabel>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 0.8, marginRight: '20px' }}>
            <CFormLabel>Start Date</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="date" value={startDate} onInput={(e) => addStartDateHandler(e)} required />
            </CCol>
            <CFormLabel>End Date</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="date" value={endDate} onInput={(e) => addEndDateHandler(e)} required />
            </CCol>
            <CFormLabel>Registration Number</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" value={Rnumber} onInput={(e) => addRgNumberHandler(e)} required />
            </CCol>
            <CFormLabel>Number Of Hours</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" value={Nhour} onInput={(e) => addNhourHandler(e)} required />
            </CCol>
            <CFormLabel>Type</CFormLabel>
            <CCol sm={10}>
            <Select defaultValue={type} onChange={setType} options={typeList} required />
             
            </CCol>
          </div>
        </div>
      </CCol>
    </CForm>
  )
}
