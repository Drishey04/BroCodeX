import React from "react";
import searchIcon from "../../assets/searchIcon.png";

const LandPage = () => {
  return (
    <div className="landPage">
      <div className="midContent">
        <p className="titleHead">Travel around the world</p>
        <p className="description">
          Trusted by 80 million Travelers,<span>Travel Planner Pro</span> is the
          world's most comprehensive travel,flight and accomodation provider,
          very easy to access on your smartphone & desktop.
        </p>
        <div className="searchBox">
          <form>
            <input placeholder="Enter the place you want to travel...." />
            <button>
              <img src={searchIcon} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
