import React from "react";
import "./homeStyles/Home.scss";
import { Link } from "react-router-dom";
import Row from "./Row";
import LandPage from "./LandPage";
import Review from "./Review";
import NavBar from "../navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <LandPage />
        <div className="guidePage">
          <div className="heading">
            <p>Guides for your next vacation</p>
            <p>
              Checkout this week's selection of popular products that might
              catch your
            </p>
          </div>
          <div className="filter">
            <Link to={"/"} className="filterText">
              All
            </Link>
            <Link to={"/"} className="filterText">
              Trending
            </Link>
            <Link to={"/"} className="filterText">
              Popular
            </Link>
            <Link to={"/"} className="filterText">
              Feature
            </Link>
            <Link to={"/"} className="filterText">
              Recommended
            </Link>
            <Link to={"/"} className="filterText">
              Tour Packages
            </Link>
          </div>
          <div className="rowSection">
            <Row />
            <Row />
            <Row />
          </div>
        </div>
        <Review />
      </div>
    </>
  );
};

export default Home;
