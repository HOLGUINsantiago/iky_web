import React from "react";
import "./MosaiqueKankueb.css";

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
    "Cosmovision y Calendario Maya",
    "",
    "",
    "",
    "",
  ];

  const sectionIds = ["1", "2", "3", "", "", "", "", ""];

  const specialSections = ["1", "2", "3"];

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
