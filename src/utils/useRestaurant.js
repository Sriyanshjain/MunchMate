import { useEffect, useState } from "react";
import { GET_RESTAURANT } from "./constants";
import { useSelector } from "react-redux";
const useRestaurant=()=>{
    
    const address=useSelector((store) => store.location.address);
    const locationAllowed=JSON.parse(localStorage.getItem('address'))?.locationAllowed||null     ;
    const [listOffers, setListOffers] = useState([]);
    const [listOfRes, setListOfRes] = useState([]);
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
     fetchRestaurantList()
    },[locationAllowed])

    const fetchRestaurantList=async()=>{
        try{
            setIsLoading(true);
            const data = await fetch(GET_RESTAURANT +'?lat='+`${address.latitude}`+'&lng='+`${address.longitude}`);
            const jsonData = await data.json();
        
            const gridData =
              jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
            const bestOffers =
              jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
            setListOffers(bestOffers);
            setListOfRes(gridData);
        }
        catch(error)
        {
            //console.log(error.response)
        }
        finally{
            setIsLoading(false)
        }
     
      
    }
    return {listOffers,listOfRes,isLoading}
}
export default useRestaurant;