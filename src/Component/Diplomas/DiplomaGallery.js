import React from "react";
import Slider from "react-slick";
import "./DiplomaGallery.css";

const CardComponent = ({ cardsData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="card-container-diplomas">
      <Slider {...settings}>
        {cardsData.map((card) => (
          <div
            className="card-diplomas"
            key={card.id}
            style={{ width: card.width, height: card.height }}
          >
            <div className="front-content-diplomas">
              <img
                src={card.backgroundImage}
                alt={card.hoverText}
                className="card-image-diplomas"
              />
              <p>{card.hoverText}</p>
            </div>
            <div className="content-diplomas">
              <p className="heading-diplomas">{card.heading}</p>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardComponent;
