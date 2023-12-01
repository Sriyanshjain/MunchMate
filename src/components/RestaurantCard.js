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
    <div className="card" >
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines?.join(", ")}</h5>
      <h6>{areaName}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
       
        <h4>{costForTwo} </h4>
      </span>
    </div>
  )
}
