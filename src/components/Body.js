import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const filteredList = () => {
    const filterRestaurants = allRestaurants.filter((item) => {
      return item.data.avgRating > 4;
    });
    setFilteredRestaurants(filterRestaurants);
  };
  const searchList = () => {
    const filterRestaurants = allRestaurants.filter((item) => {
      return item.data.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRestaurants(filterRestaurants);
  };

  const getRestaurantsData = async () => {
    const list = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4990039&lng=78.33159289999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await list.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurantsData();
  }, []);

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <button onClick={filteredList}> Top Reated Restaurants</button>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchList}> Search</button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? <> <h1>No Restaurant Found !!</h1></> :filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
