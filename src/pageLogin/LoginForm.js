import React, { useState } from "react";
import "./LoginForm.css";

const LoginComponent = ({ onLoginSuccess }) => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState(""); // État pour le message de confirmation

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleConnexion = (event) => {
    const data = {
      mail,
      password,
    };

    fetch(apiUrl + "/api/estudiantes/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // Vérifier si la réponse est OK
        if (!response.ok) {
          throw new Error("Erreur dans la requête");
        }

        // Extraire un header spécifique
        const authorizationHeader = response.headers.get("token");
        localStorage.setItem("authToken", authorizationHeader);

        // Convertir la réponse en JSON si nécessaire
        return response.json();
      })
      .then((data) => {
        console.log("Données reçues:", data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // Logique de récupération du mot de passe
    setConfirmationMessage(
      `Se ha enviado un correo electrónico de recuperación de contraseña a la dirección de correo electrónico ${forgotEmail}`,
    );
    // Réinitialiser l'email après soumission
    setForgotEmail("");
  };

  return (
    <div className="login-container">
      {!showForgotPassword ? (
        <form className="login-form" autoComplete="off">
          <h1>Iniciar sesión</h1>
          <p>¡Bienvenido de nuevo! Por favor, inicie sesión para continuar.</p>
          <div className="input-group">
            <input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              id="email"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="email"></label>
          </div>
          <div className="input-group">
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="password"></label>
          </div>
          <p className="forgot-password-link">
            <span onClick={() => setShowForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </span>
          </p>
          <div className="checkbox-group">
            <input type="checkbox" id="stayLoggedIn" />
            <label htmlFor="stayLoggedIn">Mantenerme conectado</label>
          </div>
          <button
            className="button-login"
            type="submit"
            onClick={handleConnexion}
          >
            Iniciar sesión
          </button>
          <p className="signup-link">
            ¿No estás registrado? <a href="/signup">Regístrate aquí</a>
          </p>
        </form>
      ) : (
        <form
          className="forgot-password-form"
          autoComplete="off"
          onSubmit={handleForgotPasswordSubmit}
        >
          <h1>Recuperar contraseña</h1>
          <p>Ingrese su correo electrónico para recuperar su contraseña.</p>
          <div className="input-group">
            <input
              placeholder="Correo electrónico"
              type="email"
              name="forgotEmail"
              id="forgotEmail"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="forgotEmail"></label>
          </div>
          <button className="button-login" type="submit">
            Enviar
          </button>
          <p
            className="back-to-login"
            onClick={() => setShowForgotPassword(false)}
          >
            Volver a Iniciar sesión
          </p>
          {confirmationMessage && (
            <p className="confirmation-message">{confirmationMessage}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginComponent;