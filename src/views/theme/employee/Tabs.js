/* eslint-disable */
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import React, { useState } from 'react'
import EmployeeFrom from '../From/EmployeeFrom'
import MoreInfoFrom from '../From/MoreInfoFrom'

export default function Tabs() {
    const [activeKey, setActiveKey] = useState(1);
    const [Education, setEducation] = useState([]);
    const [Certificates, setCertificates] = useState([]);
    const [startDate,setStartDate] = useState(); 
    const [Gender,setGender] = useState();
    const [endDate,setEndDate] = useState(); 
    const [Nhour,setNhour] = useState(); 
    const [Rnumber,setRnumber] = useState(); 
    const [skill, setSkill] = useState([]);
    const [languge, setLanguge] = useState([]);
    const [state, setState] = useState();
    const [name,setName] = useState();
    const [Lastname,setLastname] = useState();
    const [email,setEmail] = useState();
    const [adress,setAdress] = useState();
    const [post,setPost] = useState();
    const [cinNum,setCinNum] = useState();
    const [BAnum,setBAnum] = useState();
    const [Tnumber,setTnumber] = useState();
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
             More Information
            </CNavLink>
          </CNavItem>
         
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
           <EmployeeFrom name={name} setName={setName} Lastname={Lastname} setLastname={setLastname} post={post}setPost={setPost}
           adress={adress} setAdress={setAdress} email={email} setEmail={setEmail}  cinNum={cinNum} setCinNum={setCinNum} 
           Tnumber={Tnumber} setTnumber={setTnumber}  state={state} setState={setState} BAnum={BAnum}setBAnum={setBAnum} Gender={Gender} setGender={setGender} />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          <MoreInfoFrom skill={skill} setSkill={setSkill} languge={languge} setLanguge={setLanguge}
            Certificates={Certificates} setCertificates={setCertificates} Education={Education}setEducation={setEducation}
           startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} Nhour={Nhour}setNhour={setNhour} Rnumber={Rnumber}setRnumber={setRnumber} />
          </CTabPane>
        </CTabContent>
      </>
    )
}
