/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import Modale from '../From/RoleFrom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilColorBorder,
  cilDescription,
  cilFile,
  cilMagnifyingGlass,
  cilPlus,
  cilTrash,
} from '@coreui/icons'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { AddInstructor, DeleteInstructor, getInstructor } from 'src/store/action/instructor'
import DeleteModal from '../DeleteModal'
import InstructorFrom from '../From/InstructorFrom'


const Instructor = () => {
    const [visible, setVisible] = useState(false)
    const [Delete, setDelete] = useState(false)
    const [name, setName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [phonenumber, setPhonneNumber] = useState(''); 
//update state
const [updatevisible, setUpdateVisible] = useState(false)
const [updatename, setUpdateName] = useState('');
const [updatespeciality, setUpdateSpeciality] = useState('');
const [updatephonenumber, setUpdatePhonneNumber] = useState(''); 

    const Instructor= useSelector(state => state.instructor.instructorList);
    const dispatch =useDispatch();
    useEffect(() => {
      dispatch( getInstructor ());
    },[])
    const deleteInstructorHandler = (id) => {
      dispatch(DeleteInstructor(id));
     }
     const addInstructorHandler = () => {
      dispatch(AddInstructor(speciality,phonenumber,name)).then(()=>{
        dispatch(getInstructor());
        setVisible(false);
        setName('');
        setPhonneNumber('');
        setSpeciality('');
        
      })
     }
  return (
    
    <>
     <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
       
          <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput type="text" placeholder="What are you looking for?" />
              <CButton color="primary" size='sm'>Search</CButton>
           <div style={{"width":"400px"}} > </div>  
       
             <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
             <Modal  title={"Add new Instructor"} visible={visible} setVisible={setVisible} addHandler={() =>addInstructorHandler()}>
              <InstructorFrom name={name} setName={setName} phonenumber={phonenumber} setPhonneNumber={setPhonneNumber}
              speciality={speciality} setSpeciality={setSpeciality} />
              </Modal>
            </CInputGroup>
          </CCardHeader>
        </CCard>
      </CCol>
     </CRow>
     <CTable align="middle" className="mb-0 border" hover responsive>
  <CTableHead color="light">
    <CTableRow>
      <CTableHeaderCell scope="col">Id</CTableHeaderCell>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Speciality</CTableHeaderCell>
      <CTableHeaderCell scope="col">Phone number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Options</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {Instructor?
    <>
  {Instructor.map(elem=>{ 
        
        return(
            < >
    <CTableRow key={elem.id}>
      <CTableHeaderCell scope="row">{elem.id}</CTableHeaderCell>
      <CTableDataCell>{elem.nom}</CTableDataCell>
      <CTableDataCell>{elem.specialité}</CTableDataCell>
      <CTableDataCell>{elem.numero}</CTableDataCell>
      <CTableDataCell>
        <CButton color="link" onClick={() => setUpdateVisible(!updatevisible)} >
        <CIcon size="xl" icon={cilColorBorder}  />
        <Modal  title={"UpdateInstructor"} visible={updatevisible} setVisible={setUpdateVisible} /* addHandler={() =>addInstructorHandler()} */>
        <InstructorFrom name={updatename} setName={setUpdateName} phonenumber={updatephonenumber} setPhonneNumber={setUpdatePhonneNumber}
        speciality={updatespeciality} setSpeciality={setUpdateSpeciality} />
        </Modal>
        </CButton>
        <CButton color="link"   onClick={() => setDelete(!Delete)} role="button" >
        <CIcon size="xl" icon={cilTrash} />
        <DeleteModal Delete={Delete} setDelete={setDelete} deleteHandler={() =>deleteInstructorHandler(elem.id)} /> 
        </CButton>            
         </CTableDataCell>
    </CTableRow>
    </>
                   )
                 })}
                 </>
                 :null}
   </CTableBody>
    </CTable>
            
    </>
  )
}

export default Instructor






