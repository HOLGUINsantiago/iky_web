import React from "react";
import "./MosaiqueCRKan.css";

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
    "Diplomas",
    "Formacion en yoga",
    "Camino maya",
    "Formacion en Feldenkrais",
    "Biografia",
    "C.R.Kan",
    "",
    "",
    "",
  ];

  const sectionIds = [1, 2, 3, 4, 5];

  const specialSections = [1, 2, 3, 4, 5];

  return (
    <div className="menu-acerca">
      {items.map((item, index) => {
        const sectionId = sectionIds[index];
        const isSpecial = sectionId && specialSections.includes(sectionId);

        return (
          <div
            className={`menu-item-acerca ${item ? "with-text" : ""} ${
              isSpecial ? "special-effect" : ""
            }`}
            style={{ transform: `rotate(-45deg)` }}
            key={index}
            onClick={() => sectionId && handleClick(sectionId)}
          >
            <div className="menu-item-inner-acerca">{item}</div>
          </div>
        );
      })}
    </div>
  );
}

export default MosaiqueRipey;
