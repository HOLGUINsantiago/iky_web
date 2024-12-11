// App.js
import React, { useState } from "react";
import "./NuestroProfesores.css";
import Carlos from "../../assets/images/profil/IMG_9535.jpg";
import Simon from "../../assets/images/profil/Simon.jpg";
import Jose from "../../assets/images/profil/Jose.jpg";
import Marie from "../../assets/images/profil/Marie.jpg";
import Katherine from "../../assets/images/profil/Katherine.jpg";

import ModalIshka from "./ModalIshka.js"; // Assurez-vous que ce chemin est correct

const professors = [
  {
    photo: Carlos,
    name: "Carlos HOLGUIN",
    profession: "Maestro de Yoga",
    bio: "",
  },
  {
    photo: Simon,
    name: "Simon Roa",
    profession: "Profesor de Yoga",
    bio: "Licenciado en lenguas extranjeras aplicadas a la enseñanza y la traducción. Traductor simultáneo.Profesor de Ishka Kankueb Yoga y meditación con énfasis en movimiento humano y estrategias de encauzamiento de la mente desde el 2017. Ha traducido y enseñado en más de 20 entrenamientos internacionales para instructores de yoga en IKY y del programa YES de Yoga, Español y Salsa.",
  },
  {
    photo: Jose,
    name: "Jose Armando Valencia",
    profession: "Profesor IKY de yoga",
    bio: "Profesor IKY de yoga integral y meditación con énfasis en biomecánica y kankueb maya desde 2019. Egresado tecnología profesional del deporte. Escuela Nacional del deporte en 2015.",
  },
  {
    photo: Marie,
    name: "Maria Isabel López",
    profession: "Profesor IKY de yoga",
    bio: "Ingeniera Industrial egresada de la Universidad del Valle. Profesora de Ishka Kankueb Yoga con énfasis en biomecánica y kankueb desde el año 2020. Mentora en relacionamiento de parejas y co-creadora del entrenamiento *SexPowerMent.",
  },
  {
    photo: Katherine,
    name: "Katherine Garcia Amaya",
    profession: "Profesor IKY de yoga",
    bio: "Licenciada en artes escénicas. Profesora IKY de yoga integral y meditación con énfasis en kankueb y biomecánica desde 2021. Docente de artes y yoga para niños. Profesora de danza meditativa.",
  },
];

function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = (professor) => {
    setModalData(professor);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container-nuestroProfesores">
      {professors.map((professor, index) => (
        <div
          key={index}
          data-text="Github"
          style={{ "--r": `${index * 15}` }}
          className="glass"
        >
          <div className="professor-card-nuestroProfesores">
            <img
              src={professor.photo}
              alt={`Photo de ${professor.name}`}
              className="professor-photo-nuestroProfesores"
            />
            <div className="professor-info-nuestroProfesores">
              <h2 className="professor-name-nuestroProfesores">
                {professor.name}
              </h2>
              <p className="professor-profession-nuestroProfesores">
                {professor.profession}
              </p>
              <button
                className="see-more-button-nuestroProfesores"
                onClick={() => openModal(professor)}
              >
                Voir plus
              </button>
            </div>
          </div>
        </div>
      ))}

      {modalData && (
        <ModalIshka
          className="modal-profesores"
          isOpen={!!modalData}
          onClose={closeModal}
          professor={modalData}
        />
      )}
    </div>
  );
}

export default App;
