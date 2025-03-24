import React, { useCallback, useEffect, useState } from "react";
import "./banner.css";

const Banner = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const autoplay = true;

  const slideRight = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);
  //   const slideLeft = () => {
  //     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  //   };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => {
      slideRight();
    }, 3000);

    return () => clearTimeout(timer);
  }, [autoplay, current, slideRight]);
  return (
    <>
      <div className="banner-container">
        <div className="banner-wrapper">
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
                <img className="banner-image" src={image.image} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Banner;
