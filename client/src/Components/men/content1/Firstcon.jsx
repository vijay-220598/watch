import React from "react";
import "./firstcon.css";
import titan from "../../../assets/Brands_Titan.jpg";
import fastrack from "../../../assets/FT.jpg";
import sonata from "../../../assets/Sonata.jpg";
import tommy from "../../../assets/TH.jpg";
import kc from "../../../assets/KC.jpg";
import police from "../../../assets/Police.jpg";
import ak from "../../../assets/AK.jpg";
import raga from "../../../assets/Raga.jpg";

const Firstcon = () => {
  return (
    <>
      <div className="brands-container">
        <div className="brands-head">
          <h1>SHOP BY BRANDS</h1>
        </div>
        <div className="brands-grid">
          <div className="brands-content">
            <img src={titan} alt="titan" loading="lazy" />
          </div>
          <div className="brands-content">
            <img src={fastrack} alt="fastrack" />
          </div>
          <div className="brands-content">
            <img src={sonata} alt="sonata" />
          </div>
          <div className="brands-content">
            <img src={tommy} alt="tommy" />
          </div>
          <div className="brands-content">
            <img src={kc} alt="kc" />
          </div>
          <div className="brands-content">
            <img src={police} alt="police" />
          </div>
          <div className="brands-content">
            <img src={ak} alt="ak" />
          </div>
          <div className="brands-content">
            <img src={raga} alt="raga" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstcon;
