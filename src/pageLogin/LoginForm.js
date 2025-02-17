import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate
import "./LoginForm.css";

const LoginComponent = () => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate(); // Initialise useNavigate

  const handleCheckboxChange = () => {
    setStayLoggedIn(!stayLoggedIn);
  };

  const handleConnexion = () => {
    const data = { mail, password };
    console.log(stayLoggedIn)
    console.log(data)


    fetch(apiUrl + "/api/estudiantes/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erreur dans la requête");
        const authorizationHeader = response.headers.get("token");
        if (stayLoggedIn)
          localStorage.setItem("authToken", authorizationHeader);
        sessionStorage.setItem("user", response);
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
    const data = { forgotEmail };

    fetch(apiUrl + "/api/estudiantes/password_forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setConfirmationMessage(
          `Se ha enviado un correo electrónico de recuperación de contraseña a la dirección de correo electrónico ${forgotEmail}`,
        );
        setForgotEmail("");
        return response.json();
      })
      .then((data) => {
        console.log("Données reçues:", data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };

  return (
    showLogin && (
      <div className="login-container">
        {/* La croix pour fermer le formulaire */}
        <span
          className="close-btn-login"
          onClick={() => navigate("/")} // Redirection vers la page d'accueil
        >
          &#10005;
        </span>
        {!showForgotPassword ? (
          <div className="login-form" autoComplete="off">
            <h1>Iniciar sesión</h1>
            <p>
              ¡Bienvenido de nuevo! Por favor, inicie sesión para continuar.
            </p>
            <div className="input-group">
              <input
                placeholder="Correo electrónico"
                type="email"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <label htmlFor="email"></label> */}
            </div>
            <div className="input-group">
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <label htmlFor="password"></label> */}
            </div>
            <p className="forgot-password-link">
              <span onClick={() => setShowForgotPassword(true)}>
                ¿Olvidaste tu contraseña?
              </span>
            </p>
            <div className="checkbox-group">
              <input type="checkbox" id="stayLoggedIn" checked={stayLoggedIn} onChange={handleCheckboxChange} />
              <label htmlFor="stayLoggedIn">Mantenerme conectado</label>
            </div>
            <button
              className="button-login"
              onClick={handleConnexion}
            >
              Iniciar sesión
            </button>
            <p className="signup-link">
              ¿No estás registrado? <a href="/signup">Regístrate aquí</a>
            </p>
          </div>
        ) : (
          <div
            className="forgot-password-form"
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
              />
              <label htmlFor="forgotEmail"></label>
            </div>
            <button className="button-login" onClick={handleForgotPasswordSubmit}>
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
          </div>
        )}
      </div>
    )
  );
};

export default LoginComponent;
