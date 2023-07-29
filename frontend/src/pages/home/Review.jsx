import React from "react";
import "./homeStyles/Review.scss";
import arrowIcon from "../../assets/arroewIcon.png";
import arrowIconFlip from "../../assets/arroewIconFlip.png";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="reviewPage">
      <div className="reviewHeading">
        <img src={arrowIconFlip} className="arrowImage" />
        <p>Satisfied Customers are our Best Ads</p>
        <img src={arrowIcon} className="arrowImage" />
      </div>
      <div className="reviewSection">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Review;
