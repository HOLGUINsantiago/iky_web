import React, { useState, useEffect } from "react";
import "./Clases.css";

import aire from "../../assets/images/elements/25.png";
import tierra from "../../assets/images/elements/24.png";
import agua from "../../assets/images/elements/26.png";
import fuego from "../../assets/images/elements/27.png";

function Clases() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Détecter la position de défilement
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Ajouter l'écouteur de défilement au montage du composant
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour déterminer si l'élément est visible
  const isVisible = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  // Utilisation de useEffect pour ajouter les classes "visible" en fonction du défilement
  useEffect(() => {
    const sections = document.querySelectorAll(".clases-section");
    sections.forEach((section) => {
      if (isVisible(section)) {
        section.classList.add("visible");
      }
    });
  }, [scrollPosition]);

  return (
    <div className="clases-container">
      <h2 className="clases-title">Para Qué Sirve el Sistema IKY</h2>

      <div className={`clases-section left`}>
        <h3>A Nivel Físico (Tierra)</h3>
        <ul>
          <li>Salud y bienestar osteomuscular.</li>
          <li>Manejo del estrés físico, relajación corporal y de tensiones.</li>
          <li>Aumento de la propiocepción y la interocepción.</li>
          <li>Incremento de la flexibilidad, agilidad y fuerza física.</li>
          <li>Mejora el movimiento.</li>
          <li>Equilibrio del sistema.</li>
          <li>Fortalecimiento del sistema inmunológico.</li>
          <li>Fortalecimiento del cuerpo para la prevención de lesiones.</li>
          <li>
            Recuperación o mejoría de lesiones y de dolores crónicos o
            persistentes.
          </li>
          <li>Incremento de la vitalidad y rejuvenecimiento.</li>
          <li>Mejora la función y capacidad respiratoria.</li>
        </ul>
      </div>

      <div className={`clases-section right`}>
        <h3>A Nivel Mental (Aire)</h3>
        <ul>
          <li>Crecimiento personal.</li>
          <li>Desarrollo de cualidades y capacidades.</li>
          <li>
            Incremento de la confianza, seguridad en sí mismo, la autoridad
            interna y la autoimagen.
          </li>
          <li>Manejo del estrés mental.</li>
          <li>Concentración y enfoque mental.</li>
          <li>Claridad mental, lógica interna.</li>
          <li>Desarrollo cognitivo.</li>
          <li>
            Desarrollo de un sistema de valores y hábitos saludables sólidos.
          </li>
          <li>Desapego y equilibrio mental.</li>
          <li>Prevención de algunos trastornos de la personalidad.</li>
        </ul>
      </div>

      <div className={`clases-section left`}>
        <h3>A Nivel Emocional y Relacional (Agua)</h3>
        <ul>
          <li>Autodominio emocional.</li>
          <li>Autorregulación.</li>
          <li>
            Armonía interior, con los demás, con el entorno y el ecosistema.
          </li>
          <li>Manejo del estrés emocional.</li>
          <li>Apoyo para el tratamiento de algunos trastornos.</li>
        </ul>
      </div>

      <div className={`clases-section right`}>
        <h3>A Nivel Espiritual (Fuego)</h3>
        <ul>
          <li>Profundiza la experiencia de ser y la conexión espiritual.</li>
          <li>Aumenta el disfrute de la vida y del propio ser.</li>
          <li>Aumenta la alegría, la dicha y la felicidad.</li>
          <li>
            Activa, estimula y regula las funciones del sistema nervioso en
            general.
          </li>
          <li>Estimula, regula e incrementa el desempeño sexual.</li>
        </ul>
      </div>

      <div className={`clases-section left`}>
        <h3>A Nivel Trascendente (Éter)</h3>
        <ul>
          <li>Tomas posesión de tu proceso mental.</li>
          <li>Alcanzas estados de liberación de tu ser.</li>
          <li>
            Desarrollas la capacidad de revertir tu mente en diversas
            dimensiones de conciencia.
          </li>
          <li>
            Puedes llegar a alcanzar estados de meditación, e incluso samadhi.
          </li>
          <li>Cambias profundamente la forma de percibirte.</li>
        </ul>
      </div>

      <div
        className={`clases-images ${scrollPosition > 1100 ? "visible" : ""}`}
      >
        <img src={aire} alt="Image 1" className="clases-image" />
        <img src={fuego} alt="Image 2" className="clases-image" />
        <img src={tierra} alt="Image 3" className="clases-image" />
        <img src={agua} alt="Image 3" className="clases-image" />
      </div>
    </div>
  );
}

export default Clases;
