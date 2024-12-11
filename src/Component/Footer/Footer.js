import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>A proposito</h4>
          <ul>
            <li>
              <a href="/about">C.R.kan</a>
            </li>
            <li>
              <a href="/ishka">Los profesores</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:contact@example.com">chakrarajakan@gmail.com</a>
            </li>
            {/* <li>
              <a href="/contact">Formulaire de contact</a>
            </li> */}
            <li>
              <a href="tel:+123456789">+57 301 3473398</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Siguenos</h4>
          <ul className="social-links">
            {/* <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook color="#1877F2" />
              </a>
            </li> */}

            <li>
              <a
                href="https://www.instagram.com/chakrarajakan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#E1306C" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@chakrarajakan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube color="#FF0000" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
