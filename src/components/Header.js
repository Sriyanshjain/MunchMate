import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
export const Header = () => {

  const [btnName,setbtnName]=useState("Login")
  const onlineStatus=useOnlineStatus();
  return (
    <div className='header'>
        <div className="logo-container" >
            <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className="nav-items"> <ul>
                <li className='nav-item'>Online:{onlineStatus?"🟢":"🔴"}</li>
                <li className='nav-item'>Home</li>
                <li className='nav-item'><Link className='link_res' to="/grocery">Grocery</Link></li>
                <li className='nav-item'><Link className='link_res' to="/about">About us</Link></li>
                <li className='nav-item'><Link  className='link_res' to="/contact">Contact us</Link></li>
                <li className='nav-item'>Cart</li>
                <li className='nav-item'>
                  <button className="login" onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                  }}>{btnName}</button>
                </li>
             </ul>
             
             </div>
            
        
    </div>
  )
}
