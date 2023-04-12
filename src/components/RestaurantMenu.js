import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "../../utils/constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;
  const [restMenu, setRestMenu] = useState({});
  const getRestDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4990039&lng=78.33159289999999&restaurantId=${id}&submitAction=ENTER`
    );
     data.json().then(data=>{
        setRestMenu(data?.data?.cards[0]?.card?.card?.info)
    });
  };
  useEffect(() => {
    getRestDetails();
  }, []);

  return !restMenu ? <Shimmer/>: (
    <div>
      <h1>Restaurant Id - {id}</h1>
      <div>
      <img
        alt="res-card"
        width="200px"
        height="150px"
        src={CDN_URL + restMenu.cloudinaryImageId}
      />
      <h4> {restMenu.name}</h4>
      <h5> {restMenu.costForTwoMessage}</h5>
      <h5> {restMenu.avgRatingString} stars</h5>
      <h5> {restMenu.deliveryTime} minutes</h5>
    </div>
    </div>
  );
};
export default RestaurantMenu;
