import React, { useState, useEffect } from "react";
import "./MosaiqueKankueb.css";
import MenuMobile from "../Component/menuPetit/MobileMenu"; // Importer le menu mobile

function Mosaique() {
  const handleClick = (sectionId) => {
    console.log(`Scrolling to section: ${sectionId}`);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  const items = [
    "Kankueb",
    "Mystic Dance",
    "Cosmovisión y Calendario Maya",
    "",
    "",
    "",
    "",
  ];

  const items_mobile = [
    "Kankueb",
    "Mystic Dance",
    "Cosmovisión y Calendario Maya",
  ];

  const sectionIds = ["1", "2", "3", "", "", "", "", ""];

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
            color={"rgb(53 19 19)"}
            sectionIds={sectionIds}
          />
        </div>
      )}

      {!isMobile && (
        <div className="menu-even">
          {items.map((item, index) => {
            const sectionId = sectionIds[index];
            const isSpecial = sectionId && specialSections.includes(sectionId);

            return (
              <div
                className={`menu-item-even ${item ? "with-text" : ""} ${
                  isSpecial ? "special-effect" : ""
                }`}
                style={{ transform: `rotate(-45deg)` }}
                key={index}
                onClick={() => sectionId && handleClick(sectionId)}
              >
                <div className="menu-item-inner-even">{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Mosaique;
