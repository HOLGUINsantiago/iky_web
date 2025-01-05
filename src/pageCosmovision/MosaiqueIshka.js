import React, { useState, useEffect } from "react";
import "./MosaiqueIshka.css";
import MenuMobile from "../Component/menuPetit/MobileMenu"; // Importer le menu mobile

function MosaiqueIshka() {
  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  const items = [
    "Nuestro Centro",
    "Espacios",
    "Nuestro profesores",
    "Calendario",
    "Eco-Hotel",
    "",
    "Ishka Center",
  ];

  const items_mobile = [
    "Ishka Center",
    "Nuestro Centro",
    "Espacios",
    "Nuestro profesores",
    "Calendario",
    "Eco-Hotel",
  ];

  const sectionIds = [1, 2, 3, 4, 5, "", ""];

  const specialSections = [1, 2, 3, 4, 5];

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
            color={"rgb(19 18 18)"}
            sectionIds={sectionIds}
          />
        </div>
      )}

      {!isMobile && (
        <div className="menu-ishka">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                key={index}
                className={`menu-item-ishka ${item ? "with-text" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-ishka">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MosaiqueIshka;
