import React, { useState, useEffect } from "react";
import Nav from "../Component/Nav.js";
import AuthMenu from "../Component/AuthMenu.js";
import TextWithModal from "./TextWithModal.js";
import { LoremIpsum } from "lorem-ipsum";
import "./HomePage.css";
import logoImage from "../assets/images/iky.png";
import Carousel from "./Carousel.js";

import image1 from "../assets/images/backgrounds/IMG_1948.jpeg";
import image2 from "../assets/images/IMG_0648.jpeg";
import image3 from "../assets/images/backgrounds/IMG_4322.jpg";
import mandala from "../assets/images/mandalas/mandalaNew.png";

const images = [image1, image2, image3];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function Home() {
  const randomText = lorem.generateParagraphs(10);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 200; // Ajustez cette valeur pour contrôler quand l'effet commence

      if (scrollPosition > triggerPoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="home-container">
        <div className="menu-wrapper">
          <Nav />
        </div>
        <div className="auth-menu-wrapper">
          <AuthMenu />
        </div>
        <div className="logo-wrapper">
          <img src={logoImage} alt="Logo" />
          <h1 className={`ishka ${scrolled ? "scrolled" : ""}`}>
            ISHKA KANKUEB YOGA
          </h1>
        </div>
      </div>
      <div className="carousel-text-container">
        <div className="carusel-fotos">
          <Carousel images={images} />
        </div>
        <div className="text-wrapper">
          <div className="title">Nuestra visión</div>
          <TextWithModal text={randomText} />
        </div>
      </div>
    </div>
  );
}

export default Home;
