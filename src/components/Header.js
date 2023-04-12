import { useState } from "react";
import { APP_LOGO } from "../../utils/constant";
import {Link} from 'react-router-dom';

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
  <div className="header-container">
    <div className="app-logo">
      <img alt="app-logo" width="100px" height="100px" src={APP_LOGO} />
    </div>
    <div className="menu-items">
      <ul>
        <li> <Link to ='/'>Home</Link></li>
        <li> <Link to ='/order'>Order</Link></li>
        <li> <Link to ='/about'>About us</Link></li>
        <li> <Link to ='/contact'>Contact us</Link></li>
       
      </ul>
     
    </div>
    {!loggedIn ? <button onClick={()=>{setLoggedIn(true)}}>Login</button> :
      <button onClick={()=>{setLoggedIn(false)}}>Logout</button>}
  </div>
  )
};
export default Header;
