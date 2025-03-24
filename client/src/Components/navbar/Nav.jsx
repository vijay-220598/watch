import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import watch from "../../assets/new-logo.png";
// import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`nav-container ${sticky ? "dark-nav" : ""}`}>
        <div className="nav-logo">
          <img src={watch} alt="watch" />
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-list ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className="active"
                onClick={closeMenu}
                smooth="true"
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                smooth="true"
                offset={-260}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                onClick={closeMenu}
                smooth="true"
                offset={-150}
                duration={500}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                onClick={closeMenu}
                smooth="true"
                offset={-150}
                duration={500}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                smooth="true"
                offset={-260}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="nav-log">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
