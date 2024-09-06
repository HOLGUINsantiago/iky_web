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

  const containerStyle = {
    "--background-image": `url(${backgroundImage})`,
  };

  // ISLA DINAMICA
  useEffect(() => {
    const mosaiqueObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            if (ratio >= 0.6 && ratio <= 1) {
              setIsDynamicIsland(false);
            } else {
              setIsDynamicIsland(true);
            }
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: [0.6, 0.1],
      },
    );

    if (mosaiqueRef.current) {
      mosaiqueObserver.observe(mosaiqueRef.current);
    }

    return () => {
      if (mosaiqueRef.current) {
        mosaiqueObserver.unobserve(mosaiqueRef.current);
      }
    };
  }, []);

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
          backgroundSize: "cover",
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
