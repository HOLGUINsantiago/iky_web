import React from "react";
import "./Description.css"; // Incluez des styles pour la description

const Description = ({ activeCard }) => {
  const descriptions = {
    1: "Description pour Icons",
    2: "Description pour Illustrations",
    3: "Description pour Components",
    4: "Description pour Animations",
  };

  return (
    <div className="description">
      <p>{descriptions[activeCard]}</p>
    </div>
  );
};

export default Description;
