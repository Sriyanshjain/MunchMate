import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";
import { useSelector } from "react-redux";

const useRestaurantMenu=(resId)=>{

    const address=useSelector((store) => store.location.address);
    const[resInfo,setResInfo]=useState(null);
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetchMenu()
    },[]);
    const fetchMenu=async()=>
    {
        try{
            setIsLoading(true);
            const data= await fetch(MENU_URL+'?lat='+`${address.latitude}`+'&lng='+`${address.longitude}`+'&restaurantId='+resId)
            const usefulData=await data.json();
            setResInfo(usefulData.data);
            
            
        }
     catch(error)
     {
       // console.log("an error has occured"+ error);
        setError(error.response);
     }
     finally {
        setIsLoading(false);
      }
      }
   return {resInfo,isLoading,error};
    
}
export default useRestaurantMenu;