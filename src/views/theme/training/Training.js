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
import TrainingFrom from '../From/TrainingFrom'
import { useDispatch, useSelector } from 'react-redux'
import {
  AddTraining,
  DeleteTraining,
  getInstructorInfo,
  getTraining,
  SearchTraining,
  updateTraining,
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
    setDelete(false)
  }
  const TrainingList = useSelector((state) => state.training.NewtrainingList)
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
  const [updatedate, setUpdateDate] = useState('')
  const [updateplace, setUpdatePlace] = useState(' ')
  const [updateprice, setUpdatePrice] = useState('')
  const [updatetitle, setUpdateTitle] = useState('')
  const [updatenbHour, setUpdateNbhour] = useState('')
  const [updatemode, setUpdateMode] = useState('')
  const [updatelist_instructor, setUpdateListInstructor] = useState([])
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }
  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newTraining = TrainingList.filter((el) => {
      return id == el.id
    })
    setUpdateDate(newTraining[0].date)
    setUpdatePlace(newTraining[0].local)
    setUpdatePrice(newTraining[0].prix)
    setUpdateTitle(newTraining[0].titre)
    setUpdateNbhour(newTraining[0].nbHeure)
    setUpdateMode({label:newTraining[0]?.type_payement,value:newTraining[0]?.type_payement})
    const ins = newTraining[0]?.formateur.map(elem=>{
      return {value:elem.id,label:elem.nom}
    })
    setUpdateListInstructor( ins)
  }

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
      setNbhour('')
      setListInstructor([])
      setMode('')
    })
  }
  const updateTraningHandler = (id) => {
    const UplistOfInstructors = updatelist_instructor.map((elem) => {
      return elem.value
    })
    dispatch(updateTraining(updatedate, updatenbHour, updateplace, updateprice, updatetitle, updatemode, UplistOfInstructors,id)).then(() => {
      dispatch(getTraining())
      setUpdateVisible(false)
    })
  }
  const SearchTrainigHandler = (title) => {

   dispatch(SearchTraining(title))
  }
  return (
    <>
      <CRow>
        <Modal
          title={'UpdateTraining'}
          visible={updatevisible}
          setVisible={setUpdateVisible}
          addHandler={() => updateTraningHandler(idOfElementToBeUpdate)}
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
        <DeleteModal
          Delete={Delete}
          setDelete={setDelete}
          deleteHandler={() => deleteTrainingHandler(idOfElementToBeDeleted)}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
                <CButton color="primary" size="sm" onClick={(e) =>SearchTrainigHandler(title)}>
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
                    <CButton color="link" onClick={() => onPressUpdateHandler(elem.id)}>
                      <CIcon size="xl" icon={cilColorBorder} />
                    </CButton>
                    <CButton
                      color="link"
                      onClick={() => onPressDeleteHandler(elem.id)}
                      role="button"
                    >
                      <CIcon size="xl" icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </CRow>
    </>
  )
}

export default Training
