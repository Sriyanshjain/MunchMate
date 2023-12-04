import React, { useEffect, useState } from 'react'
import { RestaurantCard ,withTopRatedLabel} from './RestaurantCard'
import { resList } from '../utils/mockData'
import useOnlineStatus from '../utils/useOnlineStatus'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import Carousel from './Carousel'


export const Body = () => {

  const [listOfRes,setListOfRes]=useState([]);
  const [listOffers,setListOffers]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filteredList,setFilteredList]=useState([]);
  const onlineStatus=useOnlineStatus();
  const RestaurantCardTopRated= withTopRatedLabel(RestaurantCard);
  //if no dependency array=>useEffect called after each render
   //if empty dependency array ([])=>useEffect called after first render(just once)
    //if something inside dependency array=>useEffect called only when dependency changes
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async ()=>{
   const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const jsonData= await data.json();
 
   const gridData=jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   const bestOffers=jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
   setListOffers(bestOffers);
 setListOfRes(gridData);
 setFilteredList(gridData)
  }
  if(!onlineStatus)
  return <h1>Looks like you are offline ! Please check your internet</h1>
//whenever we change a state variable , the whole component is re rendered by React
  return  (listOfRes.length==0?(<Shimmer/>):(<div className='mt-2'>
      <div className="flex m-6 ">
        <div className='search-div'>
          <input type="text" className='border-2 border-solid p-2' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='ml-4 bg-orange-400 text-white p-2 rounded-md' onClick={()=>{
             let list=listOfRes.filter((res)=>{
              const name=res.info.name.toLowerCase()
              if(name.includes(searchText.toLowerCase()))
              return res;
             }
             )
             setFilteredList(list);
          }}>Search</button>
        </div>
       <button className='ml-4 bg-orange-400 text-white p-2 rounded-md' onClick={()=>{
         const filteredList=listOfRes.filter(res=>res.info.avgRating>4);
         setFilteredList(filteredList);
       }}>Top Rated Restaurants</button>

      </div>

      <div className='flex flex-col items-center'>
      <h2 className='self-start font-primary font-extrabold text-2xl ml-60 text-black-heading'>Best offers for you</h2>
      <div  className='w-[75%]'>
      <Carousel offers={listOffers}/>
      </div>
      <hr className="border-t border-gray-300 my-4" />

        <h2 className='self-start font-primary font-extrabold text-2xl ml-60 text-black-heading'>Restaurants with online food delivery in Bangalore</h2>
      <div className='flex flex-wrap w-[90%] justify-center'>
      {
       filteredList.map((restaurant)=>(
       <Link className='link_res' key={restaurant.info.id }  to={"/restaurant/"+ restaurant.info.id}>  
        {
          restaurant?.info?.avgRating>4.4?<RestaurantCardTopRated resData={restaurant} />:<RestaurantCard    resData={restaurant}/>
        }
       </Link> 
       )
       )
      }
      </div>
      </div>
   </div>))
    
    
  
}
