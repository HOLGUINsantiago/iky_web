// ModalIshka.js
import React from "react";
import "./ModalIshka.css"; // Assurez-vous d'ajouter les styles pour le modal

const ModalIshka = ({ isOpen, onClose, professor }) => {
  if (!isOpen) return null;

  // Gère les clics sur l'overlay pour fermer la modal
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay-nuestroProfesores")) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay-nuestroProfesores"
      onClick={handleOverlayClick}
    >
      <div className="modal-content-nuestroProfesores">
        <button className="modal-close-nuestroProfesores" onClick={onClose}>
          &times;
        </button>
        <img
          src={professor.photo}
          alt={`Photo de ${professor.name}`}
          className="modal-photo-nuestroProfesores"
        />
        <h2 className="modal-name-nuestroProfesores">{professor.name}</h2>
        <p className="modal-profession-nuestroProfesores">
          {professor.profession}
        </p>
        <p className="modal-bio-nuestroProfesores">{professor.bio}</p>
      </div>
    </div>
  );
};

export default ModalIshka;
