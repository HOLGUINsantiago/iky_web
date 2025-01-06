import React from "react";
import "./MosaiqueIshka.css";

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
    "Nuestro Centro",
    "Espacios",
    "Nuestro profesores",
    "Calendario",
    "Eco-Living",
    "",
    "Ishka Center",
  ];

  const sectionIds = [1, 2, 3, 4, 5, "", ""];

  const specialSections = [1, 2, 3, 4, 5];

  return (
    <div className="menu-ishka">
      {items.map((item, index) => {
        const sectionId = sectionIds[index];
        const isSpecial = sectionId && specialSections.includes(sectionId);

        return (
          <div
            className={`menu-item-ishka ${item ? "with-text" : ""} ${isSpecial ? "special-effect" : ""
              }`}
            style={{ transform: `rotate(-45deg)` }}
            key={index}
            onClick={() => sectionId && handleClick(sectionId)}
          >
            <div className="menu-item-inner-ishka">{item}</div>
          </div>
        );
      })}
    </div>
  );
}

export default MosaiqueRipey;
