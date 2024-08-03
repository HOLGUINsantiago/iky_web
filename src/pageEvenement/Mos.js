import React from "react";
import "./Mos.css";

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
    "Description",
    "Calendarios",
    "Eventos",
    "Ultimos Eventos",
    "YES",
    "",
    "",
    "",
  ];

  const sectionIds = [
    "description",
    "calendarios",
    "",
    "ultimos",
    "yes",
    "",
    "",
    "",
  ];

  const specialSections = ["description", "calendarios", "ultimos", "yes"];

  return (
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
  );
}

export default Mosaique;
