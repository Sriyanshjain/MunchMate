import React, { useState,useContext } from 'react'
import { UserContext } from '../utils/UserContext';
import { LOGO_URL } from '../utils/constants'
import {Link} from 'react-router-dom';
import {
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';
import useOnlineStatus from '../utils/useOnlineStatus'
import { useSelector } from 'react-redux';
export const Header = () => {

  const [btnName,setbtnName]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const user=useContext(UserContext);
  const cartItems= useSelector((store)=>store.cart.items)
  return (
    <div className='sticky z-20 w-full bg-white top-0'>
    <div className='flex justify-between h-24 shadow-lg items-center '>
        <div className='w-32 h-20 ml-32' >
      
          <Link to='/'><img className='cursor-pointer' src={LOGO_URL}></img></Link>
        
       
            
            </div>
            <div> 
            <ul className='flex '>
                <li className='p-4 hover:text-orange-400 cursor-pointer text-lg  font-primary font-bold'>Online:{onlineStatus?"🟢":"🔴"}</li>
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg  font-primary font-bold'>Home</li>
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg font-primary font-bold'><Link className='link_res' to="/grocery"><span><BuildingStorefrontIcon className='w-4 h-4 inline-block ' />{' '}</span><span className='pl-[8]'>Grocery</span></Link></li>
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg  font-primary font-bold'><Link className='link_res' to="/about">About us</Link></li>
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg  font-primary font-bold'><Link  className='link_res' to="/contact"><span><ChatBubbleOvalLeftIcon className='w-4 h-4 inline-block ' />{' '}</span><span className='pl-[8]'>Contact us</span></Link></li>
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg   font-primary font-bold'><Link className='link_res' to="/cart">Cart- {cartItems.length} items</Link></li>
                {/* <li className='p-4  hover:text-orange-400 cursor-pointer text-lg   font-primary font-bold'>{user.loggedInUser}</li> */}
                <li className='p-4  hover:text-orange-400 cursor-pointer text-lg  font-primary font-bold'>
                  <button className="login" onClick={()=>{
                    btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                  }}>{btnName}</button>
                </li>
             </ul>
             
             </div>
            
        
    </div>
    </div>
  )
}
