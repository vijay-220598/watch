import React from "react";
import "./about.css";
import { motion } from "motion/react";
import user from "../../assets/watch5.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <div className="about-box">
            <div className="about-box1"></div>
            <div className="about-box2">
              <motion.div
                initial={{ opacity: 0.5, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={user} alt="watch" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="about-Right">
          <h6></h6>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h5>OUR STORY</h5>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2>Inspirational Watch of This Year</h2>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              <span>VORTAX </span> Edge is an ultra-thin, stylish, and
              lightweight wristwatch, designed for those who prefer elegance
              with comfort. Whether it's a formal business meeting or a casual
              outing, this watch blends seamlessly with any outfit.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              Each timepiece fratured in this collection embodies the pinnacle
              of horological artistry, blending cutting-edge design with
              unparalleld functionally
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>
              <a href="/about">Read More . . .</a>
            </h3>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
