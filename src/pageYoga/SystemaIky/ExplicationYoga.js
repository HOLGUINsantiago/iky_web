import React, { useState } from "react";
import "./ExplicationYoga.css";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const GlowingHoverCard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container-Yoga">
      <div className="card-Yoga">
        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("yogaClasico")}
          >
            <h3>Yoga Clásico</h3>
            {activeSection === "yogaClasico" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "yogaClasico" && (
            <p className="sistema-iky-text">
              Sistema filosófico que describe las prácticas para alcanzar el
              estado de meditación, compilado por el hindú Patánjali hace
              aproximadamente 2000 años, en su obra “Yogasutra”, base principal
              del yoga actual.
            </p>
          )}
        </div>

        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("yogaModerno")}
          >
            <h3>Yoga Moderno</h3>
            {activeSection === "yogaModerno" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "yogaModerno" && (
            <p className="sistema-iky-text">
              Conjunto de disciplinas, principalmente físicas, que propenden por
              la salud y el bienestar del cuerpo y de la mente, desarrolladas
              hace 500 años aproximadamente en la India.
            </p>
          )}
        </div>

        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("tantraKundalini")}
          >
            <h3>Tantra Kundalini</h3>
            {activeSection === "tantraKundalini" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "tantraKundalini" && (
            <p className="sistema-iky-text">
              Sistematización desarrollada por Swami Satyananda Saraswati de
              India a mediados del siglo XX, con base en los conocimientos y
              técnicas del tantra (camino de expansión de la consciencia).
            </p>
          )}
        </div>

        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("kankueb")}
          >
            <h3>Kankueb</h3>
            {activeSection === "kankueb" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeSection === "kankueb" && (
            <p className="sistema-iky-text">
              Basado en la reinterpretación de la cosmovisión maya realizada por
              C.R.Kan, es un sistema práctico para la transformación de las
              condiciones humanas derivadas de su naturaleza animal, en
              cualidades y estados particulares de ser que se ven reflejados en
              el desarrollo de su autoridad interna, resultando en su
              empoderamiento.
            </p>
          )}
        </div>

        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("feldenkrais")}
          >
            <h3>Método Feldenkrais®</h3>
            {activeSection === "feldenkrais" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "feldenkrais" && (
            <p className="sistema-iky-text">
              Sistema pedagógico que promueve el bienestar, la eficiencia
              corporal y mental, desde la observación y reaprendizaje de la
              actividad neuromuscular, a partir de ejercicios de movimiento
              corporal que mejoran la coordinación, la flexibilidad y la
              agilidad, logrando mayor facilidad y rango de movimiento.
            </p>
          )}
        </div>

        <div className="sistema-iky-section">
          <div
            className="sistema-iky-header"
            onClick={() => toggleSection("biopsicologia")}
          >
            <h3>Biopsicología</h3>
            {activeSection === "biopsicologia" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeSection === "biopsicologia" && (
            <p className="sistema-iky-text">
              Estudio científico de la biología de la conducta, enfocada hacia
              la comprensión de la función mental desde sus fundamentos
              biológicos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlowingHoverCard;
