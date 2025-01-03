import React from "react";
import "./Biografia.css"; // Importer le fichier CSS pour les styles

const Biographie = ({ nom, titre, photoUrl }) => {
  return (
    <div className="biographie-container">
      <img src={photoUrl} alt={`${nom}'s photo`} className="biographie-photo" />
      <div className="biographie-text">
        <h3 className="biographie-titre">{titre}</h3>

        <h4 className="biographie-section-title">Experiencia como profesor</h4>
        <p className="biographie-section-text">
          C.R.Kan inició en marzo de 2004 sus labores como maestro de yoga en
          Bogotá, donde un año atrás había ya fundado ISHKA CENTER. Establecido
          en Cali desde 2005, a donde trasladó ISHKA CENTER a su sede actual en
          Pance, inició en 2009 la dirección de su primer profesorado anual de
          yoga.
          <br />
          <br />
          En 2017 inició la dirección del primer instructorado internacional de
          yoga integral y meditación clásica y moderna, la cual ejerce hasta la
          actualidad. Desde entonces ha entrenado y formado a más de 350
          instructores y profesores de yoga, varios de ellos hasta un nivel
          avanzado, empleando la metodología del SISTEMA IKY - ISHKA KANKUEB
          YOGA®, de su autoría.
          <br />
          <br />
          C.R. Kan se ha convertido en un maestro influyente en el yoga en el
          planeta, al proponer a través del Sistema IKY una metodología
          revolucionaria y de avanzada.
          <br />
          <br />
          Su aporte al desarrollo y evolución del yoga se basa en la inclusión
          de la biomecánica y la ciencia del movimiento para la práctica de
          asanas, principalmente en la aplicación de sofisticados Drishtis
          (técnicas de atención meditativa) durante la práctica postural, de
          vinyasas, kriyas, pranayamas, mudras y bandhas. En la misma línea, ha
          implementado un sistema de meditación más fácil y eficiente. Todo lo
          anterior lo ha enriquecido y profundizado a partir de las técnicas del
          kankueb maya aprendido de sus maestros mayas, los hermanos don Carlos
          Barrios y don Gerardo Kanek Barrios.
          <br />
          <br />
          Por instrucciones del Aj Qij (guía espiritual maya) don Carlos
          Barrios, ha desarrollado un camino espiritual complementario entre el
          tantra kundalini yoga de su gurú Swami Satyananda Saraswati de la
          Bihar School of Yoga de India, y el Sac Be recibido de sus maestros
          mayas don Carlos y don Gerardo Kanek Barrios. Éste último le encomendó
          desarrollar y enseñar las técnicas del kankueb: tecnología de trabajo
          espiritual a partir del ejercicio energético y mental basado en la
          cosmovisión maya.
        </p>

        <h4 className="biographie-section-title">
          Impulsor de Nuevas Iniciativas
        </h4>
        <p className="biographie-section-text">
          C.R. Kan cofundó en 2009 JOVITA´S HOSTEL, el primer hostal caleño con
          oferta de clases yoga y salsa gratuitas para sus huéspedes, apoyando
          así desde el sector privado, el proyecto gubernamental de promoción de
          la salsa caleña para extranjeros.
          <br />
          <br />
          Inició en 2013 la modalidad de oferta de clases gratuitas de yoga y
          Feldenkrais en un centro comercial en la ciudad de Cali: Unicentro, y
          desde entonces otros centros comerciales replicaron la oferta,
          democratizando y promoviendo así el acceso a estas practicas.
          <br />
          <br />
          A mediados de 2014 dirigió la creación de la ASOCIACIÓN COLOMBIANA DE
          MAESTROS DEL MÉTODO FELDENKRAIS, redactando sus estatutos y demás
          normatividad interna, ejerciendo para ello la presidencia del ente
          para su primer período de existencia.
          <br />
          <br />
          En diciembre de 2014 organizó el primer festival de yoga en Cali, el
          ISHKA FEST, al cual asistieron más de 1100 personas, lo cual también
          fue replicado posteriormente por otras escuelas y organizaciones de
          yoga.
          <br />
          <br />
          Para enero de 2017 creó por primera vez en Colombia, el modelo de
          instructorado de yoga de 21 días de duración, diseñando una exclusiva
          y eficiente metodología cuya exitosa aplicación continúa vigente. Este
          proyecto es el que mejores y más numerosas evaluaciones tiene en la
          web.
          <br />
          <br />
          En 2019 creó el programa para extranjeros: YES – YOGA, ESPAÑOL Y
          SALSA, que actualmente continúa dirigiendo.
          <br />
          <br />
          En 2021 creó SHAMANIKY, una jornada de experiencias basadas en la
          cosmovisión y el kankueb maya.
          <br />
          <br />
          Además de sistematizar las técnicas del Kankueb maya, creó el KANKUEB
          DANCE, una exclusiva y novedosa metodología de trabajo del movimiento
          corporal danzado, basada principalmente en las visualizaciones propias
          del Kankueb.
          <br />
          <br />
          También ha creado bajo el nombre de IKYNESIS, un desarrollo del Método
          Feldenkrais® basado en las visualizaciones del yoga tántrico y el
          kankueb como forma de profundizar en el movimiento humano.
          <br />
          <br />
          Finalmente, su máxima creación, el SISTEMA IKY – ISHKA KANKUEB YOGA®,
          es el primer yoga originario de Colombia y uno de los pocos creados y
          desarrollados en Latinoamérica; al mismo tiempo, es el más
          revolucionario y moderno en el planeta.
        </p>

        <h4 className="biographie-section-title">Vida Actual</h4>
        <p className="biographie-section-text">
          Actualmente C.R. KAN dirige los profesorados semestrales e
          instructorados internacionales de 21 días en ISHKA CENTER en Cali –
          Colombia.
          <br />
          <br />
          Imparte clases permanentes de ISHKA KANKUEB YOGA®, IKYNESIS y MÉTODO
          FELDENKRAIS; lidera además profundizaciones, retiros y talleres de
          temas específicos de yoga y movimiento, el programa YES – YOGA ESPAÑOL
          Y SALSA y SHAMANIKY.
          <br />
          <br />
          Imparte además sesiones individuales de IF - Integración Funcional del
          Método Feldenkrais® y es el actual regente de una de las ramas del
          antiguo linaje del Kukulkán.
          <br />
          <br />
          Continuando con su iniciativa de democratizar el acceso al
          conocimiento del yoga, ha creado una serie de podcasts y clases de
          yoga de acceso libre a través de diferentes plataformas como{" "}
          <a
            href="https://www.youtube.com/@chakrarajakan"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            YouTube
          </a>{" "}
          y{" "}
          <a
            href="https://www.instagram.com/yoga.iky/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram.
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Biographie;
