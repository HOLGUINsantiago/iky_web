// src/components/ImageCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import image1 from "../assets/images/photos carousel/178948B9-4FDB-4B3D-957D-74D532C4877E.jpg";
import image2 from "../assets/images/IMG_0648.jpeg";
import image3 from "../assets/images/backgrounds/IMG_1948.jpeg";
import image4 from "../assets/images/photos carousel/IMG_0648.jpeg";
import image5 from "../assets/images/backgrounds/IMG_4322.jpg";
import image6 from "../assets/images/photos carousel/IMG_1610.jpeg";
import image7 from "../assets/images/photos carousel/IMG_1887.jpeg";
import image8 from "../assets/images/photos carousel/IMG_5006.jpg";
import image9 from "../assets/images/photos carousel/IMG_7266.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
