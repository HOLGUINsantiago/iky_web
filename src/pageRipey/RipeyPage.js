import React, { useState, useEffect } from "react";
import "./RipeyPage.css";
import Nav from "../pageHome/Nav.js";
import MosaiqueRipey from "./MosaiqueRipey.js";
import Diploma from "./Section ripey/Diploma.js";
import ListaProfesores from "./Section ripey/ListaProfesores.js";
import Paises from "./Section ripey/Paises.js";

function RipeyPages() {
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
    <div className="container-ripey">
      <div className="menu-ripey">
        <Nav />
      </div>
      <div className="content-ripey">
        <div className="content-mosaique-ripey">
          <MosaiqueRipey />
        </div>
        <div>
          <Diploma />
          <ListaProfesores />
          <Paises />
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

export default RipeyPages;
