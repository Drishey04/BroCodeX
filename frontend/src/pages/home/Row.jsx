import React, { useEffect, useRef } from "react";
import GuideCard from "./GuideCard";

const Row = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const wrapper = wrapperRef.current;

    wrapper.addEventListener("mouseover", () => {
      wrapper.style.overflowX = "auto";
    });

    wrapper.addEventListener("mouseleave", () => {
      wrapper.style.overflowX = "hidden";
    });

    return () => {
      wrapper.removeEventListener("mouseover", () => {});
      wrapper.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="row">
      <h3>Title</h3>
      <div className="cardList" ref={wrapperRef}>
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
        <GuideCard />
      </div>
    </div>
  );
};

export default Row;
