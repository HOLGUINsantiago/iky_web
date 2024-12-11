// src/components/CosmovisionMaya.js
import React from "react";
import "./CosmovisionMaya.css";
import CalendarMaya from "../../assets/images/Calendar_CHOLQ_IJ.png";

const CosmovisionMaya = () => {
  return (
    <div className="cosmovision-container">
      <h2>El Kankueb: Resultado de una Profecía</h2>
      <div className="text-and-image-container">
        <div className="text-section">
          <p>
            En la mitología maya existe una profecía que establece que el punto
            de mayor concentración de energía de la tierra, denominado kaokán,
            estuvo ubicado en los Himalayas durante 5200 años. A partir de 1950
            comenzó su recorrido hacia los Andes americanos, para asentarse
            definitivamente y durante los próximos 5200 años desde el año 2012.
            Por lo anterior, la misma fuerza que rigió el gran desarrollo
            espiritual alrededor de los Himalayas, se desarrolla ahora en Sur
            América.
          </p>
          <p>
            Basados en esta leyenda, ancianos sabedores del mundo maya
            guatemalteco ordenaron a don Carlos y don Gerardo Barrios (guías
            espirituales mayas) dirigir y concretar la integración del
            conocimiento espiritual de oriente con el conocimiento espiritual
            indígena americano. Este proceso debía desarrollarse principalmente
            con personas de Colombia por ser la “cabeza” del ala espiritual
            (Suramérica) que conforma el águila que es el continente americano.
          </p>
          <p>
            Así fueron preparadas varias personas en el tradicional “sac be”, el
            camino blanco de los mayas. Como caminante del sac be y discípulo de
            los dos guías mayas mencionados, C. R. Kan atendió sus
            instrucciones, dedicando su vida a recuperar, desarrollar,
            sistematizar y enseñar el kankueb maya, de ellos aprendido,
            integrándolo además con el yoga tántrico de la India para su
            enseñanza en el mundo actual.
          </p>
          <h3>Fundamentos del Kankueb</h3>
          <p>El kankueb se basa en dos grandes fundamentos.</p>
          <ol>
            <li>
              El calendario maya y la cosmovisión que lo soporta: se utilizan
              como guía diaria para el autoconocimiento, así como para el
              cultivo y afianzamiento de principios éticos, y la sistematización
              de las prácticas del kankueb que ayudan a desarrollar las
              potencialidades del cuerpo y de la mente.
            </li>
            <li>
              Las técnicas y prácticas del kankueb, a saber:{" "}
              <a href="#tecnicas">Descubre las técnicas</a>
            </li>
          </ol>
          <p>
            Calendario maya y kankueb interactúan para mejorar de manera
            ostensible los procesos personales en general. Sus técnicas se basan
            en el conocimiento ancestral de lo que se denomina como el “linaje
            del Kukulkán”, del cual C.R. Kan es actualmente uno de sus regentes,
            y que sólo encuentras sistematizados de esta manera en su escuela y,
            obviamente, esta página web.
          </p>
        </div>
        <div className="image-section">
          <p>
            El calendario maya, fundamental en la cosmovisión y prácticas del
            kankueb, se utiliza para guiar el autoconocimiento y la práctica
            espiritual diaria.
          </p>
          <img src={CalendarMaya} alt="Calendario Maya" />
        </div>
      </div>
    </div>
  );
};

export default CosmovisionMaya;
