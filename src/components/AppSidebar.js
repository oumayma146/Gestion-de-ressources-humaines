/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon  from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import hello from 'src/assets/images/logoGRH.png'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import navigationRH from '../_navRH'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.auth.sidebarShow)
  const role = useSelector((state) => state.auth.role)
 console.log('role', localStorage.getItem('role'));

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">

     <CImage align="center" rounded src={hello} height={60} width={250}  /> 
     {/*   <CIcon className="sidebar-brand-full" icon={logoGRH} height={35} />     */}
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> 
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
       <AppSidebarNav items={localStorage.getItem('role') =="rh"? navigationRH:navigation} /> 
    {/*       <AppSidebarNav items={navigation} /> */}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
