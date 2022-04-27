/* eslint-disable */
import React from 'react'
import Role from './views/theme/role/Role'

//const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const role = React.lazy(() => import('./views/theme/role/Role'))
const Employee = React.lazy(() => import('./views/theme/employee/Employee'))
const ads = React.lazy(() => import('./views/theme/ads/Ads'))
const leave = React.lazy(() => import('./views/theme/leave/leave'))
const salary = React.lazy(() => import('./views/theme/salary/Salary'))
const training = React.lazy(() => import('./views/theme/training/Training'))
const instructor = React.lazy(() => import('./views/theme/instructor/Instructor'))
const configuration = React.lazy(() => import('./views/theme/configuration/Configuration'))

const routes = [
 // { path: '/', exact: true, name: 'Home' },
 //{ path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme/Role', name: 'Role', element: role },
  { path: '/theme/employee', name: 'Employee', element: Employee },
  { path: '/theme/ads', name: 'Employee', element: ads },
  { path: '/theme/leave', name: 'Employee', element: leave },
  { path: '/theme/salary', name: 'salary', element: salary },
  { path: '/theme/training', name: 'trainig', element: training },
  { path: '/theme/instructor', name: 'instructor', element: instructor },
 { path: '/theme/configuration', name: 'configuration', element: configuration },

]

export default routes
