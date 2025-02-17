import React from "react";
import { Link } from "react-router-dom"; // Import de React Router Link
import "./SesionesIndividuales.css";

function SesionesIndividuales() {
  return (
    <div className="sesiones-container">
      <p className="sesiones-text">
        Profundamente relajantes y terapéuticas, estas sesiones realizadas por
        C.R. Kan te ayudan a recuperarte de tensiones, molestias y dolores
        osteomusculares de todo tipo, a partir de los sutiles movimientos que
        con sus manos realiza en tu sistema osteomuscular.
      </p>
      <p className="sesiones-text">
        Después de cada sesión de Integración Somática te vas a sentir súper
        liviano, descansado, aliviado o liberado de dolores y molestias, con
        mayor flexibilidad y en un profundo estado de dicha y bienestar.
      </p>
    </div>
  );
}

export default SesionesIndividuales;
