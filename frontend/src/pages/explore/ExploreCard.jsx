import React, { useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import "./explore.scss";

const ExploreCard = () => {
  const placeImage =
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
  const name = "Los Angeles";
  const price = "2000";
  const rating = "4";
  const [Favourite, setFavourite] = useState(true);
  const setFavouriteHandler = () => {
    setFavourite(!Favourite);
  };

  return (
    <div className="exploreCard">
      <img src={placeImage} />
      <div className="details">
        <h2>{name}</h2>
        <div className="midSection">
          <div className="expense">
            <MdOutlineAttachMoney />
            <p>{price}</p>
          </div>
          <div className="rating">
            <AiFillStar />
            <p>{rating}</p>
          </div>
        </div>
        <div className="lastSection">
          {Favourite ? (
            <BiLike onClick={setFavouriteHandler} className="likeIcon" />
          ) : (
            <AiFillLike onClick={setFavouriteHandler} className="likeIcon" />
          )}

          <BsFillShareFill className="shareIcon" />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
