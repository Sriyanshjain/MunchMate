import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu=(resId)=>{

    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchMenu()
    },[]);
    const fetchMenu=async()=>
    {
        try{
            const data= await fetch(MENU_URL+resId)
            const usefulData=await data.json();
            setResInfo(usefulData.data);
            
            
        }
     catch(error)
     {
        console.log("an error has occured"+ error);
     }
      }
   return resInfo;
    
}
export default useRestaurantMenu;