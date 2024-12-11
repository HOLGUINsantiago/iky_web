import React from "react";
import "./ProfesoradoInstructorado.css";
import instructoradoImage from "../../assets/images/instrutorado/IMG_9638.JPG"; // Image pour l'instructorado
import profesoradoImage from "../../assets/images/Profesorado_IKY_alt.jpg"; // Image pour le profesorado

const ProfesoradoInstructorado = () => {
  return (
    <div className="profesorado-instructorado-container">
      {/* Instructeur de Yoga Section */}
      <div className="section-yoga-profesorado">
        <h2 className="title-yoga-profesorado">INSTRUCTORADO IKY</h2>
        <p className="description-yoga-profesorado">
          Participa durante 21 días en una experiencia única en todo el planeta,
          sumergiéndote en la vivencia y el aprendizaje del estilo de yoga más
          revolucionario de los últimos tiempos, bajo la guía del experimentado
          maestro Chakra Raja Kan y su equipo de enseñanza. Certifícate
          internacionalmente como un exclusivo instructor de yoga y meditación.
        </p>

        <div className="content-yoga-profesorado">
          <div className="text-content-yoga-profesorado">
            <div className="objectives-yoga-profesorado">
              <h3 className="subtitle-yoga-profesorado">Objetivos:</h3>
              <ul className="objectives-list-yoga-profesorado">
                <li>
                  Convertirte en uno de los mejores y más completos instructores
                  de yoga del planeta.
                </li>
                <li>
                  Adquirir herramientas para abordar eficazmente el proceso de
                  cambios internos necesarios para un mejor desarrollo
                  espiritual.
                </li>
                <li>
                  Adquirir conocimientos básicos de la teoría y práctica del
                  yoga a través de una experiencia científica y actual
                  solicitud.
                </li>
                <li>
                  Comprender la práctica personal de técnicas fundamentales de
                  yoga y meditación.
                </li>
                <li>
                  Desarrollar las habilidades necesarias para transmitir
                  técnicas fundamentales de yoga y meditación como instructor a
                  grupos e individuos de diferentes edades y condiciones
                  sociales, culturales y profesionales.
                </li>
              </ul>
            </div>

            <h3 className="subtitle-yoga-profesorado">
              Material académico y de apoyo:
            </h3>
            <ul className="materials-list-yoga-profesorado">
              <li>
                Acceso a las clases de yoga, Método Feldenkrais® e IKYnesis
                durante los 3 meses posteriores a la terminación del
                entrenamiento.
              </li>
              <li>Manual de yoga en PDF.</li>
              <li>Acceso permanente a los videos del entrenamiento.</li>
              <li>Acceso permanente a los podcasts.</li>
              <li>Acceso a los blogs académicos.</li>
              <li>
                Beneficios y descuentos en clases, talleres y retiros,
                presenciales u online.
              </li>
            </ul>
          </div>

          <div className="image-container-yoga-profesorado">
            <img
              src={instructoradoImage}
              alt="Instructorado"
              className="objective-image-yoga-profesorado"
            />
          </div>
        </div>
      </div>

      {/* Professeur de Yoga Section */}
      <div className="section-yoga-profesorado">
        <h2 className="title-yoga-profesorado">PROFESORADO IKY</h2>
        <p className="description-yoga-profesorado">
          Durante 6 meses vive una experiencia única en todo el planeta,
          sumergiéndote en la vivencia y el aprendizaje del estilo de yoga más
          revolucionario de los últimos tiempos, bajo la guía del experimentado
          maestro Chakra Raja Kan y su equipo de enseñanza. Certifícate
          internacionalmente como un exclusivo profesor de yoga y meditación.
        </p>

        <div className="content-yoga-profesorado">
          <div className="text-content-yoga-profesorado">
            <div className="objectives-yoga-profesorado">
              <h3 className="subtitle-yoga-profesorado">Objetivos:</h3>
              <ul className="objectives-list-yoga-profesorado">
                <li>
                  Convertirte en uno de los mejores y más completos profesores
                  de yoga del planeta.
                </li>
                <li>
                  Adquirir herramientas para abordar eficazmente el proceso de
                  cambios internos necesarios para un mejor desarrollo
                  espiritual.
                </li>
                <li>
                  Adquirir conocimientos básicos de la teoría y práctica del
                  yoga a través de una experiencia científica y actual
                  solicitud.
                </li>
                <li>
                  Comprender la práctica personal de técnicas fundamentales de
                  yoga y meditación.
                </li>
                <li>
                  Desarrollar las habilidades necesarias para transmitir
                  técnicas fundamentales de yoga y meditación como instructor a
                  grupos e individuos de diferentes edades y condiciones
                  sociales, culturales y profesionales.
                </li>
              </ul>
            </div>

            <h3 className="subtitle-yoga-profesorado">
              Material académico y de apoyo:
            </h3>
            <ul className="materials-list-yoga-profesorado">
              <li>
                Acceso a las clases de yoga, Método Feldenkrais® e IKYnesis
                durante los 3 meses posteriores a la terminación del
                entrenamiento.
              </li>
              <li>Manual de yoga en PDF.</li>
              <li>Acceso permanente a los videos del entrenamiento.</li>
              <li>Acceso permanente a los podcasts.</li>
              <li>Acceso a los blogs académicos.</li>
              <li>
                Beneficios y descuentos en clases, talleres y retiros,
                presenciales u online.
              </li>
            </ul>
          </div>

          <div className="image-container-yoga-profesorado">
            <img
              src={profesoradoImage}
              alt="Profesorado"
              className="objective-image-yoga-profesorado"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesoradoInstructorado;
