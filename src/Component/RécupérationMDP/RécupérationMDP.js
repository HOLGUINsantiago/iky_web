import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setStatus("Les mots de passe ne correspondent pas.");
      return;
    }

    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const email = query.get("email");

    axios
      .post("http://localhost:3000/reset-password", {
        token,
        email,
        password,
      })
      .then((response) => {
        setStatus("Mot de passe réinitialisé avec succès !");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        setStatus("La réinitialisation a échoué. Veuillez essayer à nouveau.");
      });
  };

  return (
    <div>
      <h1>Réinitialiser le mot de passe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Réinitialiser le mot de passe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ResetPassword;
