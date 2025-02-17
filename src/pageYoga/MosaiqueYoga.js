import React, { useState, useEffect } from "react";
import "./MosaiqueYoga.css";
import MenuMobile from "../Component/menuPetit/MobileMenu"; // Importer le menu mobile

function MosaiqueYoga() {
  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  const items = [
    "Systema IKY",
    "",
    "Cursos, retiros y talleres",
    "Profesorado e intructorado",
    "Profondizaciones y especializaciones",
    "",
    "",
    "YOGA",
    "",
    "",
    "",
  ];

  const items_mobile = [
    "YOGA",
    "Systema IKY",
    "Cursos, retiros y talleres",
    "Profesorado e intructorado",
    "Profondizaciones y especializaciones",
  ];

  const sectionIds = ["1", "2", "3", "4", "5", "", "", "", "", ""];

  const specialSections = ["1", "2", "3", "4", "5"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 1000) {
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
            color={"#475840"}
            sectionIds={sectionIds}
          />
        </div>
      )}

      {!isMobile && (
        <div className="menu-yoga">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                className={`menu-item-yoga ${item ? "with-text" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                key={index}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-yoga">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MosaiqueYoga;
