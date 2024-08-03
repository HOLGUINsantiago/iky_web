import React from "react";
import "./MosaiqueCosmo.css";

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
    "Description",
    "Kankueb",
    "Carrusel imagenes",
    "Lista de Eventos",
    "",
    "",
    "Kankueb",
  ];

  const sectionIds = ["description", "kankueb", "carusel", "lista", "", "", ""];

  const specialSections = ["description", "kankueb", "carusel", "lista"];

  return (
    <div className="menu-cosmo">
      {items.map((item, index) => {
        const sectionId = sectionIds[index];
        const isSpecial = sectionId && specialSections.includes(sectionId);

        return (
          <div
            className={`menu-item-cosmo ${item ? "with-text" : ""} ${
              isSpecial ? "special-effect" : ""
            }`}
            style={{ transform: `rotate(-45deg)` }}
            key={index}
            onClick={() => sectionId && handleClick(sectionId)}
          >
            <div className="menu-item-inner-cosmo">{item}</div>
          </div>
        );
      })}
    </div>
  );
}

export default MosaiqueRipey;
