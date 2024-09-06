import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../pageLogin/LoginForm.js";
import SignupForm from "../pageSignup/SignupForm.js"; // Importez votre composant d'inscription
import "./AuthMenu.css";
import profileLogo from "../assets/images/logo/logo_profil.png";

function AuthMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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

  return (
    <div className="auth-menu-container">
      <div className="profile-circle" onClick={toggleMenu}>
        <img src={profileLogo} alt="Profile Logo" className="profile-logo" />
      </div>
      {menuOpen && (
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
