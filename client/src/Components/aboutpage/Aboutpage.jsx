import React from "react";
import "./aboutpage.css";
import Nav from "../navbar/Nav";
import Abouthead from "./abouthead/Abouthead";
import Session1 from "./session1/Session1";
import Session2 from "./session2/Session2";
import Session3 from "./session3/Session3";
import Footer from "../footer/Footer";

const Aboutpage = () => {
  return (
    <>
      <Nav />
      <Abouthead />
      <Session1 />
      <Session2 />
      <Session3 />
      <Footer />
    </>
  );
};

export default Aboutpage;
