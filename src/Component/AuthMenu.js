import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../pageLogin/LoginForm.js";
import SignupForm from "../pageSignup/SignupForm.js"; // Importez votre composant d'inscription
import "./AuthMenu.css";
import profileLogo from "../assets/images/logo/logo_profil.png";
import UserMenu from "./UserMenu.js";

function AuthMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nouvelle variable d'état pour vérifier si l'utilisateur est connecté
  const [user, setUser] = useState(null); // Pour stocker les informations de l'utilisateur connecté

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = sessionStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true); // Utilisateur connecté
      setUser(JSON.parse(userData)); // Récupérer et stocker les données utilisateur
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Si le menu est ouvert, on le ferme et vice-versa
  };
  const showLogin = () => {
    setLoginVisible(true);
    setSignupVisible(false); // Ferme le formulaire d'inscription lorsqu'on ouvre le formulaire de connexion
    setMenuOpen(false); // Ferme le menu lorsqu'on ouvre le formulaire
  };

  const showSignup = () => {
    setSignupVisible(true);
    setLoginVisible(false); // Ferme le formulaire de connexion lorsqu'on ouvre le formulaire d'inscription
    setMenuOpen(false); // Ferme le menu lorsqu'on ouvre le formulaire
  };

  const hideForms = () => {
    setLoginVisible(false);
    setSignupVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Supprimer le token
    sessionStorage.removeItem("user"); // Supprimer les données utilisateur
    setIsAuthenticated(false); // Mettre l'état de connexion à false
    setUser(null); // Réinitialiser les données utilisateur
  };

  return (
    <div className="auth-menu-container">
      <div className="profile-circle-home" onClick={toggleMenu}>
        <img
          src={profileLogo}
          alt="Profile Logo"
          className="profile-logo-home"
        />
      </div>
      {menuOpen && !isAuthenticated && (
        <div className="auth-menu">
          <ul className="auth-list-styled">
            <li>
              <button onClick={showLogin} className="auth-link-styled">
                Login
              </button>
            </li>
            <li>
              <button onClick={showSignup} className="auth-link-styled">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
      {menuOpen && isAuthenticated && (
        <UserMenu
          user={user}
          handleLogout={handleLogout}
          toggleMenu={toggleMenu}
        />
      )}

      {loginVisible && (
        <div className="login-sidebar">
          <button className="button-close-login" onClick={hideForms}>
            ×
          </button>
          <LoginComponent />
        </div>
      )}
      {signupVisible && (
        <div className="signup-sidebar">
          <button className="button-close-signup" onClick={hideForms}>
            ×
          </button>
          <SignupForm />
        </div>
      )}
    </div>
  );
}

export default AuthMenu;
