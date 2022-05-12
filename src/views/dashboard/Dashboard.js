/* eslint-disable */
import { cibFacebook, cibGoogle, cibLinkedin, cibTwitter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CProgress, CRow, CWidgetStatsD } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setToken } from 'src/store/action/auth'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      console.log('inside if')
      Navigate('/login')
    } else {
      console.log('inside else')
      const token = localStorage.getItem('token')
      dispatch(setToken(token))
    }
  }, [])
  const [value, onChange] = useState(new Date());
 
  return (
    <>
    <CRow>
    <CCol xs={4}>
      <CWidgetStatsD
        className="mb-3"
        icon={<CIcon className="my-4 text-white" icon={cibFacebook} height={52} />}
        chart={
          <CChartLine
            className="position-absolute w-100 h-100"
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [65, 59, 84, 84, 51, 55, 40],
                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        }
        style={{ '--cui-card-cap-bg': '#3b5998' }}
        values={[
          { title: 'friends', value: '89K' },
          { title: 'feeds', value: '459' },
        ]}
      />
    </CCol>
    <CCol xs={4}>
      <CWidgetStatsD
        className="mb-3"
        icon={<CIcon className="my-4 text-white" icon={cibTwitter} height={52} />}
        chart={
          <CChartLine
            className="position-absolute w-100 h-100"
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [1, 13, 9, 17, 34, 41, 38],
                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        }
        style={{ '--cui-card-cap-bg': '#00aced' }}
        values={[
          { title: 'folowers', value: '973K' },
          { title: 'tweets', value: '1.792' },
        ]}
      />
    </CCol>
    <CCol xs={4}>
      <CWidgetStatsD
        className="mb-3"
        icon={<CIcon className="my-4 text-white" icon={cibLinkedin} height={52} />}
        chart={
          <CChartLine
            className="position-absolute w-100 h-100"
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  backgroundColor: 'rgba(255,255,255,.1)',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointHoverBackgroundColor: '#fff',
                  borderWidth: 2,
                  data: [1, 13, 9, 17, 34, 41, 38],
                  fill: true,
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }}
          />
        }
        style={{ '--cui-card-cap-bg': '#507cd9' }}
        values={[
          { title: 'CONTACTS', value: '500+' },
          { title: 'FEEDS', value: '292' },
        ]}
      />
    </CCol>
  </CRow>
  <CRow>
  <CCol xs={4}>
   <div>
   <Calendar onChange={onChange} value={value} />
 </div>
 </CCol>
 </CRow>
 </>
  )
}

export default Dashboard
