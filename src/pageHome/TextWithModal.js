import React, { useState, useRef, useEffect } from "react";
import "./TextWithModal.css";
import exampleImage from "../assets/images/IMG_0648.jpeg"; // Import direct de l'image

const TextWithModal = ({ title, text }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current.scrollHeight > textRef.current.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="title-container">
        {title && <h1 className="title">{title}</h1>}
      </div>
      <div className="content-wrapper">
        <div className="text-container" ref={textRef}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
          {isOverflowing && <div className="read-more-overlay"></div>}
        </div>
        <div className="image-container">
          <img src={exampleImage} alt="Description of image" />
        </div>
      </div>
      {isOverflowing && (
        <div className="read-more-button-wrapper">
          <button className="read-more-button" onClick={handleModalOpen}>
            Lire plus
          </button>
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleModalClose}>
              X
            </button>
            {title && <h2 className="text-title">{title}</h2>}
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextWithModal;
