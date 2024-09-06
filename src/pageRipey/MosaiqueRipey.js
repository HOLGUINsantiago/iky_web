import React from "react";
import "./MosaiqueRipey.css";

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

  const sectionIds = ["1", "2", "3", "", "", "", "", "", "", ""];

  const specialSections = ["1", "2", "3"];

  return (
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
  );
}

export default MosaiqueRipey;
