import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/iky.png";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="../../../assets/images/iky.png"
        alt="netflix logo"
      />
      <img
        className="avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
