import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from "../utils/constants";
import {clearCart,increaseItemQuantity,decreaseItemQuantity,removeItem} from "../utils/slices/cartSlice"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Cart=()=>{
   
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const [total,setTotal]=useState(0);
    const modifyCartValues=()=>{
        let totalPrice = 0;
        cartItems.forEach(obj => {
            const price = obj?.item?.card?.info?.price * obj?.quantity || 0;
            totalPrice += price;
          });
        setTotal(totalPrice/100);
    }
    useEffect(()=>{
     modifyCartValues();
    },[cartItems])
   const handleClear=()=>
    {
         dispatch(clearCart());
    }
    const increaseQuantity=(id)=>{
        dispatch(increaseItemQuantity(id))
    }
    const decreaseQuantity=(id)=>{
        dispatch(decreaseItemQuantity(id))
    }
    const removeItemFromCart=(id)=>{
        dispatch(removeItem(id)) 
    }

    if(cartItems.length==0)
    {
        return <div className='text-center mt-4'><p className=' text-3xl font-semibold font-primary my-auto'>Such Empty...</p>
                   <Link to='/'><button className='p-4 mt-4 font-bold bg-orange-400 text-white text-xl rounded-lg'>EXPLORE RESTAURANTS NEAR YOU</button></Link> 
               </div>
    }
    return (<div>
             
              <div className='flex w-9/12  justify-center mx-auto   overflow-hidden min-h-[40rem] max-h-[640]'>
              <div className='w-7/12 overflow-y-auto example  mt-10'>
           <div className='flex justify-between'>
            <p className='text-3xl font-bold font-primary m-2 p-2'>Cart</p>
            <button className='text-white bg-black rounded-lg p-2 m-2 ' onClick={handleClear}>Clear cart</button>

           </div>
         {  
                    cartItems.map((item)=>{
                        return<div key={item?.item?.card?.info?.id} >
                      
                         
                              
                          <div className="flex justify-between" >
                          <div className="w-3/12 p-4 mt-11 relative">
                                
                            { (item?.item?.card?.info?.imageId?<img src={CDN_URL+item?.item?.card?.info?.imageId } className="w-36 bg-center h-32 rounded-lg shadow-lg" />:
                            <img src={require('../assets/sample.png')} alt='' className="w-36 bg-center h-32 rounded-lg shadow-lg" />)

                            }
                            <div className='flex'>
                                <button className='w-8 h-8 mt-5 mx-auto bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400 disabled:cursor-not-allowed'  disabled={item?.quantity === 1} onClick={()=>decreaseQuantity(item?.item?.card?.info?.id)}>-</button>
                                <p className='mt-5 text-lg font-semibold'>{item?.quantity}</p>
                                <button className='w-8 h-8 mt-5 mx-auto bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400' onClick={()=>increaseQuantity(item?.item?.card?.info?.id)}>+</button>
                               
                                </div> 
                               
                                
                             </div>
                            <div className="p-4 mt-11 w-9/12">
                            {item?.item?.card?.info?.itemAttribute?.vegClassifier &&
                            
                            <img src={item?.item?.card?.info?.itemAttribute?.vegClassifier==='VEG' ?require('../assets/veg.png'):require('../assets/non-veg.png')} alt='' className="w-10 bg-center h-9 p-1 rounded-lg" />}    
                            
                             <p className="p-1 text-xl font-primary font-bold text-black-heading">{item?.item?.card?.info?.name}</p>
                             <p className="p-1 text-black-heading font-bold text-lg">₹{item?.item?.card?.info?.price/100}  ({item?.item?.card?.info?.price/100}⨯ {item?.quantity})</p>

                                                                             <button className='p-2 mt-8 float-right bg-white text-orange-400 border-2 rounded-lg font-bold border-orange-400 hover:text-white hover:bg-orange-400' onClick={()=>removeItemFromCart(item?.item?.card?.info?.id)}>Remove</button>
                             </div>
                      
                        </div>
                        <hr className="mt-3"></hr>
                        
                      
                        
                        
                        </div>
                    })
                    
                }
                </div>
                    <div className='w-5/12 border border-gray bg-white rounded-lg shadow-lg my-auto  mx-8 '>
                        <div className='p-8'>
                    <h1 className='font-primary font-bold text-2xl text-black ml-2'>Order Summary</h1>
                    <hr className='my-4 mx-2 p-2'></hr>
                    
                    <div className='flex justify-between mx-3 my-3'>
                       <p className='text-xl font-normal'>Price ({cartItems.length} items)</p>
                       <p className='text-xl font-semibold'>₹ {total}</p>
                        </div>
                        <div className='flex justify-between mx-3 my-4'>
                       <p className='text-xl font-normal'>Discount (10%)</p>
                       <p className='text-xl font-semibold'>-₹ {(0.1*total).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between mx-3 my-4'>
                       <p className='text-xl font-normal'>Delivery charges (5%)</p>
                       <p className='text-xl font-semibold'>+₹ {(0.05*total).toFixed(2)}</p>
                        </div>
                        <p className='mx-3 my-1'> You'll save ₹{(0.1*total).toFixed(2)} on this order 🎉</p>
                        <hr className='mt-4 mx-2 p-2'></hr>
                        <div className='flex justify-between mx-3'>
                       <p className='text-3xl font-primary font-bold'>Total Amount</p>
                       <p className='text-3xl font-bold'>₹ {((total)-(0.1*total)+(0.05*total)).toFixed(2)}</p>
                        </div>
                        <hr className='my-4 mx-2 p-2'></hr>
                        <button className='w-full p-4 mx-auto font-bold bg-orange-400 text-white text-xl rounded-lg'>PLACE ORDER</button>
                        </div>
                   </div>
                    </div>  
                    
                 
    </div>)
}
export default Cart;