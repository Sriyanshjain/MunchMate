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
        <div className="flex justify-between bg-slate-100 mt-3 p-5 rounded-lg sm:w-full" onClick={handleExpand}>
            <div className="text-[12px] md:text-2xl sm:text-xl text-lg font-primary font-bold text-black-heading">{title} ({itemCards.length})</div>
            <div >{isExpanded && toggleExpand?<ChevronUpIcon className='w-6 h-6 text-xl'/>:<ChevronDownIcon className='w-6 h-6 text-xl'/>}</div>
            </div>
           { isExpanded && toggleExpand &&<div className="bg-white">
                <ul>
                 {
                    itemCards.map((item)=>{
                        return<div key={item?.card?.info?.id}>
                          <div className="flex  justify-between items-center p-2 py-8  gap-2 sm:gap-3 md:gap-8" >
                            <div className="space-y-2 p-2 basis-7/12 md:basis-8/12">
                            {item?.card?.info?.itemAttribute?.vegClassifier &&
                            
                            <img src={item?.card?.info?.itemAttribute?.vegClassifier==='VEG' ?require('../assets/veg.png'):require('../assets/non-veg.png')} alt='' className="w-10 bg-center h-9 p-1 rounded-lg" />}    
                            
                             <p className="p-1  md:text-2xl sm:text-xl text-lg font-primary font-bold text-black-heading">{item?.card?.info?.name}</p>
                             <p className="p-1 text-black-heading font-bold md:text-2xl sm:text-xl text-lg">₹{item?.card?.info?.price/100|item?.card?.info?.defaultPrice/100}</p>
                             <p className="p-1 hidden md:block mt-2 text-black-400 text-sm">{item?.card?.info?.description}</p>
                             </div>
                             <div className=" md:basis-4/12 basis-5/12  w-full space-y-2 p-2 relative">
                                <div className="absolute">
                                <button onClick={()=>handleAdd(item)} className="text-orange-500 px-6 bg-white rounded-md font-primary font-extrabold py-3 ml-6 mt-[6.5rem] shadow-md  hover:text-white hover:bg-orange-500 ">ADD</button>
                                </div>
                            { (item?.card?.info?.imageId?<img src={CDN_URL+item?.card?.info?.imageId } className="w-full h-32 aspect-video object-cover bg-center rounded-lg shadow-lg" />:
                            <img src={require('../assets/sample.png')} alt='' className="w-full aspect-video object-cover bg-center h-32 rounded-lg shadow-lg" />)

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