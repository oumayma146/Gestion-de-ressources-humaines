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
import LeaveFrom from '../From/LeaveFrom'
import { AddLeave, DeleteLeave, getLeave, SearchLeave, UpdateLeave } from 'src/store/action/leave'
import { useDispatch, useSelector } from 'react-redux'
import DeleteModal from '../DeleteModal'

const Leave = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLeave())
  }, [])
  const deleteLeaveHandler = (id) => {
    dispatch(DeleteLeave(id))
    setDelete(false)
  }
  const LeaveList = useSelector((state) => state.leave.NewLeaveList)
  //add state
  const [visible, setVisible] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [startdate, setStartDate] = useState('')
  const [enddate, setEndDate] = useState('')
  const [nbday, setNbDays] = useState('')
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  //update state

  const [updatevisible, setUpdateVisible] = useState(false)
  const [updatestartdate, setUpdateStartDate] = useState('')
  const [updateenddate, setUpdateEndDate] = useState('')
  const [updatenbday, setUpdateNbDays] = useState('')
  const [updatetype, setUpdateType] = useState('')
  const [updatename, setUpdateName] = useState('')
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()

 
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }
  const updateLeaveHandler = (id) => {
    dispatch(
      UpdateLeave(updatestartdate, updateenddate, updatenbday, updatetype, updatename, id),
    ).then(() => {
      dispatch(getLeave())
      setUpdateVisible(false)
    })
  }
  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newsleave = LeaveList.filter((el) => {
      return id == el.id
    })
 
    setUpdateName({ value: newsleave[0]?.user?.id, label: newsleave[0]?.user?.name })
    setUpdateStartDate(newsleave[0].debut)
    setUpdateEndDate(newsleave[0].fin)
    setUpdateNbDays(newsleave[0].nbJour)
    setUpdateType({ label: newsleave[0]?.typeCongee, value: newsleave[0]?.typeCongee })
  }
  const addleaveHandler = () => {
    dispatch(AddLeave(startdate, enddate, nbday, type, name)).then(() => {
      dispatch(getLeave())
      setVisible(false)
      setName('')
      setStartDate('')
      setEndDate('')
      setNbDays('')
      setType('')
    })
  }
const SearchLeaveHandler = (name) => {

 dispatch(SearchLeave(name))
}
  const GeneratePDFLeaveHandler = (id) => {
    //let base_url = process.env.REACT_APP_PORT
    let base_url ="http://127.0.0.1:8000"
    let url = base_url + `/congee/generate-pdf/${id}`
      window.open(url);
  }
  return (
    <>
      <CRow>
        <Modal
          title={'Update Leave'}
          visible={updatevisible}
          setVisible={setUpdateVisible}
          addHandler={() => updateLeaveHandler(idOfElementToBeUpdate)}
        >
          <LeaveFrom
            setEndDate={setUpdateEndDate}
            setName={setUpdateName}
            setNbDays={setUpdateNbDays}
            setStartDate={setUpdateStartDate}
            setType={setUpdateType}
            name={updatename}
            startdate={updatestartdate}
            enddate={updateenddate}
            type={updatetype}
            nbday={updatenbday}
          />
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteLeaveHandler(idOfElementToBeDeleted)}
        />
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
                <CButton color="primary" size="sm" onClick={(e) =>SearchLeaveHandler(name)}>
                  Search  
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
                <Modal
                  title={'Add new Leave'}
                  visible={visible}
                  setVisible={setVisible}
                  addHandler={() => addleaveHandler()}
                >
                  <LeaveFrom
                    setEndDate={setEndDate}
                    setName={setName}
                    setNbDays={setNbDays}
                    setStartDate={setStartDate}
                    setType={setType}
                    name={name}
                    startdate={startdate}
                    enddate={enddate}
                    type={type}
                    nbday={nbday}
                  />
                </Modal>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>Employee Name</CTableHeaderCell>
            <CTableHeaderCell>Start Date</CTableHeaderCell>
            <CTableHeaderCell>End Date</CTableHeaderCell>
            <CTableHeaderCell>Number Of Days</CTableHeaderCell>
            <CTableHeaderCell>Type</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {LeaveList.map((elem) => {
            return (
              <CTableRow key={Math.random().toString()}>
                <CTableDataCell>
                  {elem.user.name} 
                  {elem.user.prenom}
                </CTableDataCell>
                <CTableDataCell>{elem.debut}</CTableDataCell>
                <CTableDataCell>{elem.fin}</CTableDataCell>
                <CTableDataCell className="text-center">{elem.nbJour}</CTableDataCell>
                <CTableDataCell>{elem.typeCongee}</CTableDataCell>

                <CTableDataCell>
                  <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)}>
                    <CIcon size="xl" icon={cilColorBorder} />
                  </CButton>
                  <CButton color="link" onClick={() => onPressDeleteHandler(elem.id)} role="button">
                    <CIcon size="xl" icon={cilTrash} />
                  </CButton>
                  <CButton color="link" onClick={() => GeneratePDFLeaveHandler(elem.id)}>
                    <CIcon size="xl" icon={cilDescription} />
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

export default Leave
