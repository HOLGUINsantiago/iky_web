import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ikylogo from "../assets/images/iky.png";
import "./Nav.css";

function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Fonction pour gérer le défilement
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Si la largeur de l'écran est inférieure ou égale à 768px
  };

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav-content ${navVisible ? "" : "nav-hidden"}`}>
      <img src={ikylogo} alt="Logo" className="logo" />
      {isMobile ? (
        <>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Symbole pour les trois barres */}
          </div>

          {/* Affichage du menu mobile */}
          {isMenuOpen && (
            <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/" className="link-styled">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link-styled">
                    C.R.Kan
                  </Link>
                </li>
                <li>
                  <Link to="/yoga" className="link-styled">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link to="/iky" className="link-styled">
                    IKYnesis
                  </Link>
                </li>
                <li>
                  <Link to="/kankueb" className="link-styled">
                    Kankueb
                  </Link>
                </li>
                <li>
                  <Link to="/ripey" className="link-styled">
                    RIPEY
                  </Link>
                </li>
                <li>
                  <Link to="/ishka" className="link-styled">
                    Ishka Center
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <ul className="list-styled">
          <li>
            <Link to="/" className="link-styled">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-styled">
              C.R.Kan
            </Link>
          </li>
          <li>
            <Link to="/yoga" className="link-styled">
              Yoga
            </Link>
          </li>
          <li>
            <Link to="/iky" className="link-styled">
              IKYnesis
            </Link>
          </li>
          <li>
            <Link to="/kankueb" className="link-styled">
              Kankueb
            </Link>
          </li>
          <li>
            <Link to="/ripey" className="link-styled">
              RIPEY
            </Link>
          </li>
          <li>
            <Link to="/ishka" className="link-styled">
              Ishka Center
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
