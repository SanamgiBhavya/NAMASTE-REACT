import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  return (
    <div className='body'>
      <div className='filter'><button className="filter-btn" onClick={() => {
        const filteredList = listOfRestaurant.filter(
          (res)=>res.data.avgRating>4
        )
        setListOfRestaurant(filteredList)
      }}>Top Rated Restaurant</button></div>
      <div className='res-container'>
        {
          listOfRestaurant.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
        }
      </div>
    </div>
  )
}

export default Body;