import React from 'react'
import { CDN_URL, RES_CDN_URL } from '../utils/constants';
import RatingSvg from './RatingSvg';
export const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        aggregatedDiscountInfoV3,
        costForTwo,
        sla,
        areaName,
      } = resData.info;
  return (
    <div className=" hover:scale-95 origin-center transition-all duration-100 ease-in" >
      <div className='overlay-container'>
      <img src={RES_CDN_URL + cloudinaryImageId}  alt='restaurant' className='w-full  overflow-hidden   rounded-2xl block  shadow-lg  bg-center bg-no-repeat' />
      <div className='overlay w-full rounded-md p-2 px-3 '>
          <p className='text-xl font-bold flex gap-2 flex-wrap'>
            {aggregatedDiscountInfoV3?.header
              ? aggregatedDiscountInfoV3.header
              : ''}{' '}
            {aggregatedDiscountInfoV3?.subHeader
              ? aggregatedDiscountInfoV3.subHeader
              : ''}
          </p>
        </div>
      </div>
      <h2 className='mx-2 my-1 font-bold  text-lg sm:text-xl font-primary text-black-rgba'>{name.length>25?name.slice(0,25)+"..":name}</h2>
      <h2 className='mx-2 my-1 font-bold  text-sm sm:text-lg sm:leading-3 font-primary text-black-rgba'>
     <span className='mb-1'><RatingSvg /></span>
     <span className="inline-block ml-1">{" "+avgRating}</span>
     <span> · </span>
     <span>{sla?.slaString}</span>
      </h2>
      <h5 className='ml-4 font-primary text-gray-500 text-xs sm:leading-5 sm:text-[18px]'>{cuisines?.join(", ").length>25?cuisines?.join(", ").slice(0,26)+'...':cuisines?.join(", ")}</h5>
      <h6 className='ml-4 font-primary text-gray-500 text-xs sm:leading-5  sm:text-[18px]'>{areaName}</h6>
     
    </div>
  )
}
// higher order components which takes in a component and returns an enhanced component
export const withTopRatedLabel=(RestaurantCard)=>{
  return (props)=>{
    return (<div className='relative'>
      <label className='text-white bg-black absolute z-10 p-2 ml-4 -top-2 rounded-md text-xs sm:text-sm '>Top Rated</label>
      <RestaurantCard {...props}/>
    </div>)
  }
}