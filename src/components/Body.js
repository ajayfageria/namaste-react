import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockdata";

const Body = () => {
  const [listRest, setListRest] = useState(resList);
  const filteredList = () => {
    const filterRestaurants = listRest.filter((item) => {
      return item.data.avgRating > 4;
    });
    
    setListRest(filterRestaurants);
  };
  return (
    <div>
      <div className="filter">
        <button onClick={filteredList}> Top Reated Restaurants</button>
      </div>
      <div className="res-container">
        {listRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
