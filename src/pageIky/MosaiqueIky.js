import React from "react";
import "./MosaiqueIky.css";

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
    "Nuestro centro",
    "Salones",
    "Profesores Presencial",
    "Calendario",
    "Alojamiento",
    "Habitaciones",
    "Descubre",
    "Iky Center",
    "",
    "",
    "",
  ];

  const sectionIds = [
    "nuestro-centro",
    "salones",
    "profesores",
    "calendario",
    "alojamiento",
    "habitaciones",
    "descubre",
    "",
    "",
    "",
  ];

  const specialSections = [
    "nuestro-centro",
    "salones",
    "profesores",
    "calendarion",
    "alojamiento",
    "habitaciones",
    "descubre",
  ];

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
