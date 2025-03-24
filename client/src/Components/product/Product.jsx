import React from "react";
import "./Product.css";
import men from "../../assets/men2.jpg";
import women from "../../assets/women1.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="product-title">
        <h1>~ View Our Product ~</h1>
      </div>
      <div className="product-grid">
        <motion.div
          initial={{ opacity: 0.5, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="product-right">
            <div className="product-right-content">
              <h1>New</h1>
              <h2>Pure Luxury Watches</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                enim doloremque nobis unde voluptatem facilis? Magni inventore
                cumque quae quibusdam.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="product-left">
          <div className="product1">
            <div className="product-card">
              <img src={men} alt="men-watch" />
            </div>
            <div className="product-content">
              <button
                className="content-btns"
                onClick={() => {
                  navigate("/men");
                }}
              >
                View Mens Collections
              </button>
            </div>
          </div>
          <div className="product2">
            <div className="product-card">
              <img src={women} alt="women-watch" />
            </div>
            <div className="product-content">
              <button
                className="content-btns"
                onClick={() => {
                  navigate("/women");
                }}
              >
                View Womens Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
