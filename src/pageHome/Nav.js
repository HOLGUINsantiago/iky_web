import React from "react";
import { Link } from "react-router-dom";
import ikylogo from "../assets/images/iky.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-content">
      <img src={ikylogo} alt="Logo" className="logo" />
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
          <Link to="/eventos" className="link-styled">
            Eventos
          </Link>
        </li>
        <li>
          <Link to="/iky" className="link-styled">
            Iky center
          </Link>
        </li>
        <li>
          <Link to="/vision" className="link-styled">
            Kankueb
          </Link>
        </li>
        <li>
          <Link to="/ripey" className="link-styled">
            RIPEY
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
