import React from "react";
import "./dashboardlayout.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import WorkSpace from "../workspace/WorkSpace";


const DashboardLayout = () => {
  return (
    <>
      <div className="layout-container">
        <Sidebar />
        <Header />
        <WorkSpace />
      </div>
    </>
  );
};

export default DashboardLayout;
