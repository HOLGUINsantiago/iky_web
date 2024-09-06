import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./ResetPasswordModal.css"; // Assurez-vous que ce fichier contient les styles

// Assurez-vous d'appeler cette fonction pour les paramètres d'accessibilité de react-modal
Modal.setAppElement("#root");

const ResetPasswordModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState("");

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/reset-password", { email })
      .then((response) => {
        alert("Instructions sent to your email");
        onRequestClose(); // Fermer la modale après l'envoi
      })
      .catch((error) => {
        alert("Error sending instructions");
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reset Password"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="modal-title">Forgot Your Password?</h2>
      <form
        onSubmit={handleResetPasswordSubmit}
        className="reset-password-form"
      >
        <div className="floating-label">
          <input
            type="email"
            id="resetEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label htmlFor="resetEmail">Email:</label>
        </div>
        <button type="submit">Send Reset Instructions</button>
      </form>
    </Modal>
  );
};

export default ResetPasswordModal;
