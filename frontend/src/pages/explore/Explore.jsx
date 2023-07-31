import React from "react";
import NavBar from "../navbar/NavBar";
import SearchBar from "./ExploreSearchBar";
import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import "./explore.scss";

const Explore = () => {
  return (
    <>
      <NavBar />
      <div className="explorePage">
        <SearchBar />

        <div className="filter">
          <Link to={"/"} className="filterText">
            Visited Places
          </Link>
          <Link to={"/"} className="filterText">
            Want to Visit
          </Link>
        </div>

        <div className="cardSection">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </>
  );
};

export default Explore;

// .filter{
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   margin: 50px 0;

//   .filterText{
//       text-decoration: none;
//       padding: 10px 25px;
//       border: 1px solid rgba(24, 20, 20, 0.281);
//       border-radius: 20px;
//       font-weight: 400;
//       color: rgba(0, 0, 0, 0.679);

//       &:hover{
//           background-color:rgb(78, 150, 212);
//           color: white;
//           font-weight: 500;
//       }
//   }
// }
