import React from "react";
// import Firstcon from "./content1/Firstcon";
import Banner from "./menbanner/Banner";
import { banner } from "./menbanner/bannerData";
import Brand from "./brand/Brand";
import Mentop from "./mencarousel/Mentop";
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import Productdet from "../productDetail/Productdet";

const Men = () => {
  return (
    <>
      <Nav />
      <Mentop />
      <Banner images={banner} />
      {/* <Firstcon /> */}
      <Brand />
      <Productdet />
      <Footer />
    </>
  );
};

export default Men;
