import React, { useState } from "react";
import "./ProgrammeCarrousel.css"; // Import du fichier CSS

// Données d'exemple pour les abonnements
const abonnements = [
  {
    id: 1,
    nom: "Abonnement Basique",
    description: "Accès limité aux équipements.",
  },
  {
    id: 2,
    nom: "Abonnement Premium",
    description: "Accès illimité aux équipements + cours.",
  },
  {
    id: 3,
    nom: "Abonnement VIP",
    description: "Accès complet avec entraînement personnel.",
  },
];

const AbonnementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : abonnements.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < abonnements.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} className="carousel-button">
        ◀
      </button>
      <div className="carousel">
        {abonnements.map((abonnement, index) => (
          <div
            key={abonnement.id}
            className="carousel-card"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <h2>{abonnement.nom}</h2>
            <p>{abonnement.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button">
        ▶
      </button>
    </div>
  );
};

export default AbonnementCarousel;
