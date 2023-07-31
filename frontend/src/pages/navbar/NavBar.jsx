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
        <Link to={"/explore"} className="links">
          Explore
        </Link>
        <Link to={"/product"} className="links">
          Places
        </Link>
        <Link to={"/contact"} className="links">
          Contact Us
        </Link>
        <Link to={"/itenary"} className="links">
          Itenary
        </Link>
      </div>
      <Link to={"/login"} className="login">
        <img src={profilePic} alt="profile photo" />
        <p>Login</p>
      </Link>
    </nav>
  );
};

export default NavBar;
