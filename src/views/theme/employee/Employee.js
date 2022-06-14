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

import { useDispatch, useSelector } from 'react-redux'
import {
  AddEmployee,
  DeleteEmployee,
  getEmployee,
  getEmployeeInfo,
  SearchEmployee,
  UpdateEmployee,
} from 'src/store/action/Employee'
import DeleteModal from '../DeleteModal'
import ModalEmployee from '../ModalEmployee'
import EmployeeFrom from '../From/EmployeeFrom'

const Employee = () => {
  const [Education, setEducation] = useState([{ id: Math.random(), diplome: '' }])
  const [updatevisible, setUpdateVisible] = useState(false)
  const EmployeeList = useSelector((state) => state.emp.NewemployeeList)
  const [skill, setSkill] = useState([])
  const [Gender, setGender] = useState('homme')
  const [languge, setLanguge] = useState([])
  const [Delete, setDelete] = useState(false)
  const [visible, setVisible] = useState(false)
  const [employee, setEmplyee] = useState(false)
  const [Certificates, setCertificates] = useState([
    { id: Math.random(), titre: '', date: '', source: '' },
  ])
  const [status, setStatus] = useState()
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
  const [description, setDescription] = useState()
  const [role, setRole] = useState([])
  const [type, setType] = useState()

  //update state

  const [updateSkill, setUpdateSkill] = useState([])
  const [updateGender, setUpdateGender] = useState()
  const [updateEducation, setUpdateEducation] = useState([{ id: Math.random(), diplome: '' }])
  const [updatelanguge, setUpdateLanguge] = useState([])
  const [updateCertificates, setUpdateCertificates] = useState([
    { id: Math.random(), titre: '', date: '', source: '' },
  ])
  const [updateStatus, setUpdateStatus] = useState()
  const [updateName, setUpdateName] = useState()
  const [updateLastname, setUpdateLastname] = useState()
  const [updateEmail, setUpdateEmail] = useState()
  const [updateAdress, setUpdateAdress] = useState()
  const [updatePost, setUpdatePost] = useState([])
  const [updateCinNum, setUpdateCinNum] = useState()
  const [updateBAnum, setUpdateBAnum] = useState()
  const [updateTnumber, setUpdateTnumber] = useState()
  const [updateStartDate, setUpdateStartDate] = useState()
  const [updateEndDate, setUpdateEndDate] = useState()
  const [updateNhour, setUpdateNhour] = useState()
  const [updateRnumber, setUpdateRnumber] = useState()
  const [updatePassword, setUpdatePassword] = useState()
  const [updateDescription, setUpdateDescription] = useState()
  const [updateRole, setUpdateRole] = useState([])
  const [updateType, setUpdateType] = useState()
  const [updateEmploye, setUpdateEmploye] = useState()

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
    console.log(newEmploye)

    setUpdateEmploye(newEmploye[0])
    setUpdateGender(newEmploye[0].genre)
    setUpdateCertificates([])
    setUpdateStatus(newEmploye[0].statu)
    setUpdateName(newEmploye[0].name)
    setUpdateLastname(newEmploye[0].prenom)
    setUpdateEmail(newEmploye[0].email)
    setUpdateAdress(newEmploye[0].adresse)
    setUpdatePost(newEmploye[0]?.posts[0]?.title)
    setUpdateDescription(newEmploye[0]?.posts[0]?.description)
    setUpdateCinNum(newEmploye[0]?.user_info?.numeroCIN)
    setUpdateBAnum(newEmploye[0]?.user_info?.numeroCarteBancaire)
    setUpdateTnumber(newEmploye[0]?.user_info?.numeroTelephone)
    setUpdateStartDate(newEmploye[0]?.contrat?.debutdate)
    setUpdateEndDate(newEmploye[0]?.contrat?.findate)
    setUpdateRnumber(newEmploye[0]?.contrat?.matricule)
    setUpdateNhour(newEmploye[0]?.contrat?.nbheure)
    setUpdateType({
      label: newEmploye[0]?.contrat?.typeContart,
      value: newEmploye[0]?.contrat?.typeContart,
    })
    setUpdateStatus({ label: newEmploye[0]?.statu, value: newEmploye[0]?.statu })
    setUpdateRole({ label: newEmploye[0]?.roles[0]?.name, value: newEmploye[0]?.roles[0]?.id })
    const ins = newEmploye[0]?.competance.map((elem) => {
      return { value: elem.id, label: elem.nomCompetence }
    })
    setUpdateSkill(ins)
    const lan = newEmploye[0]?.langues.map((elem) => {
      return { value: elem.id, label: elem.nom }
    })
    setUpdateLanguge(lan)
    const educ = newEmploye[0]?.education?.map((elem) => {
      return { id:elem.id ,diplome: elem.diplome }
    })
    setUpdateEducation(educ)

    const cert = newEmploye[0]?.cartification?.map((elem) => {
      return { id:elem.id ,titre: elem.titre, date: elem.date, source: elem.source }
    })
    setUpdateCertificates(cert)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployee())
  }, [])

  const deleteEmployeeHandler = (id) => {
    dispatch(DeleteEmployee(id))
    setDelete(false)
    dispatch(getEmployee())
  }
  const openModalEmployee = (id) => {
    dispatch(getEmployeeInfo(id))
    setEmplyee(!employee)
  }

  const updateEmployeeHandler = (id) => {
    const UplistOflanguge = updatelanguge.map((elem) => {
      return elem.value
    })
    const UplistOfSkill = updateSkill.map((elem) => {
      return elem.value
    })
    console.log('comp', updateEmploye)
    dispatch(
      UpdateEmployee(
        updateName,
        updateLastname,
        updateEmail,
        updateAdress,
        updateStatus,
        updateGender,
        updatePost,
        updateDescription,
        updateCinNum,
        updateBAnum,
        updateTnumber,
        updateStartDate,
        updateEndDate,
        updateRnumber,
        updateNhour,
        updateType,
        UplistOfSkill,
        UplistOflanguge,
        updateRole,
        updateEducation,
        updateCertificates,
        id,
        updateEmploye,
      ),
    ).then(() => {
      dispatch(getEmployee())
      setUpdateVisible(false)
    })
  }
  const SearchEmployeeHandler = (name) => {
    dispatch(SearchEmployee(name))
  }
  const addEmployeeHandler = () => {
    const Languages = languge.map((elem) => {
      return elem.value
    })
    const Skills = skill.map((elem) => {
      return elem.value
    })
    dispatch(
      AddEmployee(
        name,
        Lastname,
        email,
        adress,
        status,
        Gender,
        password,
        post,
        description,
        cinNum,
        BAnum,
        Tnumber,
        startDate,
        endDate,
        Rnumber,
        Nhour,
        type,
        Skills,
        Languages,
        role,
        Education,
        Certificates,
      ),
      setVisible(false),
      dispatch(getEmployee()),
      setGender(''),
      setBAnum(''),
      setEducation([{ id: Math.random(), diplome: '' }]),
      setName(''),
      setLastname(''),
      setPost([]),
      setAdress(''),
      setEmail(''),
      setCinNum(''),
      setTnumber(''),
      setStatus(''),
      setSkill([]),
      setLanguge([]),
      setCertificates([{ id: Math.random(), titre: '', date: '', source: '' }]),
      setStartDate(''),
      setEndDate(''),
      setNhour(''),
      setRnumber(''),
      setPassword(''),
      setRole([]),
      setType(''),
      setDescription(''),
    )
  }
  return (
    <>
      <CRow>
        <Modal title={'Add New Employee'} visible={visible} setVisible={setVisible}>
          <EmployeeFrom
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
            status={status}
            setStatus={setStatus}
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
            description={description}
            setDescription={setDescription}
            addHandler={() => addEmployeeHandler()}
          ></EmployeeFrom>
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteEmployeeHandler(idOfElementToBeDeleted)}
        />
        <Modal title={'UpDate Employee'} visible={updatevisible} setVisible={setUpdateVisible}>
          <EmployeeFrom
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
            status={updateStatus}
            setStatus={setUpdateStatus}
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
            description={updateDescription}
            setDescription={setUpdateDescription}
            addHandler={() => updateEmployeeHandler(idOfElementToBeUpdate)}
          ></EmployeeFrom>
        </Modal>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CInputGroup className="input-prepend">
                <CInputGroupText>
                  <CIcon icon={cilMagnifyingGlass} />
                </CInputGroupText>
                <CFormInput
                  type="search"
                  placeholder="Search for..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CButton color="primary" size="sm" onClick={(e) => SearchEmployeeHandler(name)}>
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
            <CTableHeaderCell>status</CTableHeaderCell>
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
