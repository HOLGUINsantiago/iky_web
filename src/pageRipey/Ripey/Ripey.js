import React from "react";
import "./Ripey.css";
import Explication from "./ExplicationRipey.js";

const Ripey = () => {
  return (
    <div className="ripey-container">
      <p className="ripey-intro">
        Registro Internacional de Profesores y Enseñantes de Yoga
      </p>
      <p>
        En esta página encuentras los registros de los profesores e instructores
        de yoga que se han graduado en esta escuela desde el año 2009.
      </p>
      <p>
        Nuestros instructores y profesores están agrupados por países y por
        orden alfabético de sus apellidos. En su registro cada profesor tiene un
        abstract o corta descripción profesional, acompañado de su foto y su
        diploma de graduación que opera como certificación.
      </p>
      <p>
        Cada graduado tiene asignado un código con el cual cualquier persona
        puede buscar fácilmente su perfil y verificar su certificación.
      </p>
      <p>
        Para una mayor claridad la codificación está organizada de la siguiente
        manera:
      </p>
      <Explication />
      <p>
        Dígito de 6 cifras: las primeras 2 cifras corresponden al día de la
        graduación, las siguientes 2 cifras al mes y las últimas 2 cifras son
        correspondientes al año.
      </p>
      <p>
        Dígito de 3 cifras: corresponde al orden asignado el día de la
        graduación o del curso.
      </p>
      <h2 className="ripey-note-title">NOTA ACLARATORIA</h2>
      <p>
        IKY sigue los lineamientos de registro de las escuelas de yoga
        tradicionales de la India, las cuales han tenido siempre su propio
        sistema de registro profesores. Por lo tanto, no hacemos parte de la
        Yoga Alliance por diferentes razones, entre ellas, su inoperancia, falta
        de utilidad real, costos excesivos, carencia de garantías respecto de
        los estándares de calidad, pero sobre todo, sus prácticas anti éticas
        como la publicidad engañosa, la desinformación y las maniobras
        monopolísticas. Todo lo anterior resulta para nosotros ajeno a los
        principios del yoga.
      </p>
      <p>
        Siendo que no existe una regulación internacional que exija una
        habilitación determinada para el ejercicio de la enseñanza del yoga, y
        que en la mayoría de los países esta actividad no está regulada
        legalmente, cada escuela se ve en la obligación y tiene la libertad de
        escoger sus propios contenidos temáticos y metodológicos, y por lo tanto
        sus propios estándares de calidad.
      </p>
      <p>
        IKY ofrece una de las mejores metodologías de enseñanza y práctica de
        yoga, con contenidos completos, claros y suficientes, lo cual le permite
        ofrecer un registro de instructores y profesores de yoga adecuadamente
        sustentado.
      </p>
    </div>
  );
};

export default Ripey;
