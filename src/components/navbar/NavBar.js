import React, {useContext} from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { CartContext } from './../../shared/context/cart-context';

export default function NavBar() {
  const [cartItems, setCartItems] = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="navbar-img">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart <span>{cartItems.length}</span></li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
