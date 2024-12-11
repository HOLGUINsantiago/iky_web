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
        <h2>ISHKA CENTER</h2>
        <p>
          Fundada en 2003 por Chakra Raja Kan en 2003, ISHKA CENTER está ubicada
          en la planicie andina del valle del río Cauca, específicamente en el
          sector de Pance, al extremo sur de la ciudad de Cali – Colombia.
        </p>
        <p>
          Rodeada de bellos jardines compuestos de abundante vegetación
          tropical, una antigua casona en perfecto estado de conservación
          contiene los salones y los alojamientos para las clases, talleres,
          eventos y retiros que se realizan en ISHKA CENTER.
        </p>
        <p>
          La exuberante naturaleza en ISHKA CENTER permite la llegada,
          alojamiento y avistamiento de gran diversidad de aves que componen uno
          de los sistemas ornitológicos más diversos del planeta.
        </p>
        <p>
          Los jardines están además enriquecidos con sencillas y mágicas
          estructuras líticas que obran como espacios para prácticas rituales.
        </p>
        <p>
          Existen plantaciones frutales y de vegetales, además de un corral de
          gallinas ponedoras. Los huevos, frutas y vegetales se sirven en las
          comidas ofrecidas en el lugar.
        </p>
        <p>
          Hay diversos tipos de alojamiento, la gran mayoría de ellos, muy
          amplios y cómodos. El equipo de trabajo es amable y dispuesto a
          atender cualquier necesidad de nuestros visitantes.
        </p>
        <p>
          Somos el centro de yoga y bienestar con la mayor cantidad de reviews y
          mejor calificación en Google, como lo puedes constatar en nuestro
          perfil: https://maps.app.goo.gl/CKVQnJ5cpr1fGNwo9
        </p>
        <strong>
          Ishka Center facilita un entorno seguro de aprendizaje, agradable,
          tranquilo y exuberante, un lugar único en su género.
        </strong>
      </div>
    </div>
  );
};

export default MapWithDescription;
