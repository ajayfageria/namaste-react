import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

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
  const isOnline = useOnline();
  if (!isOnline) {
    return <h3>you are offline</h3>;
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div  className="p-5 bg-pink-50 my-2"  >
        <button onClick={filteredList} className="bg-red-500 hover:bg-violet-600"> Top Reated Restaurants</button>
        <input
          type="text"
          value={search}
         
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button  onClick={searchList} className="p-2 m-2 bg-purple-900 text-white rounded-md"> Search</button>

      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <>
            {" "}
            <h1>No Restaurant Found !!</h1>
          </>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard key={restaurant.data.id} resData={restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Body;
