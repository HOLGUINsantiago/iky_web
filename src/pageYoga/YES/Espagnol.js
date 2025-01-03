import React, { useEffect, useState } from "react";
import "./Espagnol.css"; // Assurez-vous que le chemin est correct

const EspagnolSummary = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 280); // Ajustez le délai si nécessaire

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`espagnol-summary ${visible ? "visible" : ""}`}>
      <h2 className="h2-espagnol"> Español</h2>
      <p className="p-espagnol">
        Durante 7 días vive con nosotros la cultura latina en la capital mundial
        de la salsa, una ciudad llena de vida, diversión y bellas experiencias.
        Experimenta el espíritu de la salsa caleña, mientras aprendes o mejoras
        el idioma español, y profundizas en tu conexión interior a través de las
        técnicas de yoga.
      </p>
      <div className="espgnols-methods">
        {" "}
        <h2 className="h2-espagnol">Aprendizaje del Español</h2>
        <p className="p-espagnol">
          Sumergirte en nuestra experiencia latina incluye aprender español, que
          estará presente en tus interacciones con los profesores de baile, las
          clases de yoga y todas las experiencias culturales. Nuestro programa
          YES ofrece clases diarias de español con métodos prácticos y
          divertidos, para que puedas mantener una conversación básica con
          hispanohablantes y aprovechar al máximo el intercambio cultural.
        </p>
        <div className="session-details">
          <h3>Detalles de las Clases</h3>
          <ul>
            <li className="li-espagnol">
              Sesiones de aprendizaje dinámicas y entretenidas
            </li>
            <li className="li-espagnol">
              Individuales o grupales para distintos niveles
            </li>
            <li className="li-espagnol">
              Incluye salidas al city tour y eco tour
            </li>
            <li className="li-espagnol">
              Clases dictadas en español, con traducción al inglés
            </li>
            <li className="li-espagnol">Número total de sesiones: 8</li>
            <li className="li-espagnol">Duración de cada sesión: 60 minutos</li>
          </ul>
          <p className="p-espagnol">
            Estas clases están incluidas en el precio del programa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EspagnolSummary;
