/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilStar,
  cilGroup,
  cilCash,
  cilAudioDescription,
  cilCalendarCheck,
  cilTask,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'



const _nav = [
  
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    component: CNavTitle,
  },
  {
    component: CNavItem,
    name: 'Role Management',
    to: '/theme/Role',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Employee Managment',
    to: '/theme/employee',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />, 
    items: [
      {
        component: CNavItem,
        name: 'Configuration',
        to: '/theme/configuration',
      
      },
      {
        component: CNavItem,
        name: 'Employee Managment',
        to: '/theme/employee',
      },]
  
  },
  {
    component: CNavItem,
    name: 'Leave management',
    to: '/theme/leave',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Salary Managment',
    to: '/theme/salary',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Training Managment',
    to: '/theme/training',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Instructor Managment',
        to: '/theme/instructor',
      },
      {
        component: CNavItem,
        name: 'Training Managment',
        to: '/theme/training',
      },]
  },
  {
    component: CNavItem,
    name: 'Ads Managment',
    to: '/theme/ads',
    icon: <CIcon icon={cilAudioDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
