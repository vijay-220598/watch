import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import app from "../../assets/Group-1.png";
import app1 from "../../assets/Group-2.png";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-flex">
          <div className="footer-content">
            <h2>COLLECTIONS</h2>
            <ul>
              <li>
                <a href="/">Vortax Nebula</a>
              </li>
              <li>
                <a href="/">Fastrack</a>
              </li>
              <li>
                <a href="/">Sonata</a>
              </li>
              <li>
                <a href="/">Raga</a>
              </li>
              <li>
                <a href="/">Stellar</a>
              </li>
              <li>
                <a href="/">Tommy Hilfiger</a>
              </li>
              <li>
                <a href="/">Police Batman</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h2>CUSTOMER SERVICE</h2>
            <ul>
              <li>
                <a href="/">Payment Options</a>
              </li>
              <li>
                <a href="/">Track Order</a>
              </li>
              <li>
                <a href="/">Encircle Program</a>
              </li>
              <li>
                <a href="/">Find Vortax World Stores</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h2>CONTACT US</h2>
            <ul>
              <li>
                <a href="/">1800-266-0123</a>
              </li>
              <li>
                <a href="/">customercare@vortax.co.in</a>
              </li>
              <li>
                <a href="/">Help & Contact</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h2>ABOUT VORTAX</h2>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>Follow Us With</h2>
            <div className="icon">
              <Link to="/facebook.com">
                <FaFacebookF />
              </Link>
              <Link to="/instagram.com">
                <BsInstagram />
              </Link>
              <Link to="/twiiter.com">
                <BsTwitterX />
              </Link>
              <Link to="/youtube.com">
                <TfiYoutube />
              </Link>
            </div>
            <div className="links-app">
              <h2>Download Vortax World App</h2>
              <div className="footer-app">
                <img src={app} alt="app" />
                <img src={app1} alt="app1" />
              </div>
            </div>
            <div className="footer-wtsapp">
              <h3>
                Want Help? <a href="https://wa.me/919600482833?">Click Here</a>
                To Chat With Us On
                <a href="https://wa.me/919600482833?" className="footer-wts">
                  <ImWhatsapp />
                </a>
              </h3>
              <h3> Operating Hours: 10:00AM To 10:00PM Monday To Sunday</h3>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-end">
          <div className="end1">
            <p>© 2025 Vortax Company Limited. All Rights Reserved.</p>
          </div>
          <div className="end2">
            <p>| Terms & Conditions |</p>
          </div>
          <div className="end3">
            <p> Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
