import React from "react";
import Nav from "../navbar/Nav";
import Mentop from "../men/mencarousel/Mentop";
import Banner from "../men/menbanner/Banner";
import { banner } from "../men/menbanner/bannerData";
import Firstcon from "../men/content1/Firstcon";
import Brand from "../men/brand/Brand";
import Footer from "../footer/Footer";

const Women = () => {
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

export default Women;
