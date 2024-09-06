// App.js
import React, { useState } from "react";
import "./NuestroProfesores.css";
import Carlos from "../../assets/images/profil/IMG_9535.jpg";
import Simon from "../../assets/images/profil/Simon.jpg";
import Modal from "./Modal"; // Assurez-vous que ce chemin est correct

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
    photo: "photo3.jpg",
    name: "Albert Einstein",
    profession: "Professeur de Théorie de la Relativité",
    bio: "Albert Einstein est célèbre pour sa théorie de la relativité et ses contributions à la physique théorique.",
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
        <Modal
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
