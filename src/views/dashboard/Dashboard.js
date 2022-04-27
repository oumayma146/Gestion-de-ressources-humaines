/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setToken } from 'src/store/action/auth';
const Dashboard = () => {

    const dispatch =useDispatch();
   
    
      useEffect(() => {
        if (localStorage.getItem("token") === null) {
          console.log('inside if');
            Navigate("/login")
          }else{
            console.log('inside else');
            const token = localStorage.getItem("token");
            dispatch(setToken(token));
          }
      
      
      }, [])
      

}

export default Dashboard