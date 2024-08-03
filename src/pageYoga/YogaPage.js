import React, { useState, useEffect } from "react";
import "./YogaPages.css";
import Nav from "../pageHome/Nav.js";
import MosaiqueYoga from "./MosaiqueYoga.js";
import Clases from "./Section Yoga/Clases.js";
import Instructorado from "./Section Yoga/Instructorado.js";
import Profesorado from "./Section Yoga/Profesorado.js";
import Profondizacion from "./Section Yoga/Profondizacion.js";
import Retiros from "./Section Yoga/Retiros.js";
import Systema from "./Section Yoga/SystemaIky.js";
import Cursos from "./Section Yoga/Curso.js";

function YogaPage() {
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
    <div className="container-yoga">
      <div className="menu-yoga">
        <Nav />
      </div>
      <div className="content-yoga">
        <div className="content-mosaique-yoga">
          <MosaiqueYoga />
        </div>
        <div>
          <Clases />
          <Instructorado />
          <Profesorado />
          <Profondizacion />
          <Retiros />
          <Systema />
          <Cursos />
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

export default YogaPage;
