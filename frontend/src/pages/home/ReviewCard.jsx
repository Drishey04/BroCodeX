import React from "react";
import { FaStar } from "react-icons/fa";
import profilePic from "../../assets/profilePic.png";
import "./homeStyles/Review.scss";

const ReviewCard = () => {
  const reviewStr =
    "An unforgettable journey filled with breathtaking landscapes. The travel tour exceeded all expectations, leaving us with cherished memories that will last a lifetime.";

  const name = "Prashant";
  const position = "Software Developer";
  const ratingPoint = "4.5";

  return (
    <div className="reviewCard">
      <div className="reviewerData">
        <img src={profilePic} alt="Profile Pic" />
        <div className="reviewerName">
          <p className="name">{name}</p>
          <p className="position">{position}</p>
        </div>
        <div className="rating">
          <FaStar className="starIcon" />
          <p>{ratingPoint}</p>
        </div>
      </div>
      <div className="reviewText">{reviewStr}</div>
    </div>
  );
};

export default ReviewCard;
