import React, { useEffect, useState } from 'react'
import { RestaurantCard ,withTopRatedLabel} from './RestaurantCard'
import { resList } from '../utils/mockData'
import useOnlineStatus from '../utils/useOnlineStatus'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import Carousel from './Carousel'
import { GET_RESATAURANT } from '../utils/constants'

export const Body = () => {

  const [listOfRes,setListOfRes]=useState([]);
  const [listOffers,setListOffers]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filteredList,setFilteredList]=useState([]);
  const [showTopRated,setShowToprated]=useState(false);
  const onlineStatus=useOnlineStatus();
  const RestaurantCardTopRated= withTopRatedLabel(RestaurantCard);
  //if no dependency array=>useEffect called after each render
   //if empty dependency array ([])=>useEffect called after first render(just once)
    //if something inside dependency array=>useEffect called only when dependency changes
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async ()=>{
   
   const data= await fetch(GET_RESATAURANT)
   const jsonData= await data.json();
 
   const gridData=jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   const bestOffers=jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
   console.log(gridData)
   setListOffers(bestOffers);
 setListOfRes(gridData);
 setFilteredList(gridData)
  }
  const filterTopRated=()=>{
    
      const filteredList=listOfRes.filter(res=>res.info.avgRating>4.2);
      setShowToprated((prev)=>!prev)
      setFilteredList(filteredList);
    
  }
  const undoFilterTopRated=()=>{
    
    setShowToprated((prev)=>!prev)
    setFilteredList(listOfRes);
  
}
  if(!onlineStatus)
  return <h1 className='text-bold text-xl text-center'>Looks like you are offline ! Please check your internet</h1>
//whenever we change a state variable , the whole component is re rendered by React
  return  (listOfRes.length==0?(<Shimmer/>):(<div className='mt-2 mx-auto w-[75%] '>
      <div className="flex justify-evenly gap-2 m-6  ">
        
          <input type="text" className='focus:outline-none w-6/12 border-2 border-solid p-2 rounded-md' placeholder='Search by restaurant name' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          
       
        <button className=' w-1/12 bg-orange-400  text-white p-1 sm:p-2  rounded-md' onClick={()=>{
             let list=listOfRes.filter((res)=>{
              const name=res.info.name.toLowerCase()
              if(name.includes(searchText.toLowerCase()))
              return res;
             }
             )
             setFilteredList(list);
          }}><MagnifyingGlassIcon className='w-3 h-3 text-center sm:w-5 sm:h-5 font-semibold'/></button>
        <div className='w-5/12'>
        {!showTopRated?
           <button className=' bg-white  text-black-heading border font-primary font-semibold border-gray-400 sm:ml-4 text-xs sm:text-sm p-1 sm:p-2 rounded-lg '  onClick={filterTopRated}>Top Rated Restaurants</button>:
          <button className='bg-orange-400 font-primary text-white font-semibold sm:ml-4 text-xs sm:text-sm p-1 sm:p-2 rounded-lg '  onClick={undoFilterTopRated}>Top Rated Restaurants</button>
        }
       </div>
    
      </div>

      <div className='flex flex-col items-center'>
     
      <div  className='w-full'>
      <Carousel offers={listOffers}/>
      </div>
      <hr className="border-t border-gray-300 my-4" />

        <h2 className='font-primary font-extrabold  text-xl sm:text-2xl  text-black-heading self-start'>Restaurants near you </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8  mt-4 lg:mt-8  w-full'>
        {
          filteredList.length==0 && <div className='text-center font-primary font-bold text-xl'>Restaurants not available !</div>
        }
      {
       filteredList.map((restaurant)=>(
       <Link className='' key={restaurant.info.id }  to={"/restaurant/"+ restaurant.info.id}>  
        {
          restaurant?.info?.avgRating>4.2?<RestaurantCardTopRated resData={restaurant} />:<RestaurantCard    resData={restaurant}/>
        }
       </Link> 
       )
       )
      }
      </div>
      </div>
   </div>))
    
    
  
}
