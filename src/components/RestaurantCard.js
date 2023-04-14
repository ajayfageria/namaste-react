import { CDN_URL } from "../../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card w-56 p-2 m-2 shadow-lg bg-pink-400">
      <img
        alt="res-card"
        width="200px"
        height="150px"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />
      <h4 className="font-bold"> {resData.data.name}</h4>
      <h5> {resData.data.cuisines.join(", ")}</h5>
      <h5> {resData.data.costForTwo / 100} FOR TWO</h5>
      <h5> {resData.data.avgRating} stars</h5>
      <h5> {resData.data.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
