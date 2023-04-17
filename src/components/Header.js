import { useContext, useState } from "react";
import { APP_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
import {useSelector} from 'react-redux'
import store from "../../utils/store";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user, setUser } = useContext(UserContext);
  const cartItem = useSelector(store=> store.cart.item.length)
  return (
    <div class="flex justify-between bg-pink-50 shadow-lg">
      <div className="app-logo">
        <img src={APP_LOGO} alt="app-logo" className="h-28 p-3" />
      </div>
      {/* <input type='text' value={user.name} onChange={(e)=>{
        setUser({...user, name: e.target.value});
      }}/> */}
      <div className="menu-items">
        <ul className="flex py-10 px-5">
          <li className="px-2">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/order">Order</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/cart">Cart - {cartItem} items</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? "online" : "offline"}
      <h3>{user.name} - {user.email}</h3>
      {!loggedIn ? (
        <button
          onClick={() => {
            setLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};
export default Header;
