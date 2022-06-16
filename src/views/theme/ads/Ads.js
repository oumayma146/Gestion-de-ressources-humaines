/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../scss/_custom.scss'
import Modale from '../From/UpdateRoleFrom'
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
import { cilColorBorder, cilMagnifyingGlass, cilPlus, cilTrash } from '@coreui/icons'
import Modal from '../Modal'
import AdsFrom from '../From/AdsFrom'
import DeleteModal from '../DeleteModal'
import { AddAds, DeleteAds, getAds, SearchAds, UpdateAds } from 'src/store/action/ads'
import { useDispatch, useSelector } from 'react-redux'

const Ads = () => {
  const [Delete, setDelete] = useState(false)
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState('')
  const [abs, setAbs] = useState('')
  const [poster, setPoster] = useState(null)
  const [title, setTitle] = useState('')
  const [typeliste, setTypeliste] = useState([])
  //update state
  const [updatevisible, setUpdateVisible] = useState(false)
  const [updatedate, setUpdateDate] = useState('')
  const [updateabs, setUpdateAbs] = useState('')
  const [updateposter, setUpdatePoster] = useState('')
  const [updatetitle, setUpdateTitle] = useState('')
  const [updatetypeliste, setUpdateTypeliste] = useState([])
  const [idOfElementToBeDeleted, setIdOfElementToBeDeleted] = useState()
  const [idOfElementToBeUpdate, setIdOfElementToBeUpdate] = useState()
  const onPressDeleteHandler = (id) => {
    setDelete(!Delete)
    setIdOfElementToBeDeleted(id)
  }
  const AdsList = useSelector((state) => state.ads.NewadsList)

  const onPressUpdateHandler = (id) => {
    setUpdateVisible(!updatevisible)
    setIdOfElementToBeUpdate(id)
    let newAds = AdsList.filter((el) => {
      return id == el.id
    })
    console.log('newads', newAds)
    setUpdateDate(newAds[0].date)
    setUpdateAbs(newAds[0].resume)
    setUpdateTitle(newAds[0].titre)
    setUpdatePoster(newAds[0].affiche)
    const ins = newAds[0]?.typeAnnonce.map((elem) => {
      return { value: elem.id, label: elem.typeAnnonce }
    })
    setUpdateTypeliste(ins)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAds())
  }, [])
  const deleteTrainingHandler = (id) => {
    dispatch(DeleteAds(id))
    setDelete(false)
    dispatch(getAds())
  }
  const addAdsHandler = () => {
    const listOfTypes = typeliste.map((elem) => {
      return elem.value
    })
    dispatch(AddAds(title, abs, date, poster, listOfTypes)).then(() => {
      dispatch(getAds())
      setVisible(false)
      setDate('')
      setAbs('')
      setPoster('')
      setTitle('')
      setTypeliste([])
    })
  }
  const SearchAdsHandler = (title) => {
    dispatch(SearchAds(title))
  }
  const updateAdsHandler = (id) => {
    const UpdatelistOfTypes = updatetypeliste.map((elem) => {
      return elem.value
    })
    dispatch(
      UpdateAds(updatetitle, updateabs, updatedate, updateposter, UpdatelistOfTypes, id),
    ).then(() => {
      dispatch(getAds())
      setUpdateVisible(false)
    })
  }
  return (
    <>
      <CRow>
        <Modal
          title={'Add new Ads'}
          visible={updatevisible}
          setVisible={setUpdateVisible}
       
        >
          <AdsFrom
            title={updatetitle}
            setTitle={setUpdateTitle}
            date={updatedate}
            setDate={setUpdateDate}
            abs={updateabs}
            setAbs={setUpdateAbs}
            poster={updateposter}
            setPoster={setUpdatePoster}
            typeliste={updatetypeliste}
            setTypeliste={setUpdateTypeliste}
            addHandler={() => updateAdsHandler(idOfElementToBeUpdate)}
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
                <CFormInput
                  type="search"
                  placeholder="Search for..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <CButton color="primary" size="sm" onClick={(e) => SearchAdsHandler(title)}>
                  Search
                </CButton>
                <div style={{ width: '400px' }}> </div>

                <CButton onClick={() => setVisible(!visible)}>ADD</CButton>
                <Modal
                  title={'Add new Ads'}
                  visible={visible}
                  setVisible={setVisible}
                 
                >
                  <AdsFrom
                    title={title}
                    setTitle={setTitle}
                    date={date}
                    setDate={setDate}
                    abs={abs}
                    setAbs={setAbs}
                    poster={poster}
                    setPoster={setPoster}
                    typeliste={typeliste}
                    setTypeliste={setTypeliste}
                    addHandler={() => addAdsHandler()}
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
              <CTableHeaderCell>Title</CTableHeaderCell>
              <CTableHeaderCell>Abstract</CTableHeaderCell>
              <CTableHeaderCell>Date</CTableHeaderCell>
              <CTableHeaderCell>Poster</CTableHeaderCell>
              <CTableHeaderCell>Type</CTableHeaderCell>
              <CTableHeaderCell>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {AdsList.map((elem) => {
              return (
                <CTableRow key={elem.id}>
                  <CTableDataCell>{elem.titre}</CTableDataCell>
                  <CTableDataCell>{elem.resume}</CTableDataCell>
                  <CTableDataCell>{elem.date}</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    <img
                      width="50px"
                      src={`http://localhost:8000/storage/${elem.affiche}`}
                    />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {elem.typeAnnonce.map((elemnt) => {
                      return <div>{elemnt.typeAnnonce}</div>
                    })}
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

export default Ads
