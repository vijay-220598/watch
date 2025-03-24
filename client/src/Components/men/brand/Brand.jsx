import React from "react";
import "./brand.css";
import mech from "../../../assets/MECHANICAL.jpg";
import auto from "../../../assets/AUTOMATIC.jpg";
import quartz from "../../../assets/QUARTZ.jpg";
import chrono from "../../../assets/CHRONOGRAPH.jpg";
import smart from "../../../assets/SMART.jpg";

const Brand = () => {
  return (
    <>
      <div className="move-container">
        <div className="move-head">
          <h1>MOVEMENT IN TIME</h1>
        </div>
        <div className="move-grid">
          <div className="move-left">
            <img src={mech} alt="MECHANICAL" />
          </div>
          <div className="move-right">
            <div className="right-img">
              <img src={auto} alt="AUTOMATIC" />
            </div>
            <div className="right-img">
              <img src={quartz} alt="QUARTZ" />
            </div>
            <div className="right-img">
              <img src={smart} alt="SMART" />
            </div>
            <div className="right-img">
              <img src={chrono} alt="CHRONOGRAPH" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
