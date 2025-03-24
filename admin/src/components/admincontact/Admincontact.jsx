import React from "react";
import "./admincontact.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import ContactRead from "./ContactRead";

const Admincontact = () => {
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

export default Admincontact;
