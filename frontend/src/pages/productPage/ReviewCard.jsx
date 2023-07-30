import React from "react";
import reviewIcon from "../../assets/reviewProfileIcon.png";
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  const userRating = 4;
  const userName = "Prashant";
  const reviewDate = "January 14,2023";
  const reviewText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  return (
    <div className="reviewCard">
      <div className="reviewMid">
        <img src={reviewIcon} />
        <div className="name">{userName}</div>
        <div className="date">{reviewDate}</div>
      </div>
      <div className="reviewText">{reviewText}</div>
      <div className="ratingSection">
        <FaStar />
        <p>{userRating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
