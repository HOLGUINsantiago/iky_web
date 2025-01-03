import React, { useState, useEffect } from "react";
import "./SystemaIKY.css";
import ExplicationYoga from "./ExplicationYoga.js";
import mandalaIky from "../../assets/images/ikyu mandala_new-02-Photoroom.png";
import FireExplanation from "./ExplicationElement/Fire.js";
import TierraExplanation from "./ExplicationElement/Tierra.js";
import AireExplanation from "./ExplicationElement/Aire.js";
import AguaExplanation from "./ExplicationElement/Agua.js";
import EterExplanation from "./ExplicationElement/Eter.js";

function SistemaIKY() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [shiftMandala, setShiftMandala] = useState(0); // État pour gérer le décalage

  useEffect(() => {
    const updateMandalaShift = () => {
      if (window.innerWidth < 768) {
        setShiftMandala(0); // Centrer pour petit écran
      } else if (window.innerWidth >= 1200) {
        setShiftMandala(0); // Centrer pour grand écran aussi
      } else {
        setShiftMandala(0); // Centrer pour les tailles moyennes
      }
    };

    updateMandalaShift(); // Appel initial pour centrer au début
    window.addEventListener("resize", updateMandalaShift); // Écoute les changements de taille
    return () => window.removeEventListener("resize", updateMandalaShift); // Nettoyage
  }, []);

  const handleMouseEnter = (component) => {
    setActiveComponent(component);
    setShiftMandala(400); // Décale le mandala vers la droite
  };

  const handleMouseLeave = () => {};

  const handleCloseExplanation = () => {
    setActiveComponent(null);
    setShiftMandala(0); // Réinitialise le décalage du mandala
  };

  const scrollToYogaSection = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien

    const yogaSection = document.getElementById("definicion-yoga");

    if (!yogaSection) return;

    const windowHeight = window.innerHeight;
    const yogaPosition =
      yogaSection.getBoundingClientRect().top + window.pageYOffset;

    // Calculer la position de défilement pour centrer l'élément
    const scrollToPosition =
      yogaPosition - windowHeight / 2 + yogaSection.offsetHeight / 2;

    // Effectuer le défilement avec un effet fluide
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sistema-iky-container">
        <h2 className="sistema-iky-titlep">Sistema IKY</h2>
        <p className="sistema-iky-textp">
          El Sistema IKY es una disciplina de reeducación de la mente que
          sistematiza prácticas tradicionales y modernas, para lograr procesos
          de meditación que conllevan al refinamiento de la mente. El{" "}
          <strong>SISTEMA IKY</strong> brinda al practicante estrategias
          eficientes para una vida satisfactoria de conformidad con la
          naturaleza y temperamento de cada individuo.
        </p>
        <p className="sistema-iky-textp">
          IKY integra y sistematiza conocimientos, técnicas y prácticas del yoga
          clásico y moderno, el tantra kundalini, el kankueb maya y el Método
          Feldenkrais® bajo el contexto de la ciencia, especialmente de la
          biopsicología.
        </p>

        <div className="sistema-iky-section">
          <ExplicationYoga />
        </div>

        <div className="sistema-iky-principiosp">
          <h3>PRINCIPIOS DEL SISTEMA IKY</h3>
          <ul className="sistema-iky-listp">
            <li>Observación de sí mismo, autoconocimiento, autoestudio.</li>
            <li>Aceptación activa.</li>
            <li>Desapego – cultivo del desapego en compasión.</li>
            <li>
              Cultivo de la observación de los propios procesos fisiológicos y
              mentales.
            </li>
            <li>Pensamiento crítico.</li>
            <li>Reconocimiento de la necesidad de una visión científica.</li>
            <li>Laicismo y no teísmo.</li>
            <li>Pensamiento sistémico y analítico, discernimiento.</li>
            <li>Pragmatismo.</li>
            <li>Amor.</li>
            <li>Dicha.</li>
            <li>Compasión.</li>
            <li>Creatividad.</li>
            <li>Ecuanimidad y paz interior.</li>
          </ul>
        </div>

        <div className="sistema-iky-modelo-teorico">
          <h3>MODELO TEÓRICO DEL SISTEMA IKY</h3>
          <p className="sistema-iky-textp">
            <strong>Objetivo general:</strong> IKY facilita el desarrollo humano
            a través de la sofisticación de las principales técnicas del{" "}
            <a href="#definicion-yoga" onClick={scrollToYogaSection}>
              yoga
            </a>{" "}
            , haciendo más eficaz la consecución de su objetivo y la obtención
            de sus beneficios. Como ninguna otra línea de yoga, pone a la mano
            del practicante exclusivas herramientas que se convierten en el
            nuevo paradigma del yoga: biomecánica, IKY Drishti y kankueb.
          </p>
          <p className="sistema-iky-textp">
            Siguiendo los principios de la biomecánica, el movimiento corporal
            estimula permanentemente el sistema nervioso, produciendo cambios en
            las redes neuronales centrales y periféricas que favorecen
            exponencialmente el desempeño físico, así como el proceso de la
            mente y las emociones. Las prácticas de movimiento consciente
            transforman las redes sinápticas y el proceso biomecánico, lo cual
            genera una reorganización del cuerpo, la mente y las emociones,
            derivando en bienestar, desarrollo de la autoimagen e incremento de
            la autoridad interna.
          </p>
          <p className="sistema-iky-textp">
            Con los IKY Drishti; sofisticadas técnicas de visualización, se
            aprende a cultivar sensaciones, sentimientos, actitudes emocionales
            y procesos mentales que repercuten el estado de ser.
          </p>
          <p className="sistema-iky-textp">
            Finalmente, el kankueb aporta una visión simbólica sobre las amplias
            escalas que componen la existencia, fundamentando así el modelo
            teórico de la escuela. Dicho modelo clasifica de manera clara y
            sistemática las diferentes técnicas del SISTEMA IKY. Además, los
            principios del kankueb disponen al practicante hacia una comprensión
            más completa de las posibilidades de su mente y por lo tanto un
            mejor uso de esta.
            <br />
            <br />
            Como lo mencionamos previamente, el modelo teórico del SISTEMA IKY –
            ISHKA KANKUEB YOGA, está formulado a partir de la simbólica
            clasificación maya del universo a través de los cuatro elementos, a
            saber:
          </p>
        </div>

        <p className="sistema-iky-text-middle">
          Desliza el cursor sobre el mandala para saber más sobre cada uno de
          los elementos.
        </p>

        <div
          className="mandala-container"
          style={{ transform: `translateX(${shiftMandala}px)` }}
        >
          <img src={mandalaIky} alt="Mandala IKY" className="mandala-iky-img" />
          <div
            className="interactive-area area-1"
            onMouseEnter={() => handleMouseEnter(<FireExplanation />)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: "10%",
              left: "42%",
              width: "16%",
              height: "25%",
            }} // Ajuste des positions et dimensions
          ></div>

          <div
            className="interactive-area area-2"
            onMouseEnter={() => handleMouseEnter(<AireExplanation />)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: "35%",
              left: "31%",
              width: "12%",
              height: "30%",
            }} // Ajuste des positions et dimensions
          ></div>

          <div
            className="interactive-area area-3"
            onMouseEnter={() => handleMouseEnter(<EterExplanation />)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: "38%",
              left: "44%",
              width: "12%",
              height: "25%",
            }} // Ajuste des positions et dimensions
          ></div>

          <div
            className="interactive-area area-4"
            onMouseEnter={() => handleMouseEnter(<AguaExplanation />)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: "35%",
              left: "56%",
              width: "12%",
              height: "30%",
            }} // Ajuste des positions et dimensions
          ></div>

          <div
            className="interactive-area area-5"
            onMouseEnter={() => handleMouseEnter(<TierraExplanation />)}
            onMouseLeave={handleMouseLeave}
            style={{
              top: "63%",
              left: "42%",
              width: "16%",
              height: "25%",
            }} // Ajuste des positions et dimensions
          ></div>
          {/* Ajoute plus de zones interactives ici */}
          {activeComponent && (
            <div className="mandala-tooltip">
              <button
                className="tooltip-close"
                onClick={handleCloseExplanation}
              >
                ×
              </button>
              {activeComponent}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SistemaIKY;
