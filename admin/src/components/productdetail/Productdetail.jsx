import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Detailread from "./Detailread";

const Productdetail = () => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <Header />
        <div className="work-container">
          <Detailread />
        </div>
      </div>
    </>
  );
};

export default Productdetail;
