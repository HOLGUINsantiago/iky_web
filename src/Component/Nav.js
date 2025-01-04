import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ikylogo from "../assets/images/iky.png";
import "./Nav.css";

function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  // Fonction pour gérer le défilement
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobile) {
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
    const checkScreenSize = () => {
      console.log(window.innerWidth);
      setIsMobile(window.innerWidth <= 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`nav-content${navVisible ? "" : " nav-hidden"}${isMobile ? "-mobile" : ""}${isMenuOpen ? "-open" : ""}`}
    >
      {isMobile ? (
        <>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Symbole pour les trois barres */}
          </div>

          {isMenuOpen && (
            <div className={`mobile-menu${isMenuOpen ? "-open" : ""}`}>
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
        <div className="nav-links">
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
    </div>
  );
}

export default Nav;
