import React, { useState, useEffect } from "react";
import "./MosaiqueRipey.css";
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
    "Qué es el RIPEY",
    "Diplomas",
    "Lista de profesores por paises",
    "RIPEY",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const items_mobile = [
    "RIPEY",
    "Qué es el RIPEY",
    "Diplomas",
    "Lista de profesores por paises",
  ];

  const sectionIds = ["1", "2", "3", "", "", "", "", "", "", ""];

  const specialSections = ["1", "2", "3"];

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
            color={"#20283D"}
            sectionIds={sectionIds}
          />
        </div>
      )}

      {!isMobile && (
        <div className="menu-ripey">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                className={`menu-item-ripey ${item ? "with-text-ripey" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                key={index}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-ripey">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MosaiqueRipey;
