import React from "react";
import Firstcon from "./content1/Firstcon";
import Banner from "./menbanner/Banner";
import { banner } from "./menbanner/bannerData";
import Brand from "./brand/Brand";
import Mentop from "./mencarousel/Mentop";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";

const Men = () => {
  return (
    <>
      <Nav />
      <Mentop />
      <Banner images={banner} />
      <Firstcon />
      <Brand />
      <Footer />
    </>
  );
};

export default Men;
