import { APP_LOGO } from "../../utils/constant";
const Header = () => (
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
  </div>
);
export default Header;
