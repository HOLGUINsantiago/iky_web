import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./DiplomaGallery.css";

const DiplomaGallery = ({ cardsData }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
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

  if (selectedCard) {
    return (
      <div className="full-screen-card">
        <button className="close-button" onClick={() => setSelectedCard(null)}>
          X
        </button>
        <img src={selectedCard.backgroundImage} alt={selectedCard.hoverText} />
      </div>
    );
  }

  return (
    <div className="card-container-diplomas">
      <p className="text-diplome">
        Chakra Raja Kan es el director académico y gerente de Ishka Center, el
        cual fundó en 2004. Es el creador del Sistema IKY, los entrenamientos
        internacionales de yoga, el RIPEY, así como de IKYnesis y
        del Kankueb Dance.
      </p>
      {isSmallScreen ? (
        <ul className="simple-list">
          {[cardsData[cardsData.length - 1], ...cardsData.slice(0, cardsData.length - 1)].map((card) => (
            <li key={card.id} onClick={() => setSelectedCard(card)}>
              {card.description}
            </li>
          ))}
        </ul>
      ) : (
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
      )}
    </div>
  );
};

export default DiplomaGallery;