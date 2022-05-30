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
import { getRole } from 'src/store/action/role'
import Select from 'react-select'
import { AddEmployee } from 'src/store/action/Employee'

export default function EmployeeFrom({
  setRole,
  role,
  password,
  setPassword,
  setGender,
  state,
  setState,
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
  addHandler
}) {
  const onSubmit = (e) => {
    e.preventDefault();
  
  };
  const addEmployeeHandler = () => {
    dispatch(AddEmployee(name,Lastname,email,adress,state,Gender,password,cinNum,BAnum,Tnumber))
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

  const addStateHandler = (el) => {
    setState(el)
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

  const Name = useSelector((state) => state.role.roleList)
  const roleList = Name.map((elem) => {
    return { value: elem.id, label: elem.name }
  })
  const stateList = [
  
    { label: 'single', value: 'single' },
    { label: 'married', value: 'married' },
    { label: 'divorced', value: 'divorced' },
  ]

  return (
    <CForm className="row g-3" onSubmit={onSubmit}>
      <CCol md={6}>
        <CFormLabel htmlFor="inputName">Name</CFormLabel>
        <CFormInput type="input" value={name} onInput={(e) => addNameHandler(e)} />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputLastname">Lastname</CFormLabel>
        <CFormInput type="input" value={Lastname} onInput={(e) => addLastNameHandler(e)} />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputEmail">Email</CFormLabel>
        <CFormInput
          type="email"
          value={email}
          onInput={(e) => addEmailHandler(e)}
          placeholder="email here"
        />
      </CCol>
      <CCol xs={6}>
        <CFormLabel htmlFor="inputEmail">Password</CFormLabel>
        <CFormInput
          type="password"
          value={password}
          onInput={(e) => addPasswordHandler(e)}
          placeholder="password here"
        />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputAddress">Address </CFormLabel>
        <CFormInput
          id="inputAddress"
          placeholder="City,Country,Apartment"
          value={adress}
          onInput={(e) => addAdressHandler(e)}
        />
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="inputState">State</CFormLabel>
        <Select defaultValue={state} onChange={setState} options={stateList} />
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="inputPost">Post</CFormLabel>
        <CFormInput id="inputPost" value={post} onInput={(e) => addPostHandler(e)} />
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
        />
        <CFormCheck
          type="radio"
          value="homme"
          name="flexRadioDefault"
          id="homme"
          label="man"
          onChange={(e) => addGanderHandler(e)}
          defaultChecked
        />
        
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="inputGender">Role</CFormLabel>
        <Select defaultValue={role} onChange={setRole} options={roleList} />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Post Description</CFormLabel>
        <CFormInput  value={description} onInput={(e) => addDescriptionHandler(e)} />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>CIN Number</CFormLabel>
        <CFormInput id="inputCIN" value={cinNum} onInput={(e) => addCinNumHandler(e)} />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Bank Account Number</CFormLabel>
        <CFormInput  value={BAnum} onInput={(e) => addBAnumHandler(e)} />
      </CCol>
      <CCol xs={3}>
        <CFormLabel>Telephone Number</CFormLabel>
        <CFormInput  value={Tnumber} onInput={(e) => addTnumberHandler(e)} />
      </CCol>
      <CCol xs={12}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton color="primary" type="submit" onClick={addEmployeeHandler} className="me-md-2">
            Save
          </CButton>
        </div>
      </CCol>
    </CForm>
  )
}
