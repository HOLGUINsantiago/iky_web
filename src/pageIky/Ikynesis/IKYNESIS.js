import React from "react";
import { Link } from "react-router-dom"; // Import de React Router Link
import "./IKYNESIS.css";

function IKYNESIS() {
  return (
    <div className="ikynesis-container">
      <p className="ikynesis-text">
        IKYnesis es una metodología de biomecánica desarrollada{" "}
        <Link to="/about">
          <strong className="link">C. R. Kan</strong>
        </Link>{" "}
        para la rehabilitación y fortalecimiento osteomuscular, así como el
        empoderamiento y crecimiento personal, que estimula y entrena el sistema
        nervioso desde las secuencias propuestas en el Método Feldenkrais® de
        Autoconciencia a Través del Movimiento, adicionadas con las diversas
        formas de visualización y cultivo de sensaciones y patrones mentales del
        Sistema IKY.
      </p>
      <p className="ikynesis-text">
        IKYnesis estimula cambios en las redes neuronales centrales y
        periféricas, que mejoran exponencialmente el desempeño físico, así como
        el manejo de la mente y las emociones.
      </p>
      <p className="ikynesis-text">
        Su práctica ayuda a superar problemas osteomusculares tales como
        dolores, lesiones, inflamaciones y rigidez, además de facilitar la
        movilidad y agilidad física, y el desarrollo de la fuerza. Favorece
        además la salud y el bienestar físico y mental, en aras de la
        eficiencia, el auto control, el equilibrio de la mente y del proceso
        emocional, y lo más importante, favorece la autodeterminación, el
        dominio de sí mismo, la autoridad interna, la auto imagen y el
        empoderamiento personal.
      </p>
    </div>
  );
}

export default IKYNESIS;
