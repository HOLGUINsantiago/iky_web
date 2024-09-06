import React from "react";
import "./Espacios.css";

const CardComponent = ({ cardsData }) => {
  return (
    <div className="card-container-espacios">
      {cardsData.map((card, index) => (
        <div className="card-espacios" key={card.id}>
          <div className="front-content-espacios">
            <img
              src={card.imageSrc}
              alt={card.hoverText}
              className="card-image-espacios"
            />
            <p>{card.hoverText}</p>
          </div>
          <div className="content-espacios">
            <p className="heading-espacios">{card.hoverText}</p>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
