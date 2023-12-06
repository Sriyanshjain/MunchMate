import { ChevronDownIcon ,ChevronUpIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItems} from "../utils/slices/cartSlice"
const RestaurantMenuCategory =(props)=>{
  /*inspite of lifting the expanded state variable from here to resmenu component, we will maintain
  a toggle true false here so that we can also close the already expanded category*/
   const [toggleExpand,setToggleExpand]=useState(false);
    const {title,itemCards}=props?.data?.card?.card;
    const {isExpanded,setShowIndex}=props;
    const dispatch= useDispatch();

    const handleAdd=(item)=>{
        dispatch(addItems(item))
    }
    const handleExpand =()=>{
        setShowIndex();
        setToggleExpand(!toggleExpand);
    }
    return (
        <div className="cursor-pointer" >
        <div className="flex justify-between bg-slate-100 mt-3 p-5 rounded-lg" onClick={handleExpand}>
            <div className="text-xl font-primary font-bold text-black-heading">{title} ({itemCards.length})</div>
            <div >{isExpanded && toggleExpand?<ChevronUpIcon className='w-6 h-6 text-xl'/>:<ChevronDownIcon className='w-6 h-6 text-xl'/>}</div>
            </div>
           { isExpanded && toggleExpand &&<div className="bg-white">
                <ul>
                 {
                    itemCards.map((item)=>{
                        return<div key={item?.card?.info?.id}>
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
                                <button onClick={()=>handleAdd(item)} className="text-orange-500 px-6 bg-white rounded-md font-primary font-extrabold py-3 ml-8 mt-24 shadow-md  hover:text-white hover:bg-orange-500 ">ADD</button>
                                </div>
                            { (item?.card?.info?.imageId?<img src={CDN_URL+item?.card?.info?.imageId } className="w-36 bg-center h-32 rounded-lg shadow-lg" />:
                            <img src={require('../assets/sample.png')} alt='' className="w-36 bg-center h-32 rounded-lg shadow-lg" />)

                            }
                                
                               
                                
                             </div>
                        </div>
                        <hr className="mt-3"></hr>
                        </div>
                    }
                       
                    )
                 }
                </ul>
            </div>}
        </div>
    )
}

export default RestaurantMenuCategory;