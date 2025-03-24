import React from "react";
import "./service.css";
import orginal from "../../assets/orginal.svg";
import report from "../../assets/Return.svg";
import shipping from "../../assets/Shipping.svg";
import Footer from "../footer/Footer";

const Service = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-head">
          <h1>~ Our Services ~</h1>
        </div>
        <div className="grid-container">
          <div className="service-card">
            <h2>Free Shiping</h2>
            <p className="service-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              odit qui necessitatibus mollitia, velit assumenda. ipsum dolor sit
              amet consectetur adipisicing elit. Facere, saepe.
            </p>
          </div>
          <div className="service-card">
            <h2>Free Customer Support</h2>
            <p className="service-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              odit qui necessitatibus mollitia, velit assumenda. ipsum dolor sit
              amet consectetur adipisicing elit. Facere, saepe.
            </p>
          </div>
          <div className="service-card">
            <h2>Payment Security</h2>
            <p className="service-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              odit qui necessitatibus mollitia, velit assumenda. ipsum dolor sit
              amet consectetur adipisicing elit. Facere, saepe.
            </p>
          </div>
        </div>
      </div>
      <div className="service2-detail">
        <div className="detail1">
          <div className="main-detail">
            <img src={orginal} alt=" orginal" />
            <h2>100% ORIGINAL</h2>
          </div>
        </div>
        <div className="detail2">
          <div className="main-detail">
            <img src={report} alt="report" />
            <h2>7 DAY RETURN</h2>
          </div>
        </div>
        <div className="detail3">
          <div className="main-detail">
            <img src={shipping} alt="shipping" />
            <h2>FREE SHIPPING</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
