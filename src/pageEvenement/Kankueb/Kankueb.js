import React from "react";
import "./Kankueb.css";
import Dance from "../../assets/images/dance.JPG"; // Assurez-vous que le chemin est correct
import Image1 from "../../assets/images/IMG_5834.JPG";
import ExplicationKankueb from "../ExplicationKanueb/ExplicationKankueb";

const Kankueb = () => {
  return (
    <div className="kankueb-container">
      <div className="kankueb-header">
        {/* Section avec les 3 images alignées à gauche */}
        <div className="kankueb-image-container">
          <img src={Image1} alt="Image 1" className="kankueb-image" />
          <img src={Dance} alt="Image 2" className="kankueb-image" />
        </div>

        <div className="kankueb-content">
          <h2 className="kankueb-title">¿Qué es el Kankueb?</h2>
          <p className="kankueb-text">
            Basado en la reinterpretación de la cosmovisión maya realizada por
            el Aj Qij (guía espiritual maya) del linaje del Kukulkán, C.R. Kan,
            el kankueb es un sistema práctico para la transformación de la
            naturaleza animal del ser humano hacia cualidades mentales, físicas,
            emocionales y antropocentes más sofisticadas y refinadas, que
            redundan en un mayor desarrollo de su autoridad interna,
            empoderamiento y realización personal. <br />
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
        </div>
      </div>

      <div className="kankueb-body">
        <p className="kankueb-text">
          Algunos abuelos mayas, entre ellos don Gerardo Barrios, lo han
          definido como el camino maya de trabajo de la energía para expandir el
          corazón, o el sistema de direccionamiento de la energía para la
          activación del corazón.
        </p>
        <p className="kankueb-text">
          Chakra Raja Kan lo define como la disciplina maya para despertar y
          desarrollar el potencial de transformación humano hacia el
          crecimiento, la realización y la trascendencia (kan) a partir del
          proceso de manejo de la consciencia a través de visualizaciones que
          enfocan la mente (ku), en la práctica de movimientos y gestos
          corporales que encauzan la consciencia (eb) por diferentes dimensiones
          de la mente.
        </p>
        <p className="kankueb-text">
          C.R. Kan aclara que, si interpretamos la palabra por el significado
          individual de cada una de sus 3 sílabas, podemos asimilar el kankueb
          maya mesoamericano al tantra de la India, pues involucra los conceptos
          similares a los de la teoría de la kundalini hinduista, es decir,
          chakras, nadis y kundalini.
        </p>

        <p className="kankueb-text">
          La práctica del kankueb involucra movimientos y gestos corporales
          acompañados de elaboradas visualizaciones y/o sensaciones internas
          basadas en los símbolos que hacen parte de la cosmovisión maya, que
          estimulan y regulan el sistema nervioso, propiciando un mayor control
          y desarrollo del movimiento y la quietud corporal, así como un proceso
          mental y cognitivo más estable, encausado, armonioso, creativo y
          claro. El kankueb ayuda a desarrollar y alcanzar diferentes niveles y
          formas de conexiones mentales, que son mencionadas como “dimensiones”
          dentro de la visión chamánica de la tradición. <br />
          Todo lo anterior revierte también en un mayor control del proceso
          emocional, y el desarrollo de la capacidad de desarrollar sentimientos
          y estados de ser más adecuados para el logro de felicidad y la
          realización humana.
        </p>

        <h2 className="kankueb-title">¿Cómo es la práctica del Kankueb?</h2>
        <p className="kankueb-text">
          El kankueb involucra la ejecución de movimientos y gestos corporales,
          acompañados de visualizaciones de imágenes o sensaciones internas,
          basadas en los símbolos que hacen parte de la cosmovisión maya, con el
          fin de desarrollar y alcanzar diferentes niveles y formas de
          conexiones mentales que son mencionadas como “dimensiones” dentro de
          la visión chamánica de la tradición.
        </p>
        <p className="kankueb-text">
          Aunque las neurociencias develan cada vez más la naturaleza de éste
          tipo de experiencias cognitivas y mentales, desligándolas de la visión
          chamánica y mística post paleolítica, y atribuyéndolas a los eventos
          del proceso neuronal, Chakra Raja Kan ha recuperado y adaptado las
          prácticas y principios útiles y eficientes para un adecuado desarrollo
          humano a partir del cultivo de las cualidades mentales desde el
          trabajo corporal e imaginativo, ajustando dicho desarrollo
          precisamente al conocimiento científico en la medida de las
          posibilidades.
        </p>

        <h2 className="kankueb-title">El kankueb, resultado de une profecía</h2>
        <p className="kankueb-text">
          En la mitología maya existe una profecía que establece que el punto de
          mayor concentración de energía de la tierra, denominado kaokán, estuvo
          ubicado en los Himalayas durante 5200 años. A partir de 1950 comenzó
          su recorrido hacia los Andes americanos, para asentarse
          definitivamente y durante los próximos 5200 años desde el año 2012.
          Por lo anterior, la misma fuerza que rigió el gran desarrollo
          espiritual alrededor de los Himalayas, se desarrolla ahora en Sur
          América. <br /> Basados en esta leyenda, ancianos sabedores del mundo
          maya guatemalteco ordenaron a don Carlos y don Gerardo Barrios (guías
          espirituales mayas) dirigir y concretar la integración del
          conocimiento espiritual de oriente con el conocimiento espiritual
          indígena americano. Este proceso debía desarrollarse principalmente
          con personas de Colombia por ser la “cabeza” del ala espiritual
          (Suramérica) que conforma el águila que es el continente americano.
          <br />
          Así fueron preparadas varias personas en el tradicional “sac be”, el
          camino blanco de los mayas. Como caminante del sac be y discípulo de
          los dos guías mayas mencionados, C. R. Kan atendió sus instrucciones,
          dedicando su vida a recuperar, desarrollar, sistematizar y enseñar el
          kankueb maya, de ellos aprendido, integrándolo además con el yoga
          tántrico de la India para su enseñanza en el mundo actual.
          <br />
        </p>

        <h2 className="kankueb-title">Fundamentos del kankueb</h2>
        <p className="kankueb-text">
          El kankueb se basa en dos grandes fundamentos.
        </p>
        <p className="kankueb-text">
          1. El calendario maya y la cosmovisión que lo soporta: se utilizan
          como guía diaria para el autoconocimiento, así como para el cultivo y
          afianzamiento de principios éticos, y la sistematización de las
          prácticas del kankueb que ayudan a desarrollar las potencialidades del
          cuerpo y de la mente.
        </p>
        <p className="kankueb-text">
          2. Las técnicas y practicas del kankueb, a saber:
        </p>
        <ExplicationKankueb />
        <p className="kankueb-text">
          Calendario maya y kankueb interactúan para mejorar de manera
          ostensible los procesos personales en general. Sus técnicas se basan
          en el conocimiento ancestral de lo que se denomina como el “linaje del
          Kukulkán”, del cual C.R. Kan es actualmente uno de sus regentes, y que
          sólo encuentras sistematizados de esta manera en su escuela y,
          obviamente, esta página web.
        </p>
      </div>
    </div>
  );
};

export default Kankueb;
