import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../Component/Nav.js";
import AuthMenu from "../Component/AuthMenu.js";
import TextWithModal from "./TextWithModal.js";
import { LoremIpsum } from "lorem-ipsum";
// import "./HomePage.css";
import "./Home.css";
import mandalaBlack from "../assets/images/mandalas/mandala.png";
import logoImage from "../assets/images/logo/ISHKA_logo_2021_fin-01.png";
import Carousel from "./Carousel.js";
import Loader from "../Component/loaders/Loaders.js";
import Programmas from "./Programmes/ProgrammeCarrousel.js";
import Footer from "../Component/Footer/Footer.js";
import ProximosEventos from "../Component/NewEvenement/Evenement.js";
import ProximosEventosDetails from "../Component/NewEvenement/EventDetails.js";
import FlyerCours from "../Component/FlyerCours/FlyerCours.js";
import LoginComponent from "../pageLogin/LoginForm.js";
import Paiement from "../Component/NewEvenement/inscription/Paiement.js";
import EvenementInstructorado from "../Component/Instructorado/EvenementInstructorado.js";
import EvenementInstructoradoDetails from "../Component/Instructorado/EventDetails.js";

import image1 from "../assets/images/backgrounds/IMG_1948-min.jpeg";
import image3 from "../assets/images/backgrounds/IMG_4322-min.jpeg";
import image4 from "../assets/images/photosCarousel/178948B9-4FDB-4B3D-957D-74D532C4877E-min.jpg";
import image10 from "../assets/images/photosCarousel/IMG_0648-min.jpeg";
import image2 from "../assets/images/photosCarousel/IMG_1610.jpeg";
import image7 from "../assets/images/photosCarousel/IMG_1887-min.jpeg";
import image8 from "../assets/images/photosCarousel/IMG_5006-min.jpg";
import image9 from "../assets/images/photosCarousel/IMG_7266-min.jpg";

import essai from "../assets/images/backgrounds/IMG_1948.jpeg";
import image from "../assets/images/IMG_0648.jpeg";
import flyer1 from "../assets/images/post_instruct.png";

const programs1 = [
  {
    title: "Free",
    price: 0,
    features: [
      "Acceso a clases gratuitas de Youtube online",
      "Accesso a la platerforma y calendario de Google",
    ],
  },
  {
    title: "Prenium presencial",
    price: 40,
    features: [
      "Acceso a clases presenciales en Cali: 16",
      "Acceso a clases online y clases grabadas del mes en Youtube",
      "Acceso a la plataforma y calendario",
      "Acceso a todos los podcasts",
      "Acceso a grupo de WhatsApp",
    ],
  },
  {
    title: "Profesorado Presencial",
    price: 99,
    features: [
      "Acceso a todas las clases desde la plataforma",
      "300 horas de Formación dividas en 6 meses",
      "Certificacion y registro en RIPEY",
      "Modulos teoricos y practicos",
      "Acceso a grupo de WhatsApp",
    ],
  },
];

const programs2 = [
  {
    title: "Free",
    price: 0,
    features: [
      "Acceso a 10 minutos del comienzo de la clase en YouTube online",
      "Acceso a la plataforma y calendario de Google",
      "Acceso a ciertos podcast",
    ],
  },
  {
    title: "Prenium presencial",
    price: 40,
    features: [
      "Acceso a clases presenciales en Cali: 16",
      "Acceso a clases online y clases grabadas por Whatsapp/drive",
      "Acceso a la plataforma y calendario",
      "Acceso a todos los podcasts",
      "Acceso a grupo de WhatsApp",
    ],
  },
  {
    title: "Prenium online",
    price: 15,
    features: [
      "Acceso a clases online por meets y grabadas por drive",
      "Acceso a la plataforma y calendario",
      "Acceso a todos los podcasts",
      "Acceso a grupo de WhatsApp",
      "1 clase online gratis de ikynesis",
      "Acceso a charlas y eventos online",
    ],
  },
];

const programs3 = [
  {
    title: "Free",
    price: 0,
    features: [
      "Acceso a 10 minutos del comienzo de la clase en YouTube online",
      "Acceso a la plataforma y calendario de Google",
      "Acceso a ciertos podcast",
    ],
  },
  {
    title: "Prenium presencial",
    price: 45,
    features: [
      "Acceso a clases presenciales en Cali: 16",
      "Acceso a clases online por meets y clases grabadas por Whatsapp/drive",
      "Acceso a la plataforma y calendario",
      "Acceso a todos los podcasts",
      "Acceso a grupo de WhatsApp",
      "Acceso a biblioteca y algoritmo de recomendación",
    ],
  },
  {
    title: "Prenium online",
    price: 15,
    features: [
      "Acceso a clases online por meets y grabadas dentro de ma plataforma",
      "Acceso a la plataforma con biblioteca y calendario",
      "Acceso a todos los podcasts",
      "Acceso a grupo de WhatsApp",
      "2 clases online gratis de ikynesis",
      "Acceso a charlas y eventos online",
      "Acceso al algoritmo de recomendación personalizado",
    ],
  },
];

const images = [
  image1,
  image2,
  image3,
  image4,
  image10,
  image7,
  image8,
  image9,
];

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

function Home({ events }) {
  const programsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleScroll = () => {
      if (programsRef.current) {
        const cards = programsRef.current.querySelectorAll(".pack-container");
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const index = Array.from(cards).indexOf(card);
            const isLeft = index % 2 === 0;
            const animationClass = isLeft ? "left-slide-in" : "right-slide-in";
            card.classList.add(animationClass);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Écoutez la taille de l'écran pour vérifier si c'est un petit écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquez le défilement lorsque le menu est ouvert sur mobile
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      // Bloquer le défilement
      document.body.style.overflow = "hidden";
    } else {
      // Réactiver le défilement
      document.body.style.overflow = "auto";
    }

    // Nettoyage
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Verificar si `events` tiene datos antes de renderizar
  if (!events || events.length === 0) {
    return (
      <div className="container-loader">
        <Loader />
      </div>
    );
  }

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
      <div className="content">
        <div className="first-part">
          <div className="titulo-container">
            <h1 className="ishka-big">
              EL MÁS COMPLETO Y AVANZADO SISTEMA DE EMPODERAMIENTO Y CRECIMIENTO
              PERSONAL
              <br />
              DE LOS TIEMPOS ACTUALES
            </h1>
          </div>

          <div className="carousel-text-container">
            <div className="carusel-fotos">
              <Carousel images={images} />
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="vision-container">
            <div className="left-side-vision">
              <h2 className="title">Nuestra visión</h2>
              <div className="left-side-vision-text">
                <p>
                  Somos la escuela de enseñanza y transmisión de técnicas,
                  herramientas y conocimientos de empoderamiento físico y
                  mental, expansión de la consciencia y realización del ser, más
                  influyente y revolucionaria en el mundo del yoga, la
                  meditación y el desarrollo personal.
                  <br />
                  <br />
                  Iniciada en colombia en 2003 por el maestro Carlos Holguín,
                  iky se fundamenta en las técnicas y principios clásicos del
                  yoga tántrico y el kankueb maya, adaptados y sistematizados
                  para las necesidades y realidades de la humanidad actual a
                  través de los nuevos desarrollos de la biomecánica y la
                  biopsicología.
                  <br />
                  <br />
                  Principalmente integramos las disciplinas mencionadas desde
                  una perspectiva científica, práctica, realista y de
                  pensamiento crítico, sin abandonar las bondades del
                  pensamiento abstracto y el estudio y conocimiento de sus bases
                  ancestrales.
                  <br />
                  <br />
                  De esta manera, ofrecemos una sistematización coherente de
                  herramientas prácticas para el bienestar humano, la gestión
                  eficiente de la salud integral y el desarrollo equilibrado de
                  la mente.
                </p>
              </div>
            </div>
            <div className="right-side-vision">
              <img src={mandalaBlack} alt="Description of image" />
            </div>
          </div>
          <div className="separator-bar"></div>
          <h2 className="title-home">Planning de la semana</h2>
          <div className="planning">
            <FlyerCours />
          </div>
          <div className="separator-bar"></div>
          <h2 className="title-home">Próximos eventos</h2>
          <div className="eventos-wrapper">
            {/* Ligne 1 : Instructorado */}
            <div className="eventos-instructorado">
              <EvenementInstructorado
                events={events.filter((ev) => ev.isInstructorado)}
              />
              <Routes>
                <Route
                  path="/event/:id"
                  element={
                    <EvenementInstructoradoDetails
                      events={events.filter((ev) => ev.isInstructorado)}
                    />
                  }
                />
              </Routes>
            </div>

            {/* Ligne 2 : Autres événements */}
            <div className="eventos-otros">
              <ProximosEventos
                events={events.filter((ev) => !ev.isInstructorado)}
              />
              <Routes>
                <Route
                  path="/event/:id"
                  element={
                    <ProximosEventosDetails
                      events={events.filter((ev) => !ev.isInstructorado)}
                    />
                  }
                />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/paiement" element={<Paiement />} />
              </Routes>
            </div>
          </div>
          <div className="separator-bar"></div>
          <h2 className="title-home">Programmas</h2>
          <div className="programmes-wrapper" ref={programsRef}>
            {programs1.map((program, index) => (
              <Programmas
                key={index}
                title={program.title}
                price={program.price}
                features={program.features}
                className="pack-container"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
