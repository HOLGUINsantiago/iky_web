import React from "react";
import "./MobileMenu.css";

function MenuMobileIshka({ items, color, colorLettersq }) {
  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with id "${sectionId}" not found.`);
    }
  };

  return (
    <div className="menu-mobile-ishka" style={{ backgroundColor: color }}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`menu-item-mobile-ishka ${index === 0 ? "ishka-center" : ""}`}
          onClick={() => handleClick(index + 1)} // Exemple d'ID pour scroll
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default MenuMobileIshka;
