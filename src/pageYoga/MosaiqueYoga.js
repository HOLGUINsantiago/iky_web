import React from "react";
import "./MosaiqueYoga.css";

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
    "Systema Iky",
    "Clases Regulares",
    "Cursos",
    "Retiros",
    "Profesorado",
    "Instructorado",
    "Profondizacion",
    "YOGA",
    "",
    "",
    "",
  ];

  const sectionIds = [
    "systema",
    "clases",
    "cursos",
    "retiros",
    "profesorado",
    "instructorado",
    "profondizacion",
    "",
    "",
    "",
  ];

  const specialSections = [
    "systema",
    "clases",
    "cursos",
    "retiros",
    "profesorado",
    "instructorado",
    "profondizacion",
  ];

  return (
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
  );
}

export default MosaiqueYoga;
