import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockdata";
const Body = () => {
  const filterTopResta = () => {
    console.log('filter')
  }
  return (
    <div>
      <div className="filter"><button onClick={filterTopResta}> Top Reated Restaurants</button></div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
