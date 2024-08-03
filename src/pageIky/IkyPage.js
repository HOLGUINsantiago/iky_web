import React, { useState, useEffect, useRef } from "react";
import "./IkyPage.css";
import Nav from "../pageHome/Nav.js";
import MosaiqueIky from "./MosaiqueIky.js";
import Alojamiento from "./Section iky/Alojamiento.js";
import Calendario from "./Section iky/Calendario.js";
import Descubre from "./Section iky/Descubre.js";
import NuestroCentro from "./Section iky/NuestroCentro.js";
import Profesores from "./Section iky/ProfesoresPresencial.js";
import Salones from "./Section iky/Salones.js";
import Habitaciones from "./Section iky/Habitaciones.js";

function IkyPages() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsButtonVisible(scrollTop > 500); // Affiche le bouton après 500px de défilement
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifiez l'état du bouton au chargement de la page

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container-iky">
      <div className="menu-iky">
        <Nav />
      </div>
      <div className="content-iky">
        <div className="content-mosaique-iky">
          <MosaiqueIky />
        </div>
        <div>
          <Alojamiento />
          <Calendario />
          <Descubre />
          <NuestroCentro />
          <Profesores />
          <Salones />
          <Habitaciones />
        </div>
        {isButtonVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default IkyPages;
