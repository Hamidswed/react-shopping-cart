import React from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function NavBar() {
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
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
