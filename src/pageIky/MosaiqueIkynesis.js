import React, { useState, useEffect } from "react";
import "./MosaiqueIkynesis.css";
import MenuMobile from "../Component/menuPetit/MobileMenu"; // Importer le menu mobile

function Mosaique() {
  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  const items = [
    "Método Feldenkrais®",
    "",
    "Cursos, retiros y talleres",
    "Sesiones individuales",
    "IKYnesis",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const items_mobile = [
    "IKYnesis",
    "Método Feldenkrais®",
    "Cursos, retiros y talleres",
    "Sesiones individuales",
  ];

  const sectionIds = ["1", "", "3", "4", "", "", "", "", "", "", ""];

  const specialSections = ["1", "3", "4"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Vérification initiale
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div className="menu-ishka">
          <MenuMobile
            items={items_mobile}
            color={"#463d4b"}
            sectionIds={sectionIds}
          />
        </div>
      )}

      {!isMobile && (
        <div className="menu-iky">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                className={`menu-item-iky ${item ? "with-text" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                key={index}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-iky">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Mosaique;
