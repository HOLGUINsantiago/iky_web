import React, { useEffect, useState } from "react";
import "./Salsa.css"; // Assurez-vous que le chemin est correct

const SalsaSummary = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); // Ajustez le délai si nécessaire

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`salsa-summary ${visible ? "visible" : ""}`}>
      <h2 className="titre-salsa"> Salsa </h2>
      <p className="p-salsa">
        Durante 7 días vive con nosotros la cultura latina en la capital mundial
        de la salsa, una ciudad llena de vida, diversión y bellas experiencias.
        Experimenta el espíritu de la salsa caleña, mientras aprendes o mejoras
        el idioma español, y profundizas en tu conexión interior a través de las
        técnicas de yoga.
      </p>
      <div className="salsa-mathods">
        <h2 className="titre-salsa">Aprendizaje de Salsa</h2>
        <p className="p-salsa">
          Sumergirte en nuestra experiencia latina incluye aprender español, que
          estará presente en tus interacciones con los profesores de baile, las
          clases de yoga y todas las experiencias culturales. Nuestro programa
          YES ofrece clases diarias de español con métodos prácticos y
          divertidos.
        </p>
        <p className="p-salsa">
          Cali es conocida como la capital mundial de la salsa. Aquí aprenderás
          salsa caleña y otros ritmos latinos como merengue, bachata, y cumbia.
          Las clases se dan en Aura Hotel y Topa Tolondra, y también en Salsa
          Pura y Swing Latino. Disfrutarás de sesiones de aprendizaje y práctica
          dinámicas.
        </p>
        <div className="session-details">
          <h3>Detalles de las Clases</h3>
          <ul>
            <li className="p-salsa">Número total de clases: 9</li>
            <li className="p-salsa">
              Duración de cada sesión: mínimo 60 minutos
            </li>
          </ul>
          <p className="p-salsa">
            El costo incluye clases, transportes y entradas a los bares. Los
            gastos adicionales son por cuenta del participante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalsaSummary;
