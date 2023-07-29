import React, { useState, useEffect } from "react";
import temp from "../../assets/temp.jpg";

const GuideCard = () => {
  const [showFullText, setShowFullText] = useState(false);

  const text =
    "Lorem ipsum is typically a corrupted version of De finibus bonorum et  malorum a 1st-century BC tet by the Roman statesman and philosopher Lorem ipsum is typically a corrupted version of De finibus bonorum et  malorum a 1st-century BC tet by the Roman statesman and philosopher Lorem ipsum is typically a corrupted version of De finibus bonorum et  malorum a 1st-century BC tet by the Roman statesman and philosopher.";

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="guideCard">
      <div className="upperPart">
        <img src={temp} />
        <div className="details">
          <p>Place Name,City</p>
          <p>$ Price</p>
        </div>
      </div>
      <p className="placeDescription">
        {showFullText ? <p>{text}</p> : <p>{`${text.slice(0, 100)}...`}</p>}
        <button onClick={toggleReadMore} className="read-more-button">
          {showFullText ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

export default GuideCard;
