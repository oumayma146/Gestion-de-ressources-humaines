/* eslint-disable */
import { CButton, CCol, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function ModalInstructor({instructor,setInstructor,id }) {
  const [instructorData, setInstructorData] = useState([]);
  const Instructor= useSelector(state => state.training.InstructorInfo);
  useEffect(() => {
    setInstructorData(Instructor)
  
  },)
 
    

  
  return (
    <CModal visible={instructor} onClose={() => setInstructor(false)} size="xl">
    <CModalHeader onClose={() => setInstructor(false)}>
      <CModalTitle>Instructor Info</CModalTitle>
    </CModalHeader>
    <CModalBody>
 
    <CTable small>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Id</CTableHeaderCell>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Speciality</CTableHeaderCell>
      <CTableHeaderCell scope="col">Phone number</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {instructorData?
    <>
  {instructorData.map(elem=>{ 
        
        return(
            < >
    <CTableRow>
      <CTableHeaderCell scope="row">{elem.id}</CTableHeaderCell>
      <CTableDataCell>{elem.nom}</CTableDataCell>
      <CTableDataCell>{elem.specialité}</CTableDataCell>
      <CTableDataCell>{elem.numero}</CTableDataCell>
    </CTableRow>
    </>
                   )
                 })}
                 </>
                 :null}
   </CTableBody>
    </CTable>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" onClick={() => setInstructor(false)}>
        Close
      </CButton>
    
    </CModalFooter>
  </CModal>

  )
}
