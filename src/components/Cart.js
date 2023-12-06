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
         {   
                    cartItems.map((item)=>{
                        return<div key={item?.card?.info?.id}>
                      
                            <div className='flex w-9/12 justify-center mx-auto'>
                                <div className='w-6/12'>
                          <div className="flex justify-between" >
                            <div className="p-4 mt-11 w-9/12">
                            {item?.card?.info?.itemAttribute?.vegClassifier &&
                            
                            <img src={item?.card?.info?.itemAttribute?.vegClassifier==='VEG' ?require('../assets/veg.png'):require('../assets/non-veg.png')} alt='' className="w-10 bg-center h-9 p-1 rounded-lg" />}    
                            
                             <p className="p-1 text-xl font-primary font-bold text-black-heading">{item?.card?.info?.name}</p>
                             <p className="p-1 text-black-heading font-bold text-lg">₹{item?.card?.info?.price/100}</p>
                             <p className="p-1 mt-2 text-black-400 text-sm">{item?.card?.info?.description}</p>
                             </div>
                             <div className="w-3/12 p-4 mt-11">
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
                        <div className='w-6/12'>
                            </div>
                        </div>
                        
                        </div>
                    }
                       
                    )
                 }
    </div>)
}
export default Cart;