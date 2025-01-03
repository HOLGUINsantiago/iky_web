import React, { useState } from "react";
import "./ExplicationKankueb.css"; // Assurez-vous d'avoir une feuille de style adéquate

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const KankuebPractices = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container-Kankueb">
      <div className="card-Kankueb">
        {/* VUKUB (7) KANKUEB */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("vukubKankueb")}
          >
            <h3>VUKUB (7) KANKUEB</h3>
            {activeSection === "vukubKankueb" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "vukubKankueb" && (
            <p className="kankueb-text">
              Los siete patrones básicos de movimiento de la columna vertebral,
              fundamentales para todas las demás prácticas. Ayudan a fortalecer
              y relajar la columna y la espalda, a mejorar el movimiento y la
              flexibilidad de todo el cuerpo, así como a profundizar la
              consciencia y aumentar la capacidad perceptiva.
              {/* Ajoutez un lien vers le vidéo ici */}
            </p>
          )}
        </div>

        {/* AJ KANKUEB */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("ajKankueb")}
          >
            <h3>AJ KANKUEB</h3>
            {activeSection === "ajKankueb" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "ajKankueb" && (
            <p className="kankueb-text">
              Secuencias de posturas y gestos corporales basados principalmente
              en la naturaleza y acompañados de visualizaciones y sensaciones
              basadas en los simbolismos cosmológicos de la ancestralidad maya
              (oxomá), para el desarrollo y fortalecimiento del cuerpo físico,
              la vitalidad y de la mente.
              {/* Ajoutez un lien vers le vidéo ici */}
            </p>
          )}
        </div>

        {/* KANKUEB DANCE */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("kankuebDance")}
          >
            <h3>KANKUEB DANCE</h3>
            {activeSection === "kankuebDance" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "kankuebDance" && (
            <p className="kankueb-text">
              Danza ritual meditativa que involucra los patrones de movimiento
              del Vukub Kankueb, la disociación de movimientos corporales y las
              visualizaciones y sensaciones basadas en los simbolismos
              cosmológicos de la ancestralidad maya (oxomá), propiciando estados
              de trascendencia cercanos al misticismo.
              {/* Ajoutez un lien vers le vidéo ici */}
            </p>
          )}
        </div>

        {/* TDM (Movement Isolation Techniques) */}
        <div className="kankueb-section">
          <div className="kankueb-header" onClick={() => toggleSection("tdm")}>
            <h3>TDM (Movement Isolation Techniques)</h3>
            {activeSection === "tdm" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "tdm" && (
            <p className="kankueb-text">
              Prácticas de movimientos muy precisos de diferentes secciones del
              cuerpo de manera segmentada, para aumentar la propiocepción, la
              interocepción, la autoimagen, y por ende, lograr un mejor manejo
              del cuerpo, de la estética del movimiento y de la conexión
              mente-cuerpo.
            </p>
          )}
        </div>

        {/* IKYNESIS */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("ikynesis")}
          >
            <h3>IKYNESIS</h3>
            {activeSection === "ikynesis" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "ikynesis" && (
            <p className="kankueb-text">
              Metodología de intervención en el sistema nervioso a través del
              movimiento corporal, desarrollada por C.R. Kan, a partir de los
              fundamentos y técnicas del Método Feldenkrais®, que hace énfasis
              en la aplicación de numerosas formas de visualización, cultivo de
              sensaciones y sentimientos durante la ejecución del movimiento
              corporal.
            </p>
          )}
        </div>

        {/* MAY JAXIC */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("mayJaxic")}
          >
            <h3>MAY JAXIC</h3>
            {activeSection === "mayJaxic" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "mayJaxic" && (
            <p className="kankueb-text">
              Prácticas de meditación basadas en los simbolismos cosmológicos de
              la ancestralidad maya (oxomá), que tienen como objetivo
              desarrollar cualidades y dimensiones mentales. Estas técnicas
              propician una mayor claridad mental, creatividad y autodominio.
              {/* Ajoutez un lien vers le blog ici */}
            </p>
          )}
        </div>

        {/* Oxomá */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("oxoma")}
          >
            <h3>Oxomá</h3>
            {activeSection === "oxoma" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "oxoma" && (
            <p className="kankueb-text">
              Técnicas simples y complejas de visualización de imágenes y
              sensaciones internas que cultivan la expansión del proceso mental
              a través del control del cuerpo.
              {/* Ajoutez un lien vers le blog ici */}
            </p>
          )}
        </div>

        {/* Tuj */}
        <div className="kankueb-section">
          <div className="kankueb-header" onClick={() => toggleSection("tuj")}>
            <h3>Tuj</h3>
            {activeSection === "tuj" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "tuj" && (
            <p className="kankueb-text">
              Casa ritual de vapor en la que a partir de un ambiente de calor y
              oscuridad se estimula la activación del sistema nervioso simpático
              de una manera controlada, propiciando la auto regulación en aras
              del autoconocimiento, el empoderamiento y la conexión de
              dimensiones espaciales, tanto internas como del entorno cercano y
              del cosmos.
            </p>
          )}
        </div>

        {/* Kotzij */}
        <div className="kankueb-section">
          <div
            className="kankueb-header"
            onClick={() => toggleSection("kotzij")}
          >
            <h3>Kotzij</h3>
            {activeSection === "kotzij" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "kotzij" && (
            <p className="kankueb-text">
              Ceremonia tradicional maya de reconexión con la importancia del
              fuego y el ritual en nuestro origen humano, en la que además se
              practica la dicha que genera la gratitud a través del pagamento, y
              se recupera la importancia de la tradición oral para la
              transmisión de conocimientos, principios y valores, basados en el
              calendario maya.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KankuebPractices;
