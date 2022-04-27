/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
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
import { cilColorBorder, cilMagnifyingGlass, cilPlus, cilShortText, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import Tabs from './Tabs'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteEmployee, getEmployee, getEmployeeInfo } from 'src/store/action/Employee'
import DeleteModal from '../DeleteModal'
import ModalEmployee from '../ModalEmployee'
const Employee = () => {
  const EmployeeList = useSelector((state) => state.emp.employeeList)
  const [skill, setSkill] = useState([])
  const [Gender, setGender] = useState()
  const [Education, setEducation] = useState([])
  const [languge, setLanguge] = useState([])
  const [Delete, setDelete] = useState(false)
  const [visible, setVisible] = useState(false)
  const [employee, setEmplyee] = useState(false)
  const [Certificates, setCertificates] = useState([])
  const [state, setState] = useState()
  const [name, setName] = useState()
  const [Lastname, setLastname] = useState()
  const [email, setEmail] = useState()
  const [adress, setAdress] = useState()
  const [post, setPost] = useState()
  const [cinNum, setCinNum] = useState()
  const [BAnum, setBAnum] = useState()
  const [Tnumber, setTnumber] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [Nhour, setNhour] = useState()
  const [Rnumber, setRnumber] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployee())
  }, [])
  const deleteTrainingHandler = (id) => {
    dispatch(DeleteEmployee(id))
  }
  const openModalEmployee = (id) => {
    dispatch(getEmployeeInfo(id))
    setEmplyee(!employee)
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
                <CButton color="primary" size="sm">
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
                <Modal title={''} visible={visible} setVisible={setVisible}>
                  <Tabs
                    Gender={Gender}
                    setGender={setGender}
                    BAnum={BAnum}
                    setBAnum={setBAnum}
                    Education={Education}
                    setEducation={setEducation}
                    name={name}
                    setName={setName}
                    Lastname={Lastname}
                    setLastname={setLastname}
                    post={post}
                    setPost={setPost}
                    adress={adress}
                    setAdress={setAdress}
                    email={email}
                    setEmail={setEmail}
                    cinNum={cinNum}
                    setCinNum={setCinNum}
                    Tnumber={Tnumber}
                    setTnumber={setTnumber}
                    state={state}
                    setState={setState}
                    skill={skill}
                    setSkill={setSkill}
                    languge={languge}
                    setLanguge={setLanguge}
                    Certificates={Certificates}
                    setCertificates={setCertificates}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    Nhour={Nhour}
                    setNhour={setNhour}
                    Rnumber={Rnumber}
                    setRnumber={setRnumber}
                  ></Tabs>
                </Modal>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Lastname</CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>Adresse</CTableHeaderCell>
            <CTableHeaderCell>Gender</CTableHeaderCell>
            <CTableHeaderCell>State</CTableHeaderCell>
            <CTableHeaderCell>Poste</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {EmployeeList.map((elem) => {
            return (
              <>
                <CTableRow key={elem.id}>
                  <CTableDataCell className="text-center">{elem.name}</CTableDataCell>
                  <CTableDataCell>{elem.prenom}</CTableDataCell>
                  <CTableDataCell className="text-center">{elem.email}</CTableDataCell>
                  <CTableDataCell>{elem.adresse}</CTableDataCell>
                  <CTableDataCell className="text-center">{elem.genre}</CTableDataCell>
                  <CTableDataCell>{elem.statu}</CTableDataCell>
                  <CTableDataCell>
                    {elem.posts.map((el) => {
                      return (
                        <div>
                          {el.title} |{el.description}
                        </div>
                      )
                    })}
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="link" href="/" role="button">
                      <CIcon size="xl" icon={cilColorBorder} />
                    </CButton>
                    <CButton color="link" onClick={() => setDelete(!Delete)} role="button">
                      <DeleteModal
                        Delete={Delete}
                        setDelete={setDelete}
                        deleteHandler={() => deleteTrainingHandler(elem.id)}
                      />

                      <CIcon size="xl" icon={cilTrash} />
                    </CButton>
                    <CButton color="link" role="button" onClick={() => openModalEmployee(elem.id)}>
                      <CIcon size="xl" icon={cilShortText} />
                      <ModalEmployee employee={employee} setEmplyee={setEmplyee} id={elem.id} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Employee
