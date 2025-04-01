import React from "react";
import "./session3.css";
import buyer from "../../../assets/buyer-rating.svg";
import love from "../../../assets/love-my-watch.svg";
import handshake from "../../../assets/handshake.svg";
import dealer from "../../../assets/dealer.svg";
import { motion } from "motion/react";

const Session3 = () => {
  return (
    <>
      <div className="about-last">
        <div className="last-head">
          <h1>The Leading Marketplace for Luxury Watches Since 1996</h1>
        </div>
        <div className="last-main">
          <motion.div
            className="last-content"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={buyer} alt="" />
            <h2>4.8 out of 5 stars</h2>
            <p>from 173,000 reviews worldwide </p>
          </motion.div>
          <motion.div
            className="last-content"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <img src={love} alt="" />
            <h2>9 million</h2>
            <p>watch enthusiasts use product 24 each month</p>
          </motion.div>
          <motion.div
            className="last-content"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <img src={handshake} alt="" />
            <h2>Over 200,000</h2>
            <p>customers choose Buyer Protection annually</p>
          </motion.div>
          <motion.div
            className="last-content"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <img src={dealer} alt="" />
            <h2>More than 25,000</h2>
            <p>trustworthy sellers</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Session3;
