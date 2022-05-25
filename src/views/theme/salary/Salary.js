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
import { AddSalary, DeleteSalary, getSalary, SearchSalary, UpdateSalary } from 'src/store/action/salary'
import DeleteModal from '../DeleteModal'

const Salary = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSalary())
  }, [])
  const deleteSalaryHandler = (id) => {
    dispatch(DeleteSalary(id))
    setDelete(false)
  }
  const SalaryList = useSelector((state) => state.salary.NewSalaryList)
  const [Delete, setDelete] = useState(false)
  //add state
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [startdate, setStartDate] = useState('')
  const [chargepaternes, setChargePaternes] = useState('')
  const [grosssalary, setGrossSalary] = useState('')
  //update state
  const [updatevisible, setUpdateVisible] = useState(false)
  const [updatename, setUpdateName] = useState()
  const [updatestartdate, setUpdateStartDate] = useState()
  const [updatechargepaternes, setUpdateChargePaternes] = useState()
  const [updategrosssalary, setUpdateGrossSalary] = useState()
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()

  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newsalary=SalaryList.filter((el)=>{return id==el.id;});
    setUpdateName({ value: newsalary[0]?.user?.id, label: newsalary[0]?.user?.name})
    setUpdateStartDate(newsalary[0].Datedebut )
    setUpdateChargePaternes(newsalary[0].ChargePaterneles)
    setUpdateGrossSalary(newsalary[0].SalaireBrut)
  }
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
    dispatch(getSalary())
  }
  const addSalaryHandler = () => {console.log(name);
    dispatch(AddSalary(startdate, chargepaternes, grosssalary, name.value)).then(() => {
      dispatch(getSalary())
      setVisible(false)
      setName('')
      setStartDate('')
      setChargePaternes('')
      setGrossSalary('')
    })
  }
  const SearchSalaryHandler = (name) => {

   dispatch(SearchSalary(name))
  }

  const updateSalaryHandler=(id)=>{
    dispatch(UpdateSalary(updatestartdate, updatechargepaternes, updategrosssalary, updatename.value,id)).then(() => {
      dispatch(getSalary())
      setUpdateVisible(false)
    })
  }
  return (
    <>
      <CRow>
        <Modal
          title={'UpDate Salary'}
          visible={updatevisible}
          setVisible={setUpdateVisible} 
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
            addHandler={() =>updateSalaryHandler(idOfElementToBeUpdate)} 
          />
        </Modal>
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteSalaryHandler(idOfElementToBeDeleted)}
        />
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
                <CButton color="primary" size="sm" onClick={(e) =>SearchSalaryHandler(name)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
                <Modal
                  title={'Add new Salary'}
                  visible={visible}
                  setVisible={setVisible}
                  
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
                    addHandler={() => addSalaryHandler()}
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
            <CTableHeaderCell>Bonuses</CTableHeaderCell>
            <CTableHeaderCell>Gross Salary</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {SalaryList.map((elem) => {
            return (
              <CTableRow key={elem.id}>
                <CTableDataCell>
                  {elem.user.name} {elem.user.prenom}
                </CTableDataCell>
                <CTableDataCell>{elem.Datedebut}</CTableDataCell>
                <CTableDataCell>{elem.ChargePaterneles}</CTableDataCell>
                <CTableDataCell>{elem.SalaireBrut}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)} >
                    <CIcon size="xl" icon={cilColorBorder} />
                  </CButton>
                  <CButton color="link" onClick={() => onPressDeleteHandler(elem.id)} role="button">
                    <CIcon size="xl" icon={cilTrash} />
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

export default Salary
