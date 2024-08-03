import React, { useState, useEffect } from "react";
import "./CosmovisionPage.css";
import Nav from "../pageHome/Nav.js";
import MosaiqueCosmo from "./MosaiqueCosmo.js";
import Carrusel from "./section cosmovision/Carrusel.js";
import Description from "./section cosmovision/Description.js";
import Kankuebs from "./section cosmovision/Kankuebs.js";
import ListaEventos from "./section cosmovision/ListaEventos.js";

function CosmoPages() {
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
    <div className="cosmo-container">
      <div className="menu-cosmo">
        <Nav />
      </div>
      <div className="content-cosmo">
        <div className="content-mosaique-cosmo">
          <MosaiqueCosmo />
        </div>
        <div>
          <Carrusel />
          <Description />
          <Kankuebs />
          <ListaEventos />
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

export default CosmoPages;
