import React from "react";
import "./session1.css";
import mainimg from "../../../assets/mainimg.png";

const Session1 = () => {
  return (
    <>
      <div className="page-main">
        <div className="main-content">
          <h2>WHO WE ARE : -</h2>
          <p className="session-para">
            Founded in 1905, Vortax is a indian luxury watch brand known for its
            precision, craftsmanship, and innovation. Over the decades, Vortax
            has set the standard for high-quality timepieces, making it a symbol
            of prestige and success worldwide.
          </p>
          <p className="session-para">
            Vortax is a globally recognized Indian watch brand known for its
            precision, reliability, and cutting-edge technology. Vortax
            revolutionized the watch industry by introducing the world’s first
            quartz watch in 1969, making accurate timekeeping accessible to
            everyone.
          </p>
        </div>
        <div className="main-img">
          <div className="main-box1"></div>
          <div className="main-box2">
            <img src={mainimg} alt="watch" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Session1;
