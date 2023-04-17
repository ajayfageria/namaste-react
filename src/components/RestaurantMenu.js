import { useParams } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { menuList } from "../../utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;
  const restMenu = useRestaurant(id);
  const dispatch = useDispatch();
  const addListItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };
  return !restMenu ? (
    <Shimmer />
  ) : (
    <div className="p-12 bg-red-500 w-[300px]">
      <h1 className="font-bold">Restaurant Id - {id}</h1>
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
      <ul>
        {" "}
        {menuList.map((item) => (
          <li>
            {item.name}{" "}
            <button className="p-2 m-2 bg-green-300" onClick={()=>addListItem(item)}>
              {" "}
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
