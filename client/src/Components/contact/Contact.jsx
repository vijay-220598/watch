import React, { useState } from "react";
import "./contact.css";
import book from "../../assets/book.svg";
import watch from "../../assets/service-watch.svg";
import door from "../../assets/Doorstep.svg";
import Nav from "../navbar/Nav";
import { ImLocation2 } from "react-icons/im";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoIosMailOpen } from "react-icons/io";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { Client } from "../../Client";

const Contact = () => {
  const initialData = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    brand: "",
    model: "",
    message: "",
  };

  const [user, setUser] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting data:", user);

    try {
      const addNewUser = await Client.post("/contact/contactadd", user);
      console.log("Response:", addNewUser);

      if (addNewUser.status === 200) {
        alert("Submitted successfully!");
        setUser(initialData);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Check console for details.");
    }
  };

  return (
    <>
      <Nav />
      <div className="contact-header">{/* <h1>CONTACT US</h1> */}</div>
      <div className="watch-service">
        <div className="watch-service-heading">
          <h2>SIMPLE 3 STEPS TO GET YOUR WATCH SERVICED</h2>
          <span className="heading-line"></span>
        </div>
        <div className="watch-service-content">
          <div className="watch-step">
            <Link to="/contact">
              <img src={book} alt="booked" />
            </Link>
            <h5>Book your watch</h5>
          </div>
          <div className="watch-step">
            <Link to="/contact">
              <img src={watch} alt="watch-service" />
            </Link>
            <h5>Service Your Watch</h5>
          </div>
          <div className="watch-step">
            <Link to="/contact">
              <img src={door} alt="doorstep" />
            </Link>
            <h5>Delivered at your Doorstep </h5>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-address">
            <div className="contact-flex">
              <div className="contact-icon">
                <ImLocation2 className="location" />
                <div className="icon-para">
                  <p>
                    No:16, Vivekanandar Street, Dubai Cross Lane, Dubai Main
                    Road, Dubai.
                  </p>
                </div>
              </div>
              <div className="contact-icon">
                <LiaPhoneVolumeSolid className="phone" />
                <div className="icon-para">
                  <p>+91 1800-266-0123</p>
                </div>
              </div>
              <div className="contact-icon">
                <IoIosMailOpen className="mail" />
                <div className="icon-para">
                  <p>Vortaxcompany@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-lead">
              <h1>Book a service request</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={user.name}
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={user.mobile}
                    name="mobile"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Address"
                    value={user.address}
                    name="address"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Your Mail"
                    value={user.email}
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Brand Name"
                    value={user.brand}
                    name="brand"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Brand Model"
                    value={user.model}
                    name="model"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="message">
                <textarea
                  className="message-box"
                  type="message"
                  value={user.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Watch Issue Description"
                  required
                />
              </div>
              <div className="contact-button">
                <button className="btn" type="submit">
                  BOOK SERVICE REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
