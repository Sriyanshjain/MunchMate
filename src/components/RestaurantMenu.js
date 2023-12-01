import { CDN_URL } from '../utils/constants';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{


const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);



  if(!resInfo)
  return <Shimmer/>
const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating}=resInfo?.cards[0]?.card?.card?.info;
const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    

  return(
        <div>
            <h4>{name}</h4>
            <img src={CDN_URL + cloudinaryImageId} ></img>
            <h5>{cuisines.join(",")}</h5>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}</p>
            <br/>
            <h3>Menu</h3>
            <div>
                <ul>
                {
                 itemCards.map((item)=>{
                    return (<li>{item.card.info.name}</li>)
                 })
                }
                </ul>
                
            </div>
        </div>
    )
}

export default RestaurantMenu;