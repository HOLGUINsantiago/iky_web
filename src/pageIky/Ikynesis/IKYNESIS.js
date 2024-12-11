import React from "react";
import { Link } from "react-router-dom"; // Import de React Router Link
import "./IKYNESIS.css";

function IKYNESIS() {
  return (
    <div className="ikynesis-container">
      <p className="ikynesis-text">
        IKYnesis es una metodología de intervención en el sistema nervioso a
        través del movimiento corporal, desarrollada por{" "}
        <Link to="/about">
          <strong className="link">C. R. Kan</strong>
        </Link>{" "}
        a partir de los fundamentos y técnicas del Método Feldenkrais®, que
        hace énfasis en la aplicación de numerosas formas de visualización,
        cultivo de sensaciones y sentimientos (IKY Drishtis) durante la
        ejecución del movimiento corporal.
      </p>
      <p className="ikynesis-text">
        El Método Feldenkrais® de Autoconciencia a Través del Movimiento es
        definido como un sistema pedagógico que promueve el bienestar, la
        eficiencia corporal y mental, desde la observación y reaprendizaje de la
        actividad neuromuscular, a partir de ejercicios de movimiento corporal
        que mejoran la coordinación, la flexibilidad y la agilidad, logrando
        mayor facilidad y rango de movimiento.
      </p>
      <p className="ikynesis-text">
        IKYnesis ayuda a sus practicantes desde la generación de estímulos en el
        sistema nervioso a través del movimiento, produciendo cambios en las
        redes neuronales centrales y periféricas que favorecen exponencialmente
        el desempeño físico, así como el manejo de la mente y las emociones. Lo
        anterior conlleva a superar problemas osteo musculares tales como
        dolores, inflamaciones, rigidez, lesiones, además de facilitar la
        movilidad y agilidad física. Tiene un efecto profundo en la generación
        de equilibrio y claridad interior, promoviendo el mejoramiento de la
        auto imagen, la auto determinación, la autoridad interna y el dominio de
        sí mismo.
      </p>
    </div>
  );
}

export default IKYNESIS;
