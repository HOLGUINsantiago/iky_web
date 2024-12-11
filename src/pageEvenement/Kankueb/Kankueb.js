import React from "react";
import "./Kankueb.css";
import Dance from "../../assets/images/dance.JPG"; // Assurez-vous que le chemin est correct
import Image1 from "../../assets/images/IMG_5834.JPG";

const Kankueb = () => {
  return (
    <div className="kankueb-container">
      <div className="kankueb-header">
        {/* Section avec les 3 images alignées à gauche */}
        <div className="kankueb-image-container">
          <img src={Image1} alt="Image 1" className="kankueb-image" />
          <img src={Dance} alt="Image 2" className="kankueb-image" />
        </div>

        {/* Contenu texte */}
        <div className="kankueb-content">
          <h2 className="kankueb-title">¿Qué es el Kankueb?</h2>
          <p className="kankueb-text">
            Basado en la reinterpretación de la cosmovisión maya realizada por
            C.R. Kan, es un sistema práctico para la transformación de las
            condiciones humanas dadas por su naturaleza animal, en cualidades y
            estados particulares de ser que se ven reflejados en el desarrollo
            de su autoridad interna, derivando en su empoderamiento.
          </p>
          <p className="kankueb-text">
            La palabra kankueb está conformada por tres sílabas:
          </p>
          <ul className="kankueb-list">
            <li>
              <strong>Kan:</strong> que significa Kukulkán o energía potencial y
              transformadora, trascendente. Es un concepto similar al de la
              kundalini tántrica.
            </li>
            <li>
              <strong>Ku:</strong> significa literalmente “corazón”, y se
              refiere a los vórtices o puntos de concentración de energía,
              similares a los chakras de la teoría del tantra.
            </li>
            <li>
              <strong>Eb:</strong> literalmente significa camino, ruta,
              refiriéndose en este caso a canal en el cuerpo por donde fluye la
              energía, concepto similar al de los nadis del yoga.
            </li>
          </ul>
          <p className="kankueb-text">
            Algunos abuelos mayas, entre ellos don Gerardo Barrios, lo han
            definido como el camino maya de trabajo de la energía para expandir
            el corazón, o el sistema de direccionamiento de la energía para la
            activación del corazón.
          </p>
          <p className="kankueb-text">
            Chakra Raja Kan lo define como la disciplina maya para despertar y
            desarrollar el potencial de transformación humano hacia el
            crecimiento, la realización y la trascendencia (kan) a partir del
            proceso de manejo de la consciencia a través de visualizaciones que
            enfocan la mente (ku), en la práctica de movimientos y gestos
            corporales que encauzan la consciencia (eb) por diferentes
            dimensiones de la mente.
          </p>
          <p className="kankueb-text">
            C.R. Kan aclara que, si interpretamos la palabra por el significado
            individual de cada una de sus 3 sílabas, podemos asimilar el kankueb
            maya mesoamericano al tantra de la India, pues involucra los
            conceptos similares a los de la teoría de la kundalini hinduista, es
            decir, chakras, nadis y kundalini.
          </p>

          <h2 className="kankueb-title">¿Cómo es la práctica del Kankueb?</h2>
          <p className="kankueb-text">
            El kankueb involucra la ejecución de movimientos y gestos
            corporales, acompañados de visualizaciones de imágenes o sensaciones
            internas, basadas en los símbolos que hacen parte de la cosmovisión
            maya, con el fin de desarrollar y alcanzar diferentes niveles y
            formas de conexiones mentales que son mencionadas como “dimensiones”
            dentro de la visión chamánica de la tradición.
          </p>
          <p className="kankueb-text">
            Aunque las neurociencias develan cada vez más la naturaleza de éste
            tipo de experiencias cognitivas y mentales, desligándolas de la
            visión chamánica y mística post paleolítica, y atribuyéndolas a los
            eventos del proceso neuronal, Chakra Raja Kan ha recuperado y
            adaptado las prácticas y principios útiles y eficientes para un
            adecuado desarrollo humano a partir del cultivo de las cualidades
            mentales desde el trabajo corporal e imaginativo, ajustando dicho
            desarrollo precisamente al conocimiento científico en la medida de
            las posibilidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kankueb;
