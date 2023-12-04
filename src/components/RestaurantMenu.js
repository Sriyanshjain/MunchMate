import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;
  const {
    name,
    cuisines,
    sla,
    areaName,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
      c?.card?.card?.["@type"].endsWith("v2.ItemCategory")
    );
    console.log(categories)

  return (
    <div className="flex justify-center my-8">
      <div className="w-6/12">
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl font-primary font-bold text-black-heading">
              {name}
            </h2>
            <p className="text-sm font-primary text-gray-400 ">
              {cuisines.join(" ,")}
            </p>
            <p className="text-xs text-gray-400">
              {areaName}, {sla.lastMileTravelString}
            </p>
          </div>
          <div>
            {
              //rating square
            }
          </div>
        </div>
        <div className="mt-4">
          {
            categories.map((item)=><RestaurantMenuCategory key={item?.card?.card?.title} data={item}/>)
          }
        </div>
      </div>

      
    </div>
  );
};

export default RestaurantMenu;
