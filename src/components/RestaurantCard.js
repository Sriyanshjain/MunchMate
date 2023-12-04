import React from 'react'
import { CDN_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        areaName,
      } = resData.info;
  return (
    <div className="m-6 hover:scale-95 origin-center transition-all duration-100 ease-in" >
      <img src={CDN_URL + cloudinaryImageId} className='w-[265] rounded-2xl   shadow-lg h-[180] bg-center bg-no-repeat' />
      <h2 className='m-2 font-bold text-[18px] font-primary text-black-rgba'>{name.length>25?name.slice(0,25)+"..":name}</h2>
      
      <h5 className='ml-6 font-primary'>{cuisines?.join(", ").length>30?cuisines?.join(", ").slice(0,31)+'...':cuisines?.join(", ")}</h5>
      <h6 className='ml-6 font-primary'>{areaName}</h6>
      {/* <span >
        <h4
         className='ml-6'
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
       
        <h4>{costForTwo} </h4>
      </span> */}
    </div>
  )
}
// higher order components which takes in a component and returns an enhanced component
export const withTopRatedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (<div className='relative'>
      <label className='text-white bg-black absolute z-10 p-2 ml-4 -top-2 rounded-md text-sm '>Top Rated</label>
      <RestaurantCard {...props}/>
    </div>)
  }
}