// src/components/DiplomaCard.js

import React from "react";
import PropTypes from "prop-types";
import "./Card.css"; // Assurez-vous que le chemin est correct

const DiplomaCard = ({ imageUrl, borderColor }) => {
  const cardStyle = {
    border: `5px solid ${borderColor}`,
  };

  return (
    <div className="diploma-card" style={cardStyle}>
      <img src={imageUrl} alt="Diploma" className="diploma-image" />
    </div>
  );
};

DiplomaCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default DiplomaCard;
