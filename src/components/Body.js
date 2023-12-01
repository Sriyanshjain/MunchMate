import React, { useEffect, useState } from 'react'
import { RestaurantCard } from './RestaurantCard'
import { resList } from '../utils/mockData'
import useOnlineStatus from '../utils/useOnlineStatus'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
export const Body = () => {

  const [listOfRes,setListOfRes]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [filteredList,setFilteredList]=useState([]);
  const onlineStatus=useOnlineStatus();
  //if no dependency array=>useEffect called after each render
   //if empty dependency array ([])=>useEffect called after first render(just once)
    //if something inside dependency array=>useEffect called only when dependency changes
  useEffect(()=>{
    fetchData();
  },[]);
  console.log("Body re render");
  const fetchData=async ()=>{
   const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const jsonData= await data.json();
 
   const usefulData=jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

 setListOfRes(usefulData);
 setFilteredList(usefulData)
  }
  if(!onlineStatus)
  return <h1>Looks like you are offline ! Please check your internet</h1>
//whenever we change a state variable , the whole component is re rendered by React
  return  (listOfRes.length==0?(<Shimmer/>):(<div className='body'>
      <div className="filter">
        <div className='search-div'>
          <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='search' onClick={()=>{
             let list=listOfRes.filter((res)=>{
              const name=res.info.name.toLowerCase()
              if(name.includes(searchText.toLowerCase()))
              return res;
             }
             )
             setFilteredList(list);
          }}>Search</button>
        </div>
       <button className='filter-btn' onClick={()=>{
         const filteredList=listOfRes.filter(res=>res.info.avgRating>4);
         setFilteredList(filteredList);
       }}>Top Rated Restaurants</button>

      </div>
      <div className='restaurant-list'>
      {
       filteredList.map((restaurant)=>(
       <Link className='link_res'key={restaurant.info.id }  to={"/restaurant/"+ restaurant.info.id}>  <RestaurantCard    resData={restaurant}/></Link> 
       )
       )
      }
      </div>
   </div>))
    
    
  
}
