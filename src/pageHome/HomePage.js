import React from "react";
import Nav from "./Nav.js";
import AuthMenu from "./AuthMenu.js";
import TextWithModal from "./TextWithModal.js";
import ProgramCarousel from "./Programmes/ProgrammeCarrousel.js";
import { LoremIpsum } from "lorem-ipsum";
import "./HomePage.css";
import logoImage from "../assets/images/logo/ISHKA_logo_2021_fin-01.png";
import ImageCarousel from "./Carousel.js";

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
        </div>
      </div>
      <div className="carusel-fotos">
        <ImageCarousel />
      </div>
      <div className="text-wrapper">
        <TextWithModal title="Nuestra vision" text={randomText} />
      </div>
      {/* <div className="program-carousel-wrapper">
        <ProgramCarousel programs={programs} />
      </div> */}
    </div>
  );
}

export default Home;
