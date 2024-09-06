import React from "react";
import "./MosaiqueIkynesis.css";

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
    "Yoga del movimiento",
    "Método Feldenkrais",
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

  const sectionIds = ["1", "2", "3", "4", "", "", "", "", "", "", ""];

  const specialSections = ["1", "2", "3", "4"];

  return (
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
  );
}

export default Mosaique;
