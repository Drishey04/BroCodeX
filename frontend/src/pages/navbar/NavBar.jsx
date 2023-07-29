import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/brandLogo.jpg";
import profilePic from "../../assets/profilePic.png";

const NavBar = () => {
  return (
    <nav>
      <div className="branding">
        <img src={brandLogo} alt="Brand Logo" />
        <h1>Travel Planner Pro.</h1>
      </div>
      <div className="navClicks">
        <Link to={"/"} className="links">
          Home
        </Link>
        <Link to={"/"} className="links">
          Guide
        </Link>
        <Link to={"/"} className="links">
          My Favourites
        </Link>
        <Link to={"/"} className="links">
          Contact Us
        </Link>
      </div>
      <Link to={"/"} className="login">
        <img src={profilePic} alt="profile photo" />
        <p>Login</p>
      </Link>
    </nav>
  );
};

export default NavBar;
