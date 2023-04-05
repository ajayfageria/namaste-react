import React from "react";
import ReactDOM from "react-dom/client";

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
  const { resName, cuisine } = props;
  return (
    <div className="res-card">
      <img
        alt="res-card"
        width="200px"
        height="150px"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/aqsnrylokzpn45qhg1pb"
      />
      <h4> {resName}</h4>
      <h5> {cuisine}</h5>
      <h5> 4.6 Star</h5>
      <h5> 38 minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="North Indian, Asian, Biryani"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, South Indian" />
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
