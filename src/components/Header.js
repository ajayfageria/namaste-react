import { useState } from "react";
import { APP_LOGO } from "../../utils/constant";

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
  <div className="header-container">
    <div className="app-logo">
      <img alt="app-logo" width="100px" height="100px" src={APP_LOGO} />
    </div>
    <div className="menu-items">
      <ul>
        <li>Home</li>
        <li>Order</li>
        <li>About Us</li>
        <li>Contact Us</li>
       
      </ul>
     
    </div>
    {!loggedIn ? <button onClick={()=>{setLoggedIn(true)}}>Login</button> :
      <button onClick={()=>{setLoggedIn(false)}}>Logout</button>}
  </div>
  )
};
export default Header;
