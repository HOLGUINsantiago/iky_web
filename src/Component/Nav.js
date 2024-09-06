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
          <Link to="/iky" className="link-styled">
            IKYnesis
          </Link>
        </li>
        <li>
          <Link to="/kankueb" className="link-styled">
            Kankueb
          </Link>
        </li>
        <Link to="/ripey" className="link-styled">
          RIPEY
        </Link>
        <li>
          <Link to="/ishka" className="link-styled">
            Ishka center
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Nav;
