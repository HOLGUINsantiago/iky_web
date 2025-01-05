import React, { useState, useEffect } from "react";
import "./MosaiqueCRKan.css";
import MenuMobile from "../Component/menuPetit/MobileMenu"; // Importer le menu mobile

function MosaiqueRipey() {
  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  const items = [
    "Diplomas",
    "Formación en yoga",
    "Camino maya",
    "Formación en Método Feldenkrais®",
    "Experiencia",
    "C.R.Kan",
    "",
    "",
    "",
  ];

  const items_mobile = [
    "C.R.Kan",
    "Diplomas",
    "Formación en yoga",
    "Camino maya",
    "Formación en Método Feldenkrais®",
    "Experiencia",
  ];

  const [isMobile, setIsMobile] = useState(false);

  const sectionIds = [1, 2, 3, 4, 5];

  const specialSections = [1, 2, 3, 4, 5];

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
            color={"rgb(26 41 6)"}
            sectionIds={sectionIds}
          />
        </div>
      )}
      {!isMobile && (
        <div className="menu-acerca">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                className={`menu-item-acerca ${item ? "with-text" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                key={index}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-acerca">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MosaiqueRipey;
