import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import ContactRead from "../admincontact/ContactRead";

const Productdetail = () => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <Header />
        <div className="work-container">
          <ContactRead />
        </div>
      </div>
    </>
  );
};

export default Productdetail;
