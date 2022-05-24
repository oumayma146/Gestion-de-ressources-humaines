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
import { DeleteEmployee, getEmployee, getEmployeeInfo, SearchEmployee } from 'src/store/action/Employee'
import DeleteModal from '../DeleteModal'
import ModalEmployee from '../ModalEmployee'
const Employee = () => {
  const [updatevisible, setUpdateVisible] = useState(false)
  const EmployeeList = useSelector((state) => state.emp.NewemployeeList)
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
  const [password, setPassword] = useState()
  const [role, setRole] = useState()
  const [type, setType] = useState()
  //update state

  const [updateSkill, setUpdateSkill] = useState([])
  const [updateGender, setUpdateGender] = useState()
  const [updateEducation, setUpdateEducation] = useState([])
  const [updatelanguge, setUpdateLanguge] = useState([])
  const [updateCertificates, setUpdateCertificates] = useState([])
  const [updateState, setUpdateState] = useState()
  const [updateName, setUpdateName] = useState()
  const [updateLastname, setUpdateLastname] = useState()
  const [updateEmail, setUpdateEmail] = useState()
  const [updateAdress, setUpdateAdress] = useState()
  const [updatePost, setUpdatePost] = useState()
  const [updateCinNum, setUpdateCinNum] = useState()
  const [updateBAnum, setUpdateBAnum] = useState()
  const [updateTnumber, setUpdateTnumber] = useState()
  const [updateStartDate, setUpdateStartDate] = useState()
  const [updateEndDate, setUpdateEndDate] = useState()
  const [updateNhour, setUpdateNhour] = useState()
  const [updateRnumber, setUpdateRnumber] = useState()
  const [updatePassword, setUpdatePassword] = useState()
  const [updateRole, setUpdateRole] = useState()
  const [updateType, setUpdateType] = useState()
  //id
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }
  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newEmploye = EmployeeList.filter((el) => {
      return id == el.id
    })
    console.log('new', newEmploye[0].statu)
    setUpdateSkill()
    setUpdateGender(newEmploye[0].genre)
    setUpdateEducation([])
    setUpdateLanguge([])
    setUpdateCertificates([])
    setUpdateState(newEmploye[0].statu)
    setUpdateName(newEmploye[0].name)
    setUpdateLastname(newEmploye[0].prenom)
    setUpdateEmail(newEmploye[0].email)
    setUpdateAdress(newEmploye[0].adresse)
   /*  setUpdatePost({label:newEmploye[0]?.posts.id,value:newEmploye[0]?.posts.title})
    setUpdateCinNum(newEmploye[0]?.user_info[0]?.numeroCIN)
    setUpdateBAnum(newEmploye[0]?.user_info[0]?.numeroCarteBancaire)
    setUpdateTnumber(newEmploye[0]?.user_info[0]?.numeroTelephone) */
  /*   setUpdateStartDate(newEmploye[0].contrat[0].debutdate)
    setUpdateEndDate(newEmploye[0].contrat[0].findate)
    setUpdateNhour(newEmploye[0].contrat[0].nbheure)
    setUpdateRnumber(newEmploye[0].contrat[0].matricule) */
    setUpdatePassword(newEmploye[0].password) 
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployee())
  }, [])

  const deleteEmployeeHandler = (id) => {
    dispatch(DeleteEmployee(id))
    setDelete(false)
  }
  const openModalEmployee = (id) => {
    dispatch(getEmployeeInfo(id))
    setEmplyee(!employee)
  }
  const updateEmployeeHandler = () => {
    //console.log(idOfElementToBeUpdate);
  }
  const SearchEmployeeHandler = (name) => {
    
       dispatch(SearchEmployee(name))
  }
  return (
    <>
      <CRow>
        <Modal title={'Add New Employee'} visible={visible} setVisible={setVisible}>
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
            password={password}
            setPassword={setPassword}
            role={role}
            setRole={setRole}
            type={type}
            setType={setType}
          ></Tabs>
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteEmployeeHandler(idOfElementToBeDeleted)}
        />
        <Modal
          title={'UpDate Employee'}
          visible={updatevisible}
          setVisible={setUpdateVisible}
          addHandler={() => updateEmployeeHandler(idOfElementToBeUpdate)}
        >
          <Tabs
            Gender={updateGender}
            setGender={setUpdateGender}
            BAnum={updateBAnum}
            setBAnum={setUpdateBAnum}
            Education={updateEducation}
            setEducation={setUpdateEducation}
            name={updateName}
            setName={setUpdateName}
            Lastname={updateLastname}
            setLastname={setUpdateLastname}
            post={updatePost}
            setPost={setUpdatePost}
            adress={updateAdress}
            setAdress={setUpdateAdress}
            email={updateEmail}
            setEmail={setUpdateEmail}
            cinNum={updateCinNum}
            setCinNum={setUpdateCinNum}
            Tnumber={updateTnumber}
            setTnumber={setUpdateTnumber}
            state={updateState}
            setState={setUpdateState}
            skill={updateSkill}
            setSkill={setUpdateSkill}
            languge={updatelanguge}
            setLanguge={setUpdateLanguge}
            Certificates={updateCertificates}
            setCertificates={setUpdateCertificates}
            startDate={updateStartDate}
            setStartDate={setUpdateStartDate}
            endDate={updateEndDate}
            setEndDate={setUpdateEndDate}
            Nhour={updateNhour}
            setNhour={setUpdateNhour}
            Rnumber={updateRnumber}
            setRnumber={setUpdateRnumber}
            password={updatePassword}
            setPassword={setUpdatePassword}
            role={updateRole}
            setRole={setUpdateRole}
            type={updateType}
            setType={setUpdateType}
          ></Tabs>
        </Modal>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CInputGroup className="input-prepend">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput type="search"
                  placeholder="Search for..."
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                <CButton color="primary" size="sm" onClick={(e) =>SearchEmployeeHandler(name)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
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
                  <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)}>
                    <CIcon size="xl" icon={cilColorBorder} />
                  </CButton>
                  <CButton color="link" onClick={() => onPressDeleteHandler(elem.id)}>
                    <CIcon size="xl" icon={cilTrash} />
                  </CButton>
                  <CButton color="link" role="button" onClick={() => openModalEmployee(elem.id)}>
                    <CIcon size="xl" icon={cilShortText} />
                    <ModalEmployee employee={employee} setEmplyee={setEmplyee} id={elem.id} />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Employee
