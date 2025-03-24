import React from "react";
import "./headre.css";
import { LuSearch } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <LuSearch className="icon" />
        </div>
        <div className="header-right">
          <FaBell className="icon" />
          <FaEnvelope className="icon" />
          <IoPersonCircleOutline className="icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
