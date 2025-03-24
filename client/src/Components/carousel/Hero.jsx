import React, { useEffect, useState, useCallback } from "react";
import "./Hero.css";
import Nav from "../navbar/Nav";

export const Hero = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const autoplay = true;

  const slideRight = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);
  const slideLeft = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => {
      slideRight();
    }, 5000);

    return () => clearTimeout(timer);
  }, [autoplay, current, slideRight]);

  return (
    <>
      <Nav />
      <div className="carousel">
        <div className="carousel_wrapper">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
              >
                <img className="card_image" src={image.image} alt="logo" />
                <div className="card_overlay">
                  <div className="card_title">
                    <div className="card_main">
                      <h4>{image.heading}</h4>
                      <p>
                        {image.para}
                        <br />
                        {image.subpara}
                      </p>
                      <button className="carousel-btn"> {image.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="carousel_arrow_left" onClick={slideLeft}>
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};
