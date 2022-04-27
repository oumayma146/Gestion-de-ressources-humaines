/* eslint-disable */
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import React, { useState } from 'react'
import InstructorFrom from '../From/InstructorFrom'
import TrainingFrom from '../From/TrainingFrom'

export default function Tabs() {
    const [activeKey, setActiveKey] = useState(1)
    return (
      <>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              General Information
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
            Instructor Information
            </CNavLink>
          </CNavItem>
         
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
           <TrainingFrom />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
        <InstructorFrom />
          </CTabPane>
        </CTabContent>
      </>
    )
}
