import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthMenu.css";
import profileLogo from "../assets/images/logo/logo_profil.png"; // Importez votre image ici

function AuthMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              <Link to="/login" className="auth-link-styled">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="auth-link-styled">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AuthMenu;
