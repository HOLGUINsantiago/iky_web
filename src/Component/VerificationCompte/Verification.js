import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const [status, setStatus] = useState("Vérification en cours...");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const email = query.get("email");

    // ici envoyer requete backend pour vérifier le token
    axios
      .get(`http://localhost:3000/verify-email?token=${token}&email=${email}`)
      .then((response) => {
        setStatus(
          "Email vérifié avec succès ! Vous pouvez maintenant vous connecter."
        );
        // Redirection login
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        setStatus(
          "La vérification a échoué. Le lien est peut-être expiré ou invalide."
        );
      });
  }, [location, navigate]);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default VerifyEmail;
