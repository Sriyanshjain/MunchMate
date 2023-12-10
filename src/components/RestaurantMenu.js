import { CDN_URL } from "../utils/constants";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId} = useParams();
  const {resInfo,isLoading,error} = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
  if (!resInfo) return <ShimmerRestaurant />;
  const {
    name,
    cuisines,
    sla,
    areaName,
    totalRatingsString,
    cloudinaryImageId,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card?.["@type"].endsWith("v2.ItemCategory")
    );
    console.log(resInfo?.cards[0]?.card?.card?.info)
    console.log(categories)

  return (
    <div className="flex justify-center my-8">
      <div className=" w-11/12   sm:w-9/12 md:w-6/12">
        <div className="flex justify-between">
        <div className="flex flex-col ">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-primary font-bold text-black-heading">
              {name}
            </h2>
            <p className="text-[12px] md:text-sm font-primary text-gray-400 ">
              {cuisines.join(" ,")}
            </p>
            <p className="text-[12px] md:text-sm text-gray-400">
              {areaName}, {sla.lastMileTravelString}
            </p>
          </div>
        </div>
        <div className="flex flex-col border border-gray px-2 py-1 rounded-md mr-3">
          <p className="text-center"><span className='sm:inline-block '><StarIcon className='w-4 text-sm h-4  md:w-6 md:h-6 inline-block text-green-500 mb-1' />{' '}</span><span className='lg:pl-[8] text-sm md:text-lg  font-bold text-green-500'>{avgRating}</span></p>
          <hr className="px-2 mt-1"></hr>
          <p className="text-xs md:text-sm text-gray-500 p-1">{totalRatingsString}</p>
        </div>
        </div>
        <div className="mt-4">
          {
            categories.map((item,index)=><RestaurantMenuCategory key={item?.card?.card?.title} data={item} setShowIndex={()=>setShowIndex(index)} isExpanded={index==showIndex?true:false}/>)
          }
        </div>
      </div>

      
    </div>
  );
};

export default RestaurantMenu;
