import { useEffect,useState } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu=(resId)=>{

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
            const data= await fetch(MENU_URL+resId)
            const usefulData=await data.json();
            setResInfo(usefulData.data);
            
            
        }
     catch(error)
     {
        console.log("an error has occured"+ error);
        setError(error.response);
     }
     finally {
        setIsLoading(false);
      }
      }
   return {resInfo,isLoading,error};
    
}
export default useRestaurantMenu;