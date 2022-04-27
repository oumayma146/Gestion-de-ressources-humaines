/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import Modale from '../From/RoleFrom'
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
import { cilColorBorder, cilMagnifyingGlass, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import SalaryFrom from '../From/SalaryFrom'
import { useDispatch, useSelector } from 'react-redux'
import { AddSalary, DeleteSalary, getSalary } from 'src/store/action/salary'
import DeleteModal from '../DeleteModal'

const Salary = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSalary())
  }, [])
  const deleteRoleHandler = (id) => {
    dispatch(DeleteSalary(id))
  }
  const SalaryList = useSelector((state) => state.salary.salaryList)
  const [Delete, setDelete] = useState(false)
  //add state
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [startdate, setStartDate] = useState('')
  const [chargepaternes, setChargePaternes] = useState('')
  const [grosssalary, setGrossSalary] = useState('')
  //update state
  const [updatevisible, setUpdateVisible] = useState(false)
  const [updatename, setUpdateName] = useState('oumaima')
  const [updatestartdate, setUpdateStartDate] = useState('2022-04-01')
  const [updatechargepaternes, setUpdateChargePaternes] = useState('2000')
  const [updategrosssalary, setUpdateGrossSalary] = useState('2500')

  const addSalaryHandler = () => {
    dispatch(AddSalary(startdate, chargepaternes, grosssalary, name)).then(() => {
      dispatch(getSalary())
      setVisible(false)
      setName('')
      setStartDate('')
      setChargePaternes('')
      setGrossSalary('')
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
                  title={'Add new Salary'}
                  visible={visible}
                  setVisible={setVisible}
                  addHandler={() => addSalaryHandler()}
                >
                  <SalaryFrom
                    setChargePaternes={setChargePaternes}
                    setGrossSalary={setGrossSalary}
                    setName={setName}
                    setStartDate={setStartDate}
                    name={name}
                    chargepaternes={chargepaternes}
                    grosssalary={grosssalary}
                    startdate={startdate}
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
            <CTableHeaderCell>ChargePaternes</CTableHeaderCell>
            <CTableHeaderCell>Gross Salary</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {SalaryList.map((elem) => {
            return (
              <>
                <CTableRow key={elem.id}>
                  <CTableDataCell>
                    {elem.user.name} {elem.user.prenom}
                  </CTableDataCell>
                  <CTableDataCell>{elem.Datedebut}</CTableDataCell>
                  <CTableDataCell>{elem.ChargePaterneles}</CTableDataCell>
                  <CTableDataCell>{elem.SalaireBrut}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="link" onClick={() => setUpdateVisible(!updatevisible)}>
                      <CIcon size="xl" icon={cilColorBorder} />
                      <Modal
                        title={'UpDate Salary'}
                        visible={updatevisible}
                        setVisible={setUpdateVisible} /* addHandler={() =>addSalaryHandler()} */
                      >
                        <SalaryFrom
                          setChargePaternes={setUpdateChargePaternes}
                          setGrossSalary={setUpdateGrossSalary}
                          setName={setUpdateName}
                          setStartDate={setUpdateStartDate}
                          name={updatename}
                          chargepaternes={updatechargepaternes}
                          grosssalary={updategrosssalary}
                          startdate={updatestartdate}
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

export default Salary
