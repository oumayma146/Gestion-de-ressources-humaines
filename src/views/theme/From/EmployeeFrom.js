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

import { MultiSelect } from 'react-multi-select-component'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRole } from 'src/store/action/role'
import Select from 'react-select'
import { AddEmployee } from 'src/store/action/Employee'
import { getLanguge, getSkill } from 'src/store/action/configuration'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

export default function EmployeeFrom({
  setRole,
  role,
  password,
  setPassword,
  setGender,
  status,
  setStatus,
  name,
  setName,
  Lastname,
  setLastname,
  email,
  setEmail,
  adress,
  setAdress,
  post,
  setPost,
  cinNum,
  setCinNum,
  BAnum,
  setBAnum,
  Tnumber,
  setTnumber,
  Gender,
  description,
  setDescription, 
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
  setType,
  addHandler,
}) {
  const [educ, seteduc] = useState('')

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
  const onSubmit = (e) => {
    e.preventDefault()
  }
 
  
  const addDescriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const addPasswordHandler = (e) => {
    setPassword(e.target.value)
  }
  const addTnumberHandler = (e) => {
    setTnumber(e.target.value)
  }
  const addCinNumHandler = (e) => {
    setCinNum(e.target.value)
  }
  const addBAnumHandler = (e) => {
    setBAnum(e.target.value)
  }
  const addPostHandler = (e) => {
    setPost(e.target.value)
  }

  const addStatusHandler = (el) => {
    setStatus(el)
  }
  const addRoleHandler = (elm) => {
    setRole(elm)
  }
  const addAdressHandler = (e) => {
    setAdress(e.target.value)
  }
  const addEmailHandler = (e) => {
    setEmail(e.target.value)
  }
  const addLastNameHandler = (e) => {
    setLastname(e.target.value)
  }
  const addNameHandler = (e) => {
    setName(e.target.value)
  }
  const addGanderHandler = (e) => {
    setGender(e.target.value)
   
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRole())
  }, [])
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
  const Name = useSelector((state) => state.role.roleList)
  const roleList = Name.map((elem) => {
    return { value: elem.id, label: elem.name }
  })
  const statusList = [
    { label: 'single', value: 'single' },
    { label: 'married', value: 'married' },
    { label: 'divorced', value: 'divorced' },
  ]

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Name</CFormLabel>
        <CFormInput type="input" value={name} onInput={(e) => addNameHandler(e)} required />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputLastname">Lastname</CFormLabel>
        <CFormInput type="input" value={Lastname} onInput={(e) => addLastNameHandler(e)} required />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputEmail">Email</CFormLabel>
        <CFormInput
          type="email"
          value={email}
          onInput={(e) => addEmailHandler(e)}
          placeholder="email here"
          required
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputEmail">Password</CFormLabel>
        <CFormInput
          type="password"
          value={password}
          onInput={(e) => addPasswordHandler(e)}
          placeholder="min 6 carectere"
        />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputAddress">Address </CFormLabel>
        <CFormInput
          id="inputAddress"
          placeholder="City,Country,Apartment"
          value={adress}
          onInput={(e) => addAdressHandler(e)}
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="inputState">status</CFormLabel>
        <Select defaultValue={status} onChange={setStatus} options={statusList} required/>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="inputPost">Post</CFormLabel>
        <CFormInput id="inputPost" value={post} onInput={(e) => addPostHandler(e)} required/>
      </CCol>
      <CCol md={2}>
        <CFormLabel htmlFor="inputGender">Gender</CFormLabel>
        <CFormCheck
          type="radio"
          value="femme"
          name="flexRadioDefault"
          id="femme"
          label="women"
          onChange={(e) => addGanderHandler(e)}
          required
        />
        <CFormCheck
          type="radio"
          value="homme"
          name="flexRadioDefault"
          id="homme"
          label="man"
          onChange={(e) => addGanderHandler(e)}
          defaultChecked
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="inputGender">Role</CFormLabel>
        <Select defaultValue={role} onChange={setRole} options={roleList} required />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Post Description</CFormLabel>
        <CFormInput value={description} onInput={(e) => addDescriptionHandler(e)} required />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>CIN Number</CFormLabel>
        <CFormInput id="inputCIN" value={cinNum} onInput={(e) => addCinNumHandler(e)} required />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Bank Account Number</CFormLabel>
        <CFormInput value={BAnum} onInput={(e) => addBAnumHandler(e)} required />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Telephone Number</CFormLabel>
        <CFormInput value={Tnumber} onInput={(e) => addTnumberHandler(e)} required />
      </CCol>
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
            {Certificates.map((el) => {
              return (
                <>
                  <CFormLabel>Title</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput  required/>
                  </CCol>
                  <CFormLabel>Date</CFormLabel>
                  <CCol sm={10} >
                    <CFormInput type="date" />
                  </CCol>
                  <CFormLabel>Source</CFormLabel>
                  <CCol sm={10} required>
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
            <CFormLabel>Type of Contract</CFormLabel>
            <CCol sm={10}>
              <Select defaultValue={type} onChange={setType} options={typeList} required/>
            </CCol>
          </div>
        </div>
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
