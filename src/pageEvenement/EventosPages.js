import React, { useState, useEffect, useRef } from "react";
import "./EventosPages.css";
import Nav from "../pageHome/Nav.js";
import MosaiqueEvenement from "./Mos.js";
import Description from "./Contenu Section/Description.js";
import Calendarios from "./Contenu Section/Calendarios.js";
import Ultimos from "./Contenu Section/Ultimos.js";
import Yes from "./Contenu Section/Yes.js";

function EventosPages() {
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
    <div className="eventos-container">
      <div className="menu-eventos">
        <Nav />
      </div>
      <div className="content-eventos">
        <div className="content-mosaique-eventos">
          <MosaiqueEvenement />
        </div>
        <div>
          <Description />
          <Calendarios />
          <Ultimos />
          <Yes />
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

export default EventosPages;
