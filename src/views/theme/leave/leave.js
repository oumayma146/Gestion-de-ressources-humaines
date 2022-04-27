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
import AdsFrom from '../From/AdsFrom'
import LeaveFrom from '../From/LeaveFrom'
import { AddLeave, DeleteLeave, getLeave } from 'src/store/action/leave'
import { useDispatch, useSelector } from 'react-redux'
import DeleteModal from '../DeleteModal'

const Leave = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLeave())
  }, [])
  const deleteRoleHandler = (id) => {
    dispatch(DeleteLeave(id))
  }
  const LeaveList = useSelector((state) => state.leave.leaveList)
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
              <>
                <CTableRow key={elem.id}>
                  <CTableDataCell>
                    {elem.user.name}
                    {elem.user.prenom}
                  </CTableDataCell>
                  <CTableDataCell>{elem.debut}</CTableDataCell>
                  <CTableDataCell>{elem.fin}</CTableDataCell>
                  <CTableDataCell className="text-center">{elem.nbJour}</CTableDataCell>
                  <CTableDataCell>{elem.typeCongee}</CTableDataCell>

                  <CTableDataCell>
                    <CButton color="link" onClick={() => setUpdateVisible(!updatevisible)}>
                      <CIcon size="xl" icon={cilColorBorder} />
                      <Modal
                        title={'Update Leave'}
                        visible={updatevisible}
                        setVisible={setUpdateVisible} /* addHandler={() =>addleaveHandler()} */
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
                    </CButton>
                    <CButton color="link" onClick={() => setDelete(!Delete)} role="button">
                      <CIcon size="xl" icon={cilTrash} />
                      <DeleteModal
                        Delete={Delete}
                        setDelete={setDelete}
                        deleteHandler={() => deleteRoleHandler(elem.id)}
                      />
                    </CButton>
                    <CButton color="link" href="/" role="button">
                      <CIcon size="xl" icon={cilDescription} />
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

export default Leave
