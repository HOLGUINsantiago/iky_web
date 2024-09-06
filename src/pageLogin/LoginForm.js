import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState(""); // État pour le message de confirmation
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/videos");
    }
  }, [navigate]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const simulatedToken = "your-simulated-token";

    if (stayLoggedIn) {
      localStorage.setItem("authToken", simulatedToken);
    }

    navigate("/videos");
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // Logique de récupération du mot de passe
    setConfirmationMessage(
      `Se ha enviado un correo electrónico de recuperación de contraseña a la dirección de correo electrónico ${forgotEmail}`
    );
    // Réinitialiser l'email après soumission
    setForgotEmail("");
  };

  return (
    <div className="login-container">
      {!showForgotPassword ? (
        <form
          className="login-form"
          autoComplete="off"
          onSubmit={handleLoginSubmit}
        >
          <h1>Iniciar sesión</h1>
          <p>¡Bienvenido de nuevo! Por favor, inicie sesión para continuar.</p>
          <div className="input-group">
            <input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              id="email"
              value={email}
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
            <input
              type="checkbox"
              id="stayLoggedIn"
              checked={stayLoggedIn}
              onChange={(e) => setStayLoggedIn(e.target.checked)}
            />
            <label htmlFor="stayLoggedIn">Mantenerme conectado</label>
          </div>
          <button className="button-login" type="submit">
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
