import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime } = resData?.data;


  return (
    <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="biryani"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 2}</h4>
      <h4>${costForTwo / 2} for 2</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

export default RestaurantCard;