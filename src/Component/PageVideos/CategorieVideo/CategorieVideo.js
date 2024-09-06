import React from "react";
import "./CategorieVideo.css";
import image from "../../../assets/images/IMG_0648.jpeg";

const sportsCategories = [
  { name: "Football", imageUrl: image },
  { name: "Basketball", imageUrl: "../../../assets/images/IMG_0648.jpeg" },
  { name: "Tennis", imageUrl: "../../../assets/images/IMG_0648.jpeg" },
  { name: "Cycling", imageUrl: "../../../assets/images/IMG_0648.jpeg" },
  { name: "Swimming", imageUrl: "../../../assets/images/IMG_0648.jpeg" },
];

function SportsCategories() {
  return (
    <div className="sports-categories">
      {sportsCategories.map((sport, index) => (
        <div
          key={index}
          className="category-frame"
          style={{ backgroundImage: `url(${sport.imageUrl})` }}
        >
          <div className="category-overlay">
            <span className="category-name">{sport.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SportsCategories;
