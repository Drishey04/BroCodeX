import React from "react";
import NavBar from "../navbar/NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "../../components/ReviewForm";
import "./product.scss";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

const Product = () => {
  const placeImage =
    "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=1024x1024&w=is&k=20&c=ij0wFHNhE5fd3DuLxlP4K4z7jlaJ9JTmqWZz4SYK_-g=";

  const crrRating = 4;
  const numOfReviews = 12;
  const title = "Westminister Bridge";
  const city = "London";
  const address = `Netaji Subhash Marg, Chandni Chowk,
  New Delhi, Delhi 110006, India.`;
  const price = 1249;
  const grpSize = 7;
  const category = "River View";
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <>
      <NavBar />
      <div className="productPage">
        <div className="placeInfo">
          <img src={placeImage} />

          <div className="placeDescription">
            <h2>{title}</h2>
            {/* ////////MID SECTION ///////////*/}
            <div className="midSection">
              <div className="upperMid">
                {/* rating */}
                <div className="ratingInfo">
                  <FaStar className="star" />
                  <span>
                    {crrRating}({numOfReviews})
                  </span>
                </div>
                {/* location */}
                <div className="location">
                  <div className="city">
                    <FiMapPin className="locationIcon" />
                    <p>{city}</p>
                  </div>
                  <div className="address">{address}</div>
                </div>
              </div>
              {/* ///////////////////////////////////////////// */}

              <div className="lowerMid">
                {/* category */}
                <div className="category">
                  <span>{category}</span>
                </div>
                {/* price */}
                <div className="price">
                  <FaDollarSign className="priceIcon" />
                  <span>{price}</span>
                </div>
                {/* grp size */}
                <div className="grpSize">
                  <GrGroup className="grpIcon" />
                  <span>{grpSize}</span>
                </div>
              </div>
            </div>
            <div className="descriptionSection">
              <p className="descHead">Description</p>
              <p className="descText">{description}</p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="reviewSection">
          <h3>Reviews</h3>
          <div className="inputReview">
            <ReviewForm />
          </div>
          <div className="userReviewSection">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
