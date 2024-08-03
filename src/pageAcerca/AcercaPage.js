import React, { useState, useEffect } from "react";
import Nav from "../pageHome/Nav"; // Assurez-vous que le chemin est correct
import "./AcercaPage.css";
import AcercaMosaique from "./MosaiqueAcerca.js";
import Biografia from "./Section Acerca/Biografia.js";
import Diploma from "./Section Acerca/Diploma.js";
import RecorridoMaya from "./Section Acerca/RecorridoMaya.js";
import RecorridoYoga from "./Section Acerca/RecorridoYoga.js";

function AcercaPage() {
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
    <div className="acerca-container">
      <div className="menu-acerca">
        <Nav />
      </div>
      <div className="content-acerca">
        <div className="content-mosaique">
          <AcercaMosaique />
        </div>
        <div>
          <Biografia />
          <Diploma />
          <RecorridoMaya />
          <RecorridoYoga />
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

export default AcercaPage;
