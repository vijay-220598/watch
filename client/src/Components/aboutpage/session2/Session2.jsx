import React from "react";
import "./session2.css";
import aboutwatch from "../../../assets/aboutwatch2.png";

const Session2 = () => {
  return (
    <>
      <div className="section-about">
        <div className="page-container">
          <div className="page-inner-container">
            <div className="page-content">
              <h1>About My Company</h1>
              <p className="content-para">
                Vortax is a globally recognized Indian watch brand known for its
                precision, reliability, and cutting-edge technology. Vortax
                revolutionized the watch industry by introducing the world’s
                first quartz watch in 1969, making accurate timekeeping
                accessible to everyone.
              </p>
            </div>
            <div className="page-img-container">
              <img src={aboutwatch} alt="watch" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session2;
