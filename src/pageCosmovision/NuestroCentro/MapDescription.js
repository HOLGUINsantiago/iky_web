// src/components/MapWithDescription.js
import React from "react";
import Map from "./Map.js"; // Assurez-vous que le chemin vers le composant Map est correct
import "./MapDescription.css";

const MapWithDescription = () => {
  return (
    <div className="map-description-container">
      <div className="map-section">
        <Map />
      </div>
      <div className="description-section">
        <h2>Notre Emplacement</h2>
        <p>
          Bienvenue dans notre centre, situé au cœur d'une magnifique région.
          Vous trouverez ici un environnement paisible et inspirant, entouré de
          paysages naturels à couper le souffle. Notre centre est facilement
          accessible et offre une vue imprenable sur les montagnes
          environnantes.
        </p>
        <p>
          Nous sommes fiers de notre emplacement stratégique, qui permet un
          accès facile aux attractions locales tout en offrant un cadre
          tranquille pour se détendre et se ressourcer.
        </p>
        <p>
          Que vous veniez pour un séjour relaxant ou pour explorer les
          alentours, notre centre est l'endroit idéal pour vous.
        </p>
      </div>
    </div>
  );
};

export default MapWithDescription;
