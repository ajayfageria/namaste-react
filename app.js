import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";
const Header = () => (
  <div className="header-container">
    <div className="app-logo">
      <img
        alt="app-logo"
        width="100px"
        height="100px"
        src="https://www.clipartmax.com/png/middle/253-2532253_order-free-home-delivery-logo-png.png"
      />
    </div>
    <div className="menu-items">
      <ul>
        <li>Home</li>
        <li>Order</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
);
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="res-card"
        width="200px"
        height="150px"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
      />
      <h4> {resData.data.name}</h4>
      <h5> {resData.data.cuisines.join(", ")}</h5>
      <h5> {resData.data.costForTwo / 100} FOR TWO</h5>
      <h5> {resData.data.avgRating} stars</h5>
      <h5> {resData.data.deliveryTime} minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div>
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
