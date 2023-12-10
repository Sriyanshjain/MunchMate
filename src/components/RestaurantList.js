import { RestaurantCard ,withTopRatedLabel} from './RestaurantCard'
import ShimmerResCard from './ShimmerResCard';
import { Link } from 'react-router-dom'

const RestaurantList=({isLoading,filteredList})=>{

    const RestaurantCardTopRated= withTopRatedLabel(RestaurantCard);
    return(<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8  mt-4 lg:mt-8  w-full'>
    {isLoading? Array.from({length:15}).map((_,i)=>(<ShimmerResCard key={i}/>)):(filteredList &&
      filteredList.length!==0) ? filteredList.map((restaurant)=>(
        <Link className='' key={restaurant.info.id }  to={"/restaurant/"+ restaurant.info.id}>  
         {
           restaurant?.info?.avgRating>4.2?<RestaurantCardTopRated resData={restaurant} />:<RestaurantCard    resData={restaurant}/>
         }
        </Link> 
        )
        )
    : <div className='text-center font-primary font-bold text-xl'>Restaurants not available !</div>
    }
 
  </div>)
}
export default RestaurantList;