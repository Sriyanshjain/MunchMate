import { useEffect ,useState} from "react";
import { useDispatch } from 'react-redux';
import { setAddress } from "../utils/slices/locationSlice";
export const useUserLocation=()=>{
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [locationAllowed,setLocationAllowed]=useState(false);
    //using dispatch to update location in store 
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchLocation = async () => {
            try {
              // Check if geolocation is supported by the browser
              if ('geolocation' in navigator) {
                // Get the current position
                const position = await new Promise((resolve, reject) => {
                  navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                setLocationAllowed(true);
                setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                //storing location in store so can menu api can utilize it
                dispatch(setAddress({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                }));
              } else {
                console.error('Geolocation is not supported by your browser');
              }
            } catch (error) {
             


              console.error('Error getting location:', error.message);
            }
          };
      
          fetchLocation();
    },[]);

    return {locationAllowed,location};
}