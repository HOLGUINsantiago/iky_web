import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Inscription = ({ event }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du mail de confirmation
    setConfirmationMessage(
      `Un mail de confirmation vous a été envoyé à ${formData.email}`,
    );
  };

  if (confirmationMessage) {
    return <div>{confirmationMessage}</div>;
  }

  return (
    <div className="inscription-container">
      <h2>Inscription à l'événement: {event.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prénom :</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Confirmer l'inscription</button>
      </form>
    </div>
  );
};

export default Inscription;
