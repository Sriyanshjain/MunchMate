import React, { useState,useContext } from 'react'
import { UserContext } from '../utils/UserContext';
import { LOGO_URL } from '../utils/constants'
import {Link} from 'react-router-dom';
import {
  Bars3BottomLeftIcon,
  ChatBubbleOvalLeftIcon,
  ShoppingCartIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import useOnlineStatus from '../utils/useOnlineStatus'
import { useSelector } from 'react-redux';
export const Header = () => {

  const [btnName,setbtnName]=useState("Login")
  const onlineStatus=useOnlineStatus();
  const user=useContext(UserContext);
  const cartItems= useSelector((store)=>store.cart.items)
  return (
    <div className='sticky z-20 w-full shadow-lg bg-white top-0'>
    <div className='flex w-full md:justify-between justify-between py-3  items-center '>
        <div className=' ml-2 w-8 h-10 sm:ml-4 md:h-15  lg:ml-28 ' >
      
        <Link 
      to='/'
      data-testid='logo'
      className='text-xl md:text-2xl font-semibold flex items-center'
    ><img className='cursor-pointer  w-full' src={require("../assets/MunchMate.png")}></img>
     <span className='hidden sm:block sm:text-lg logo text-orange-400 sm:tracking-wider italic sm:ml-1'>MUNCHMATE</span>
    </Link>
       
            
            </div>
            <div> 
            <ul className='flex  md:flex-row px-3'>
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold hidden md:block'>Online:{onlineStatus?"🟢":"🔴"}</li>
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold'><Link className='link_res' to="/"><span className='hidden sm:inline-block '><HomeIcon className='sm:w-4 sm:h-4 md:w-6 md:h-6 inline-block' />{' '}</span><span className='lg:pl-[8]'>Home</span></Link></li>
    
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px]  md:text-lg sm:text-sm  font-primary font-bold'><Link className='link_res' to="/about"><span className='hidden sm:inline-block '><Bars3BottomLeftIcon className='sm:w-4 sm:h-4 md:w-6 md:h-6 inline-block' />{' '}</span><span className='lg:pl-[8]'>About us</span></Link></li>
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold'><Link  className='link_res' to="/contact"><span className='hidden sm:inline-block '><ChatBubbleOvalLeftIcon className='sm:w-4 sm:h-4 md:w-6  md:h-6 inline-block ' />{' '}</span><span className='lg:pl-[8]'>Contact us</span></Link></li>
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer text-[12px] md:text-lg sm:text-sm  font-primary font-bold'><Link className='link_res' to="/cart"><span className='hidden sm:inline-block '><ShoppingCartIcon className='sm:w-4 sm:h-4 md:w-6  md:h-6 inline-block ' />{' '}</span><span className='lg:pl-[8]'>Cart</span></Link>{cartItems.length>0 && <div className='block ml-5 sm:ml-16 bg-orange-400 text-[8px] text-white sm:px-2 px-1  rounded-[50%] sm:-mt-10 -mt-[1.6rem] sm:text-[12px]'>{cartItems.length}</div>}</li>
                {/* <li className='px-4  hover:text-orange-400 cursor-pointer text-lg   font-primary font-bold'>{user.loggedInUser}</li> */}
                <li className='p-1 md:px-2 md:py-4 hover:text-orange-400 cursor-pointer  text-[12px] md:text-lg sm:text-sm  font-primary font-bold'>
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
