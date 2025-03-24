import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaBoxArchive } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
// import Header from "../header/Header";
// import WorkSpace from "../workspace/WorkSpace";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
        <div className="d-flex justify-content-center"></div>
        <ul className="sidebar-list">
          <li className="list-item">
            <Link to="/admin">
              <BsGrid1X2Fill className="icon" />
              {isOpen && "Dashboard"}
            </Link>
          </li>

          <li className="list-item">
            <Link to="/admin/admincontact">
              <HiDocumentReport className="icon" />
              {isOpen && "Reports"}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/admin/productdetail">
              <FaBoxArchive className="icon" />
              {isOpen && "Product Details"}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/admin/updateproduct">
              <FaListCheck className="icon" />
              {isOpen && "Product Update"}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/">
              <FaSignOutAlt className="icon" />
              {isOpen && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
