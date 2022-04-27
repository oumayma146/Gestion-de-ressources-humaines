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
import { cilColorBorder, cilMagnifyingGlass, cilPlus, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import AdsFrom from '../From/AdsFrom'
import TrainingFrom from '../From/TrainingFrom'
import TabsTraining from './TabsTraining'
import { useDispatch, useSelector } from 'react-redux'
import {
  AddTraining,
  DeleteTraining,
  getInstructorInfo,
  getTraining,
} from 'src/store/action/training'
import DeleteModal from '../DeleteModal'
import ModalInstructor from '../ModalInstructor'
const Training = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTraining())
  }, [])
  const deleteTrainingHandler = (id) => {
    dispatch(DeleteTraining(id))
  }
  const TrainingList = useSelector((state) => state.training.trainingList)
  //add state
  const [visible, setVisible] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [instructor, setInstructor] = useState(false)
  const [date, setDate] = useState('')
  const [place, setPlace] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [nbHour, setNbhour] = useState('')
  const [mode, setMode] = useState('')
  const [list_instructor, setListInstructor] = useState([])
  //update state

  const [updatevisible, setUpdateVisible] = useState(false)
  //const [updateinstructor, setUpdateInstructor] = useState(false)
  const [updatedate, setUpdateDate] = useState('2022-04-01')
  const [updateplace, setUpdatePlace] = useState('café ')
  const [updateprice, setUpdatePrice] = useState('50')
  const [updatetitle, setUpdateTitle] = useState('time managment')
  const [updatenbHour, setUpdateNbhour] = useState('3')
  const [updatemode, setUpdateMode] = useState('espace')
  const [updatelist_instructor, setUpdateListInstructor] = useState([])

  const openModalInstructor = (id) => {
    dispatch(getInstructorInfo(id))
    setInstructor(!instructor)
  }
  const addTrainigHandler = () => {
    const listOfInstructors = list_instructor.map((elem) => {
      return elem.value
    })
    dispatch(AddTraining(date, nbHour, place, price, title, mode, listOfInstructors)).then(() => {
      dispatch(getTraining())
      setVisible(false)
      setDate('')
      setPlace('')
      setPrice('')
      setTitle('')
      setListInstructor([])
      setMode('')
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
                  title={'Add new Training'}
                  visible={visible}
                  setVisible={setVisible}
                  addHandler={() => addTrainigHandler()}
                >
                  <TrainingFrom
                    date={date}
                    setDate={setDate}
                    list_instructor={list_instructor}
                    setListInstructor={setListInstructor}
                    nbHour={nbHour}
                    setNbhour={setNbhour}
                    price={price}
                    setPrice={setPrice}
                    place={place}
                    setPlace={setPlace}
                    title={title}
                    setTitle={setTitle}
                    mode={mode}
                    setMode={setMode}
                  />
                </Modal>
              </CInputGroup>
            </CCardHeader>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Date</CTableHeaderCell>
              <CTableHeaderCell>Number Hour</CTableHeaderCell>
              <CTableHeaderCell>Title</CTableHeaderCell>
              <CTableHeaderCell>Place</CTableHeaderCell>
              <CTableHeaderCell>Price</CTableHeaderCell>
              <CTableHeaderCell>Mode of payment</CTableHeaderCell>
              <CTableHeaderCell>Instructor</CTableHeaderCell>
              <CTableHeaderCell>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {TrainingList.map((elem) => {
              return (
                <>
                  <CTableRow key={elem.id}>
                    <CTableDataCell className="text-center">{elem.date}</CTableDataCell>
                    <CTableDataCell>{elem.nbHeure}</CTableDataCell>
                    <CTableDataCell className="text-center">{elem.titre}</CTableDataCell>
                    <CTableDataCell>{elem.local}</CTableDataCell>
                    <CTableDataCell className="text-center">{elem.prix}</CTableDataCell>
                    <CTableDataCell>{elem.type_payement}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="link"
                        role="button"
                        onClick={() => openModalInstructor(elem.id)}
                      >
                        See Instructor Info
                        <ModalInstructor
                          instructor={instructor}
                          setInstructor={setInstructor}
                          id={elem.id}
                        ></ModalInstructor>
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="link" onClick={() => setUpdateVisible(!updatevisible)}>
                        <CIcon size="xl" icon={cilColorBorder} />
                        <Modal
                          title={'UpdateTraining'}
                          visible={updatevisible}
                          setVisible={setUpdateVisible} /* addHandler={() =>addTrainigHandler()} */
                        >
                          <TrainingFrom
                            date={updatedate}
                            setDate={setUpdateDate}
                            list_instructor={updatelist_instructor}
                            setListInstructor={setUpdateListInstructor}
                            nbHour={updatenbHour}
                            setNbhour={setUpdateNbhour}
                            price={updateprice}
                            setPrice={setUpdatePrice}
                            place={updateplace}
                            setPlace={setUpdatePlace}
                            title={updatetitle}
                            setTitle={setUpdateTitle}
                            mode={updatemode}
                            setMode={setUpdateMode}
                          />
                        </Modal>
                      </CButton>
                      <CButton color="link" onClick={() => setDelete(!Delete)} role="button">
                        <CIcon size="xl" icon={cilTrash} />
                        <DeleteModal
                          Delete={Delete}
                          setDelete={setDelete}
                          deleteHandler={() => deleteTrainingHandler(elem.id)}
                        />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                </>
              )
            })}
          </CTableBody>
        </CTable>
      </CRow>
    </>
  )
}

export default Training
