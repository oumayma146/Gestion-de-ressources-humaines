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
import {
  cilColorBorder,
  cilMagnifyingGlass,
  cilPlus,
  cilTrash,
} from '@coreui/icons'
import FromEmployee from '../From/EmployeeFrom'
import RoleFrom from '../From/RoleFrom'
import Modal from '../Modal'
import DeleteModal from '../DeleteModal'
import ModalPermission from '../ModalPermission'
import { useDispatch, useSelector } from 'react-redux'
import { AddRole, DeleteRole, getRole } from 'src/store/action/role'
import { getRolePermission } from 'src/store/action/RolePermission'

const Role = () => {
 
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getRole());
  }, [])
  
  const RoleList= useSelector(state => state.role.roleList);
  const [visible, setVisible] = useState(false)
  const [visiblePermission, setVisiblePermission] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [title, setTitle] = useState('');
  const [permission, setPermission] = useState([]);
//update state
   const [updatetitle, setUpdateTitle] = useState('');
  const [updatepermission, setUpdatePermission] = useState([]);
  const [updatevisible, setUpdateVisible] = useState(false)
  const openModalPermission = (id)=> {
  dispatch(getRolePermission(id));
  setVisiblePermission(!visiblePermission)
 }
 

const deleteRoleHandler = (id) => {
  console.log('inside compo',id);
  dispatch(DeleteRole(id));
}
const addRoleHandler = () => {
  dispatch(AddRole(title,permission)).then(()=>{
    dispatch(getRole());
    setVisible(false);
    setTitle('')
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
              <CButton color="primary" size='sm'>Search</CButton>
           <div style={{"width":"400px"}} > </div>  
       
             <CButton  color="primary" onClick={() =>  setVisible(!visible)}>ADD</CButton>
             <Modal title={"Add new Role"} visible={visible} setVisible={setVisible}  addHandler={() =>addRoleHandler()}>
               <RoleFrom setTitle={setTitle} setPermission={setPermission} permission={permission} title={title} />
             </Modal>
            </CInputGroup>
          </CCardHeader>
        </CCard>
      </CCol>
     </CRow>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center" >Role Name</CTableHeaderCell>
                    <CTableHeaderCell >Permissions</CTableHeaderCell>
                    <CTableHeaderCell>Options</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
        
                {RoleList.map(elem=>{ 
        
                    return(
                      
                    <CTableRow key={elem.id}>
                      <CTableDataCell className="text-center">
                   {elem.name} {elem.prenom}{elem.id}
                      </CTableDataCell>
                      <CTableDataCell>
                      <CButton  color="link" size='sm' onClick={() => openModalPermission(elem.id)}>See All Permission</CButton>
                       <ModalPermission visible2={visiblePermission} setVisible2={setVisiblePermission} id={elem.id} />
                      </CTableDataCell>
                      <CTableDataCell>
                      <CButton color="link" onClick={() => setUpdateVisible(!updatevisible)} >
                       <CIcon size="xl" icon={cilColorBorder}  />
                       <Modal title={"AUpdate Role"} visible={updatevisible} setVisible={setUpdateVisible} /*  addHandler={() =>addRoleHandler()} */>
                       <RoleFrom setTitle={setUpdateTitle} setPermission={setUpdatePermission} permission={updatepermission} title={updatetitle} />
                       </Modal>
                       </CButton>
                      <CButton color="link"   onClick={() => setDelete(!Delete)} role="button" >
                      <CIcon size="xl" icon={cilTrash} />
                     <DeleteModal Delete={Delete} setDelete={setDelete} deleteHandler={()=>deleteRoleHandler(elem.id)} />
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

export default Role






