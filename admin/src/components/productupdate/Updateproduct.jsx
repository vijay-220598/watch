import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Updateread from "./Updateread";

const Updateproduct = () => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <Header />
        <div className="work-container">
          <Updateread />
        </div>
      </div>
    </>
  );
};

export default Updateproduct;
