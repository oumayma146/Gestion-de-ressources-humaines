/* eslint-disable */
import React, { useEffect, useState } from 'react'

import { CWidgetStatsD, CRow, CCol, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCard, CCardHeader, CInputGroup, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Modal from '../Modal'
import LangugesFrom from '../From/LangugesFrom'
import SkillsFrom from '../From/SkillsFrom'
import { AddLanguge, AddSkill, getLanguge, getSkill } from 'src/store/action/configuration'
import { useDispatch, useSelector } from 'react-redux'
import DeleteModal from '../DeleteModal'
import { cilTrash } from '@coreui/icons'


const Configuration = () => {
  const [Delete, setDelete] = useState(false)
  const [visiblelang, setVisiblelang] = useState(false)
  const [visibleskill, setVisibleskill] = useState('');
  const [languge, setLanguge] = useState('');
  const [skill, setSkill] = useState('');
  const Languges= useSelector(state => state.conf.langugeList);
  const Skills= useSelector(state => state.conf.skillList);
  const dispatch =useDispatch();
    useEffect(() => {
      dispatch( getSkill ());
      dispatch(getLanguge());
    },[])

    const addSkillHandler = (skill) => {
      dispatch(AddSkill(skill)).then(()=>{
        dispatch(getSkill());
        setVisibleskill(false);
        setSkill('');
      })
    }
    const addLangugeHandler = (languge) => {
      dispatch(AddLanguge(languge)).then(()=>{
        dispatch(getLanguge());
        setVisiblelang(false);
        setLanguge('');
      })
     }

  return (
    <>
     <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
       
          <CInputGroup className="input-prepend">
          <CButton onClick={() => setVisiblelang(!visiblelang)}>ADD New Languges</CButton>
          <Modal size={true} title={"Add new Languge"} visible={visiblelang} setVisible={setVisiblelang} addHandler={()=>addLangugeHandler(languge)} >
            <LangugesFrom languge={languge} setLanguge={setLanguge}/>
          </Modal> 
          
          <div style={{"width":"40px"}} ></div>
             <CButton onClick={() => setVisibleskill(!visibleskill)}>ADD New Skills</CButton>
            < Modal size="md" title={"Add new Skill"} visible={visibleskill} setVisible={setVisibleskill} addHandler={()=>addSkillHandler(skill)} >
            <SkillsFrom skill={skill} setSkill={setSkill}/>
          </Modal> 
            </CInputGroup>
          </CCardHeader>
        </CCard>
      </CCol>
     </CRow>
    <CRow>
      <CCol sm={10} lg={6}>
      <CTable align="middle" className="mb-0 border" hover responsive >
  <CTableHead color="light">
  
    <CTableRow >
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Languges Name</CTableHeaderCell>

    </CTableRow>
  </CTableHead>
  <CTableBody>
  {Languges?
    <>
  {Languges.map(elem=>{ 
        
        return(
            < >
    <CTableRow key={elem.id}>
      <CTableHeaderCell scope="row">{elem.id}</CTableHeaderCell>
      <CTableDataCell>{elem.nom}</CTableDataCell>
  
    </CTableRow>
    </>
                   )
                 })}
                 </>
                 :null}
   </CTableBody>
   </CTable>
      </CCol>

      <CCol sm={10} lg={6}>
      <CTable align="middle" className="mb-0 border" hover responsive >
  <CTableHead color="light">
    <CTableRow >
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Skills Name</CTableHeaderCell>
      
  
    </CTableRow>
  </CTableHead>
  <CTableBody>
  {Skills?
    <>
  {Skills.map(el=>{ 
        
        return(
            < >
    <CTableRow key={el.id}>
      <CTableHeaderCell scope="row">{el.id}</CTableHeaderCell>
      <CTableDataCell>{el.nomCompetence}</CTableDataCell>
    
    </CTableRow>
    </>
                   )
                 })}
                 </>
                 :null}
   </CTableBody>
   </CTable>
      </CCol>
    </CRow>
    </>
  )
}



export default Configuration