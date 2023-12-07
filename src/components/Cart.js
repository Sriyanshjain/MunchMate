import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from "../utils/constants";
import {clearCart} from "../utils/slices/cartSlice"
const Cart=()=>{
   
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
   const handleClear=()=>
    {
         dispatch(clearCart());
    }
    return (<div>
              <button className='text-white bg-black rounded-lg p-2 m-2 float-right' onClick={handleClear}>Clear All</button>
              <div className='flex w-9/12  justify-center mx-auto   overflow-hidden min-h-[40rem] max-h-[640]'>
              <div className='w-7/12 overflow-y-auto example  mt-10'>
         {  
                    cartItems.map((item)=>{
                        return<div key={item?.card?.info?.id} >
                      
                         
                              
                          <div className="flex justify-between" >
                            <div className="p-4 mt-11 w-9/12">
                            {item?.card?.info?.itemAttribute?.vegClassifier &&
                            
                            <img src={item?.card?.info?.itemAttribute?.vegClassifier==='VEG' ?require('../assets/veg.png'):require('../assets/non-veg.png')} alt='' className="w-10 bg-center h-9 p-1 rounded-lg" />}    
                            
                             <p className="p-1 text-xl font-primary font-bold text-black-heading">{item?.card?.info?.name}</p>
                             <p className="p-1 text-black-heading font-bold text-lg">₹{item?.card?.info?.price/100}</p>
                             <p className="p-1 mt-2 text-black-400 text-sm">{item?.card?.info?.description}</p>
                             </div>
                             <div className="w-3/12 p-4 mt-11 relative">
                                <div className="absolute">
                                <button  className="text-orange-500 px-6 bg-white rounded-md font-primary font-extrabold py-3 ml-8 mt-24 shadow-md  hover:text-white hover:bg-orange-500 ">ADD</button>
                                </div>
                            { (item?.card?.info?.imageId?<img src={CDN_URL+item?.card?.info?.imageId } className="w-36 bg-center h-32 rounded-lg shadow-lg" />:
                            <img src={require('../assets/sample.png')} alt='' className="w-36 bg-center h-32 rounded-lg shadow-lg" />)

                            }
                                
                               
                                
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
                       <p className='text-xl font-normal'>Price (8 items)</p>
                       <p className='text-xl font-semibold'>₹ 800</p>
                        </div>
                        <div className='flex justify-between mx-3 my-4'>
                       <p className='text-xl font-normal'>Discount (10%)</p>
                       <p className='text-xl font-semibold'>-₹ 200</p>
                        </div>
                        <div className='flex justify-between mx-3 my-4'>
                       <p className='text-xl font-normal'>Delivery charges (5%)</p>
                       <p className='text-xl font-semibold'>+₹ 120</p>
                        </div>
                        <p className='mx-3 my-1'> You'll save ₹236.80 on this order 🎉</p>
                        <hr className='mt-4 mx-2 p-2'></hr>
                        <div className='flex justify-between mx-3'>
                       <p className='text-3xl font-primary font-bold'>Total Amount</p>
                       <p className='text-3xl font-bold'>₹ 2360</p>
                        </div>
                        <hr className='my-4 mx-2 p-2'></hr>
                        <button className='w-full p-4 mx-auto font-bold bg-orange-400 text-white text-xl rounded-lg'>PLACE ORDER</button>
                        </div>
                   </div>
                    </div>  
                    
                 
    </div>)
}
export default Cart;