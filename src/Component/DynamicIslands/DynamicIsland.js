import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DynamicIsland.css";
import Nav from "../Nav.js";

const IslaDinamica = ({ sections, sectionRefs }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [sectionName, setSectionName] = useState(sections[0].name);
  const [progress, setProgress] = useState(0);
  const [showSectionName, setShowSectionName] = useState(false);
  const [showRecommendationTitle, setShowRecommendationTitle] = useState(false);
  const [currentRecommendations, setCurrentRecommendations] = useState([]);
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);
  const [isNavShow, setIsNavShow] = useState(true);
  const [isRecomendacionesMenuOpen, setIsRecomendacionesMenuOpen] =
    useState(false);
  const [ventanaRecActiva, setVentanaRecActiva] = useState(null);
  const [islaWidth, setIslaWidth] = useState(140);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const islaRef = useRef(null);
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            const section = sections.find(
              (sec) => sec.id === parseInt(sectionId),
            );
            if (section) {
              setCurrentSection(section.id);
              setSectionName(section.name);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px",
        threshold: 0,
      },
    );
    sectionRefs.current
      .filter((section) => section)
      .forEach((section) => {
        observer.observe(section);
      });

    return () => {
      if (observer) {
        sectionRefs.current
          .filter((section) => section)
          .forEach((section) => {
            observer.unobserve(section);
          });
      }
    };
  }, [sections, sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = sectionRefs.current[currentSection - 1];
      if (currentRef) {
        const { top, height } = currentRef.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progressLine = viewportHeight * 0.4;
        const progressInSection =
          Math.min(Math.max((progressLine - top) / height, 0), 1) * 100;
        setProgress(progressInSection);

        const updatedRecommendations = sections[
          currentSection - 1
        ].recommendations.filter((rec) => {
          const recProgress = rec.porcentaje || 0;
          return (
            recProgress <= progressInSection + 20 &&
            recProgress >= progressInSection - 20
          );
        });

        if (
          JSON.stringify(currentRecommendations) !==
          JSON.stringify(updatedRecommendations)
        ) {
          setCurrentRecommendations(updatedRecommendations);
          setShowRecommendationTitle(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, sectionRefs, sections, currentRecommendations]);

  useEffect(() => {
    setShowSectionName(true);
    const timer = setTimeout(() => {
      setShowSectionName(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentSection]);

  useEffect(() => {
    var timer = 0;
    if (currentRecommendations.length != 0)
      timer = setTimeout(() => {
        setShowRecommendationTitle(false);
      }, 1500);
    else setShowRecommendationTitle(false);
    return () => clearTimeout(timer);
  }, [currentRecommendations]);

  useEffect(() => {
    const adjustDimensions = () => {
      if (
        leftRef.current &&
        rightRef.current &&
        !isSectionMenuOpen &&
        !isRecomendacionesMenuOpen
      ) {
        leftRef.current.style.width = "auto";
        rightRef.current.style.width = "auto";
        const leftWidth = leftRef.current.scrollWidth;
        const rightWidth = rightRef.current.scrollWidth;
        const maxWidth = Math.max(leftWidth, rightWidth);
        leftRef.current.style.width = `${maxWidth}px`;
        rightRef.current.style.width = `${maxWidth}px`;
      }
    };

    adjustDimensions();
    window.addEventListener("resize", adjustDimensions);

    return () => {
      window.removeEventListener("resize", adjustDimensions);
    };
  }, [
    isSectionMenuOpen,
    sections,
    showSectionName,
    sectionName,
    currentRecommendations,
    showRecommendationTitle,
    isRecomendacionesMenuOpen,
    isNavShow,
    currentSection,
  ]);

  const handleMouseEnterSection = () => {
    if (!isSectionMenuOpen) setIslaWidth(islaRef.current.scrollWidth);
    setIsSectionMenuOpen(true);
  };

  const handleMouseLeaveSection = () => {
    setIsSectionMenuOpen(false);
  };

  const handleMouseEnterRecomendaciones = () => {
    if (!isRecomendacionesMenuOpen) setIslaWidth(islaRef.current.scrollWidth);
    setIsRecomendacionesMenuOpen(true);
  };

  const handleMouseLeaveRecomendaciones = () => {
    setIsRecomendacionesMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isNavShow) {
        setIsNavShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavShow]);

  useEffect(() => {
    const handleScroll = () => {
      if (isRecomendacionesMenuOpen) {
        setIsRecomendacionesMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRecomendacionesMenuOpen]);

  const handleMenuPress = () => {
    setIsNavShow((prev) => {
      return !prev;
    });
  };

  return (
    <div className="isla">
      <div className="box">
        {isNavShow && (
          <div
            className={`isla-dinamica ${isSectionMenuOpen ? "menu-open" : ""} ${isRecomendacionesMenuOpen ? "recomendaciones-open" : ""
              } `}
            ref={islaRef}
          >
            <div className="shape">
              {!isSectionMenuOpen && (
                <div
                  className="isla-dinamica-left"
                  ref={leftRef}
                  onMouseEnter={handleMouseEnterRecomendaciones}
                  onMouseLeave={handleMouseLeaveRecomendaciones}
                >
                  <div className="isla-dinamica-left-content">
                    {sections[currentSection - 1].recommendations.length >
                      0 && (
                        <div className="recommendations">
                          {!showRecommendationTitle &&
                            currentRecommendations.length > 1 &&
                            !isRecomendacionesMenuOpen && (
                              <p>
                                {currentRecommendations.length} recomendaciones
                              </p>
                            )}
                          {!showRecommendationTitle &&
                            currentRecommendations.length === 1 && (
                              <p>{currentRecommendations[0].title}</p>
                            )}
                          {!showRecommendationTitle &&
                            currentRecommendations.length === 0 && (
                              <p>Esperando recomendaciones</p>
                            )}
                          {showRecommendationTitle && (
                            <p>
                              {currentRecommendations.map((rec, index) => (
                                <span key={index}>
                                  <a href={rec.url} className="no-link">
                                    {rec.title}
                                  </a>
                                  {index < currentRecommendations.length - 1 &&
                                    " , "}
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
                      )}
                    {currentRecommendations.length != 0 &&
                      isRecomendacionesMenuOpen && (
                        <div
                          className="menu"
                          style={{ minWidth: `${islaWidth}px` }}
                          ref={menuRef}
                        >
                          <ul>
                            {currentRecommendations.map((section) => (
                              <li key={section.title}>
                                <a
                                  onClick={() => {
                                    section.allowed
                                      ? setVentanaRecActiva(section.url)
                                      : window.open(
                                        section.url,
                                        "_blank",
                                        "noopener,noreferrer",
                                      );
                                    setIsRecomendacionesMenuOpen(false);
                                  }}
                                >
                                  {section.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {currentRecommendations.length != 0 &&
                      ventanaRecActiva != null && (
                        <div
                          className="menu"
                          style={{ minWidth: `${islaWidth}px` }}
                          ref={menuRef}
                        >
                          <iframe
                            src={ventanaRecActiva}
                            style={{
                              width: "60vw",
                              height: "35vw",
                              border: "none",
                            }}
                            title="Contenido de la ventana activa"
                            onMouseOut={() => setVentanaRecActiva(null)}
                          ></iframe>
                        </div>
                      )}
                  </div>
                </div>
              )}
              <div className="isla-dinamica-middle">
                {!isSectionMenuOpen && (
                  <button className="btn" onClick={handleMenuPress}>
                    <i className="fa fa-bars"></i>
                  </button>
                )}
              </div>
              <div
                className={`isla-dinamica-right ${isSectionMenuOpen ? "menu-open" : ""
                  }`}
                ref={rightRef}
                onMouseEnter={handleMouseEnterSection}
                onMouseLeave={handleMouseLeaveSection}
              >
                {!isSectionMenuOpen && !showSectionName && (
                  <div className="section-info">
                    {currentSection}/{sections.length}
                  </div>
                )}
                {!isSectionMenuOpen && !showSectionName && (
                  <div className="section-info">{progress.toFixed(2)}%</div>
                )}
                {!isSectionMenuOpen && showSectionName && (
                  <div className="section-name">{sectionName}</div>
                )}

                {isSectionMenuOpen && (
                  <div
                    className="menu"
                    style={{ minWidth: `${islaWidth}px` }}
                    ref={menuRef}
                  >
                    <ul>
                      {sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#section-${section.id}`}
                            onClick={() => {
                              setCurrentSection(section.id);
                              sectionRefs.current[
                                section.id - 1
                              ].scrollIntoView({
                                behavior: "smooth",
                              });
                              setIsSectionMenuOpen(false);
                            }}
                          >
                            {section.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {!isNavShow && <Nav showDirect={isMobile} />}
    </div>
  );
};

IslaDinamica.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      recommendations: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          porcentaje: PropTypes.number,
          allowed: PropTypes.bool,
        }),
      ).isRequired,
    }),
  ).isRequired,
  sectionRefs: PropTypes.object.isRequired,
};

export default IslaDinamica;
