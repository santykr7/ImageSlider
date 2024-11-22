import React, { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].name}
          className="slider-image"
        />
        <div className="image-info">
          <h3>{images[currentIndex].name}</h3>
        </div>
      </div>

      <div className="button">
        <button
          className={`prev-button ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={prevImage}
          disabled={currentIndex === 0}
        >
          <GrFormPrevious />
        </button>
        <button
          className={`next-button ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
