import React, { useEffect, useState } from "react";
import "./Yoga.css";

const YogaSummary = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`yoga-summary ${visible ? "visible" : ""}`}>
      <h2 className="h2-yoga"> Yoga</h2>
      <p className="p-yoga">
        Durante 7 días vive con nosotros la cultura latina en la capital mundial
        de la salsa, una ciudad llena de vida, diversión y bellas experiencias.
        Experimenta el espíritu de la salsa caleña, mientras aprendes o mejoras
        el idioma español, y profundizas en tu conexión interior a través de las
        técnicas de yoga.
      </p>
      <div className="yoga-methods">
        <h3>Técnicas Principales de Yoga</h3>
        <ul>
          <li className="li-yoga">
            <strong>IKY Yoga :</strong> Integra el yoga tántrico y el Kankueb
            maya con visualizaciones para facilitar la flexibilidad y la
            meditación.
          </li>
          <li className="li-yoga">
            <strong>Ishka Vraja Yoga :</strong> Yoga terapéutico basado en
            movimientos precisos y visualizaciones para la recuperación y la
            flexibilidad.
          </li>
          <li className="li-yoga">
            <strong>Power Yoga :</strong> Yoga dinámico basado en una secuencia
            de posturas guiadas por la respiración.
          </li>
          <li className="li-yoga">
            <strong>Yoga Flow :</strong> Sesión fluida y armoniosa con una
            secuencia de posturas guiadas por la respiración y la música.
          </li>
          <li className="li-yoga">
            <strong>Shamanic Yoga :</strong> Yoga energético basado en
            movimientos inspirados en la naturaleza y en guerreros tribales.
          </li>
          <li className="li-yoga">
            <strong>Kankueb :</strong> Técnica maya para activar la energía
            vital con movimientos chamánicos.
          </li>
        </ul>
      </div>
      <div className="session-details">
        <h3>Detalles de las Sesiones</h3>
        <p className="p-yoga">
          Cada día, participarás en una variedad de sesiones, que incluyen:
        </p>
        <ul>
          <li className="li-yoga">3 sesiones de IKY Yoga</li>
          <li className="li-yoga">1 sesión de Ishka Vraja Yoga</li>
          <li className="li-yoga">1 sesión de Power Yoga</li>
          <li className="li-yoga">1 sesión de Yoga Flow</li>
          <li className="li-yoga">1 sesión de Shamanic Yoga</li>
          <li className="li-yoga">1 sesión de Kankueb</li>
        </ul>
        <p className="p-yoga">
          Cada sesión dura aproximadamente 90 minutos, ofreciéndote una visión
          completa de las diferentes técnicas y prácticas de yoga.
        </p>
      </div>
    </div>
  );
};

export default YogaSummary;
