import React from "react";
import "./TextWithModal.css";
import exampleImage from "../assets/images/IMG_0648.jpeg"; // Import direct de l'image

const TextWithModal = ({ title, text }) => {
  return (
    <div className="container">
      <div className="title-container">
        {title && <h1 className="title">{title}</h1>}
      </div>
      <div className="content-wrapper">
        <div className="text-container">
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="image-container">
          <img src={exampleImage} alt="Description of image" />
        </div>
      </div>
    </div>
  );
};

export default TextWithModal;
