import React, { useEffect, useState } from "react";

import { resList } from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Carousel from "./Carousel";

import RestaurantList from "./RestaurantList";
import useRestaurant from "../utils/useRestaurant";
import ShimmerResCard from "./ShimmerResCard";

export const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showTopRated, setShowToprated] = useState(false);
  const onlineStatus = useOnlineStatus();
  const {listOffers,listOfRes,isLoading}=useRestaurant()
  //if no dependency array=>useEffect called after each render
  //if empty dependency array ([])=>useEffect called after first render(just once)
  //if something inside dependency array=>useEffect called only when dependency changes

 useEffect(()=>{
  setFilteredList(listOfRes)
 },[isLoading])

  const filterTopRated = () => {
    const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.2);
    setShowToprated((prev) => !prev);
    setFilteredList(filteredList);
  };
  const undoFilterTopRated = () => {
    setShowToprated((prev) => !prev);
    setFilteredList(listOfRes);
  };
  if (!onlineStatus)
    return (
      <h1 className="text-bold text-xl text-center">
        Looks like you are offline ! Please check your internet
      </h1>
    );
  //whenever we change a state variable , the whole component is re rendered by React
  return  (
    <div className="mt-2 mx-auto w-[75%] ">
      {/* Search bar and Top Rated */}
      <div className="flex justify-evenly gap-2 m-6  ">
        <input
          type="text"
          className="focus:outline-none w-6/12 border-2 border-solid p-2 rounded-md"
          placeholder="Search by restaurant name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className=" w-1/12 bg-orange-400  text-white p-1 sm:p-2  rounded-md"
          onClick={(e) => {
            e.preventDefault();
            let list = listOfRes.filter((res) => {
              const name = res.info.name.toLowerCase();
              if (name.includes(searchText.toLowerCase())) return res;
            });
            setFilteredList(list);
          }}
        >
          <MagnifyingGlassIcon className="w-3 h-3 text-center sm:w-5 sm:h-5 font-semibold" />
        </button>
        <div className="w-5/12">
          {!showTopRated ? (
            <button
              className=" bg-white  text-black-heading border font-primary font-semibold border-gray-400 sm:ml-4 text-xs sm:text-sm p-1 sm:p-2 rounded-lg "
              onClick={filterTopRated}
            >
              Top Rated Restaurants
            </button>
          ) : (
            <button
              className="bg-orange-400 font-primary text-white font-semibold sm:ml-4 text-xs sm:text-sm p-1 sm:p-2 rounded-lg "
              onClick={undoFilterTopRated}
            >
              Top Rated Restaurants
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Banner list */}
        <div className="w-full">
          <Carousel offers={listOffers} isLoading={isLoading} />
        </div>
        <hr className="border-t border-gray-300 my-4" />
        {/* Restaurant list */}
        <h2 className="font-primary font-extrabold  text-xl sm:text-2xl  text-black-heading self-start">
          Restaurants near you{" "}
        </h2>
        <RestaurantList filteredList={filteredList} isLoading={isLoading} />
      </div>
    </div>
  );
};
