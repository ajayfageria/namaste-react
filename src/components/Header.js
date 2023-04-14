import { useState } from "react";
import  {APP_LOGO}  from "../../utils/constant";
import {Link} from 'react-router-dom';
import useOnline from '../../utils/useOnline';

const Header = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
  <div class='flex justify-between bg-pink-50 shadow-lg'>
    <div className="app-logo">
      <img src={APP_LOGO} alt="app-logo" className="h-28 p-3"  />
    </div>
    <div className="menu-items">
      <ul className='flex py-10 px-5'>
        <li className="px-2"> <Link to ='/'>Home</Link></li>
        <li className="px-2"> <Link to ='/order'>Order</Link></li>
        <li className="px-2"> <Link to ='/about'>About us</Link></li>
        <li className="px-2"> <Link to ='/contact'>Contact us</Link></li>
        <li className="px-2"> <Link to ='/instamart'>Instamart</Link></li>
      </ul>
     
    </div>
    {
      isOnline? 'online' : 'offline'
    }
    {!loggedIn ? <button onClick={()=>{setLoggedIn(true)}}>Login</button> :
      <button onClick={()=>{setLoggedIn(false)}}>Logout</button>}
  </div>
  )
};
export default Header;
