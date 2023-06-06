import React, { useState } from 'react';

const Carousel = ({ props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === props.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={handlePrev}>
        Prev
      </button>
      <img className="image" src={props[currentIndex]} alt="Image" />
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;