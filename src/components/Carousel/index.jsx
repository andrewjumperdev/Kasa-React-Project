import React, { useState } from "react";
import "./CarouselStyles.scss";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-angle-right fa-rotate-180"></i>
        </button>

        <img
          className="photo-slider"
          key={currentIndex}
          src={images[currentIndex]}
          alt="Slide"
        />
        <button className="next" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
