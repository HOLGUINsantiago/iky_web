import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav.js";
import { useLocation } from "react-router-dom";
import "./PageComp.css";
import IslaDinamica from "../DynamicIslands/DynamicIsland.js";
import { loremIpsum } from "lorem-ipsum";
import Section from "../SectionCom/Section.js";
import Loader from "../../Component/loaders/Loaders.js"; // Import du Loader
import Footer from "../Footer/Footer.js";

const Page = ({ sections, Mosaique, backgroundImage, color }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isDynamicIsland, setIsDynamicIsland] = useState(false);
  const [loading, setLoading] = useState(true); // État de chargement
  const sectionRefs = useRef([]);
  const mosaiqueRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Selecciona todas las imágenes en la página
    const images = document.querySelectorAll("img");
    let loadedImagesCount = 0;

    images.forEach((image) => {
      // Verifica si la imagen ya está cargada
      if (image.complete) {
        loadedImagesCount += 1;
      } else {
        image.addEventListener("load", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            const timer = setTimeout(() => {
              handleLoad();
            }, 2000); // 2 secondes de temps de chargement simulé
          }
        });
        image.addEventListener("error", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            const timer = setTimeout(() => {
              handleLoad();
            }, 2000); // 2 secondes de temps de chargement simulé
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      const timer = setTimeout(() => {
        handleLoad();
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    // Llamar una vez al montar para asegurarte de que el estado es correcto
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Simuler un temps de chargement pour le loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 secondes de temps de chargement simulé

    return () => clearTimeout(timer);
  }, []);

  // ISLA DINAMICA
  useEffect(() => {
    if (isSmallScreen) {
      setIsDynamicIsland(true); // Forzar la isla dinámica en pantallas pequeñas
    } else {
      const handleScroll = () => {
        const element = mosaiqueRef.current;

        if (element) {
          const rect = element.getBoundingClientRect();
          // Verifica si el elemento está completamente fuera del viewport
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            setIsDynamicIsland(true); // Mostrar la isla dinámica si está fuera del viewport
          } else {
            setIsDynamicIsland(false); // Ocultar la isla dinámica si está visible
          }
        }
      };

      // Escucha eventos de scroll
      window.addEventListener("scroll", handleScroll);

      // Ejecutar la verificación al cargar
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSmallScreen]);


  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsButtonVisible(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Affichage du loader si la page est en cours de chargement
  if (isLoading) {
    return (
      <div className="container-loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="full">
      <div
        className="acerca-container-globalPage"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isSmallScreen ? "contain" : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <div className="menu-acerca-globalPage">
          {!isDynamicIsland && <Nav />}
          {isDynamicIsland && (
            <IslaDinamica sections={sections} sectionRefs={sectionRefs} />
          )}
        </div>
        <div className="content-acerca-globalPage">
          <div className="content-mosaique-globalPage" ref={mosaiqueRef}>
            <Mosaique />
          </div>
          <div style={{ backgroundColor: color }}>
            {sections.map((section, index) => (
              <Section
                key={section.id}
                section={section}
                ref={(el) => (sectionRefs.current[index] = el)}
                isSmallScreen={isSmallScreen}
                isFirstSection={index === 0}
              />
            ))}
          </div>
          {isButtonVisible && (
            <button
              onClick={scrollToTop}
              className="scroll-to-top-button-globalPage"
            >
              ↑
            </button>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
