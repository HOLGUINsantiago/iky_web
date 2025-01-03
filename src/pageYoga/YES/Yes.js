import React, { useState } from "react";
import "./Yes.css";
import YogaDetails from "./Yoga.js";
import SpanishDetails from "./Espagnol.js";
import SalsaDetails from "./Salsa.js";

const Yes = () => {
  const [hovered, setHovered] = useState(null); // Garde trace de la lettre survolée
  const [selected, setSelected] = useState(null); // Garde trace de la lettre sélectionnée (pour garder l'état jusqu'au clic sur la croix)

  // Fonction pour calculer la translation en fonction de la lettre sélectionnée
  const getContainerStyle = () => {
    if (selected === "Y") {
      return { transform: "translateX(-650px)" }; // Déplace vers la gauche pour Y
    } else if (selected === "E") {
      return { transform: "translateX(-650px)" }; // Déplace vers la gauche pour E
    } else if (selected === "S") {
      return { transform: "translateX(-650px)" }; // Déplace vers la gauche pour S
    } else {
      return { transform: "translateX(0)" }; // Position par défaut (centrée)
    }
  };

  // Fonction pour réinitialiser à l'état "YES"
  const resetToYes = () => {
    setHovered(null); // Réinitialise le survol pour masquer les petites lettres
    setSelected(null); // Réinitialise la sélection pour revenir à l'état initial
  };

  // Lorsqu'une lettre est survolée, elle est sélectionnée
  const handleMouseEnter = (letter) => {
    setHovered(letter); // Survol temporaire
    setSelected(letter); // Sélection pour garder l'état
  };

  return (
    <div className="container-wrapper">
      <div className="yes-container" style={getContainerStyle()}>
        <div
          className="letter-container"
          onMouseEnter={() => handleMouseEnter("Y")}
        >
          <div className="letter-y">Y</div>
          <span className={`wave wave-1 ${hovered === "Y" ? "visible" : ""}`}>
            o
          </span>
          <span className={`wave wave-2 ${hovered === "Y" ? "visible" : ""}`}>
            g
          </span>
          <span className={`wave wave-3 ${hovered === "Y" ? "visible" : ""}`}>
            a
          </span>
        </div>

        <div
          className="letter-container"
          onMouseEnter={() => handleMouseEnter("E")}
        >
          <div className="letter-e">E</div>
          <span
            className={`wave wave-spagnol wave-1 ${hovered === "E" ? "visible" : ""}`}
          >
            s
          </span>
          <span
            className={`wave wave-spagnol wave-2 ${hovered === "E" ? "visible" : ""}`}
          >
            p
          </span>
          <span
            className={`wave wave-spagnol wave-3 ${hovered === "E" ? "visible" : ""}`}
          >
            a
          </span>
          <span
            className={`wave wave-spagnol wave-4 ${hovered === "E" ? "visible" : ""}`}
          >
            ñ
          </span>
          <span
            className={`wave wave-spagnol wave-5 ${hovered === "E" ? "visible" : ""}`}
          >
            o
          </span>
          <span
            className={`wave wave-spagnol wave-6 ${hovered === "E" ? "visible" : ""}`}
          >
            l
          </span>
        </div>

        <div
          className="letter-container"
          onMouseEnter={() => handleMouseEnter("S")}
        >
          <div className="letter-s">S</div>
          <span
            className={`wave wave-alsa wave-1 ${hovered === "S" ? "visible" : ""}`}
          >
            a
          </span>
          <span
            className={`wave wave-alsa wave-2 ${hovered === "S" ? "visible" : ""}`}
          >
            l
          </span>
          <span
            className={`wave wave-alsa wave-3 ${hovered === "S" ? "visible" : ""}`}
          >
            s
          </span>
          <span
            className={`wave wave-alsa wave-4 ${hovered === "S" ? "visible" : ""}`}
          >
            a
          </span>
        </div>
      </div>

      {/* Affichage des détails du cours uniquement quand une lettre est sélectionnée */}
      <div className="details-container">
        {selected === "Y" && <YogaDetails />}
        {selected === "E" && <SpanishDetails />}
        {selected === "S" && <SalsaDetails />}
      </div>

      {/* Bouton de fermeture */}
      {selected && (
        <div className="close-btn visible" onClick={resetToYes}>
          &#x2716; {/* Croix de fermeture */}
        </div>
      )}
    </div>
  );
};

export default Yes;
