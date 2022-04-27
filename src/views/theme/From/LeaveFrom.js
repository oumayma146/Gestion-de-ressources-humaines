/* eslint-disable */
import { CButton, CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getName } from 'src/store/action/role';


export default function LeaveFrom({setStartDate,setEndDate,setNbDays,setType,setName,name,startdate,enddate,nbday,type}) {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getName());

  }, [])
  const addStartDateHandler =(e)=>{
    setStartDate(e.target.value)
  }
  const addEndDateHandler =(e)=>{
    setEndDate(e.target.value)
  }
  const addNbDaysHandler =(e)=>{
    setNbDays(e.target.value)
  }
  const addTypeHandler =(el)=>{
    setType(el);
  }
  const addNameHandler =(e)=>{
    setName(e)
    console.log(e);
  }


  const typeList = [

    { label: 'sick leave', value: 'sick leave' },
    { label: 'maternity leave', value: 'maternity leave' },
    { label: 'paternity leave', value: 'paternity leave' },
    { label: 'Unpaid leave', value: 'Unpaid leave' } ]

  const Name = useSelector(state => state.role.nameList);
  const formattedEmployee = Name.map(elem=>{
    return({value:elem.id,label:elem.name})
  })

  return (
    <CForm className="row g-3">
    <CCol md={6}>
      <CFormLabel htmlFor="inputName">Employee Name</CFormLabel>
      <CFormSelect  onChange={ (value)=>addNameHandler(value.target.value)}  options={formattedEmployee}>
      </CFormSelect>
    </CCol>
    <CCol md={6}>
      <CFormLabel >Start Date</CFormLabel>
      <CFormInput type="date" value={startdate} onInput={e => addStartDateHandler(e)} />
    </CCol>
    <CCol xs={6}>
      <CFormLabel >End Date</CFormLabel>
      <CFormInput value={enddate} onInput={e => addEndDateHandler(e)} type="date" />
    </CCol>
    <CCol xs={6}>
      <CFormLabel>Number Of Days </CFormLabel>
      <CFormInput value={nbday} onInput={e => addNbDaysHandler(e)} type='text'/>
    </CCol>
    <CCol md={3}>
      <CFormLabel >Type</CFormLabel>
      <CFormSelect   onChange={  (value)=>addTypeHandler(value.target.value)  }  options={typeList} />
       

    </CCol>

  </CForm>
  )
}
