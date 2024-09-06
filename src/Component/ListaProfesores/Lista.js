// ProfessorList.jsx
import React, { useState } from "react";
import "./Lista.css";
import SearchComponent from "./SearchBar.js";
import diplomaPDF from "../../assets/pdf/CERT_IKY_profesor.pdf";

const ProfessorList = ({ professors }) => {
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  // Filtrer les professeurs en fonction du nom, du pays ou de la ville
  const filteredProfessors = professors.filter((professor) => {
    const professorName = professor.name ? professor.name.toLowerCase() : "";
    const professorCountry = professor.country
      ? professor.country.toLowerCase()
      : "";
    const professorCity = professor.city ? professor.city.toLowerCase() : "";
    const searchNameLower = searchName.toLowerCase();
    const searchLocationLower = searchLocation.toLowerCase();

    return (
      professorName.includes(searchNameLower) &&
      (professorCountry.includes(searchLocationLower) ||
        professorCity.includes(searchLocationLower))
    );
  });

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const openModal = (professor) => {
    setSelectedProfessor(professor);
  };

  const closeModal = () => {
    setSelectedProfessor(null);
  };

  return (
    <>
      <p className="text-listaRipey">
        {" "}
        Aquí encontrarás el listado de profesores IKY activos y disponibles para
        que recibas tus clases.
      </p>
      <div className="searchBar-container">
        <SearchComponent
          placeholder="Buscar por nombre"
          onChange={handleSearchNameChange}
        />
        <SearchComponent
          placeholder="Buscar por ubicacion"
          onChange={handleSearchLocationChange}
        />
      </div>

      <div className="professor-list">
        {filteredProfessors.length > 0 ? (
          filteredProfessors.map((professor, index) => (
            <div key={index} className="professor-card">
              <div className="profile-picture">
                <img
                  src={professor.photo}
                  alt={`${professor.name}'s Profile`}
                />
              </div>
              <div className="professor-info">
                <h3>{professor.name}</h3>
                <p>{professor.title}</p>
                <p>
                  {professor.city}, {professor.country}
                </p>
                <button
                  className="styled-button"
                  onClick={() => openModal(professor)}
                >
                  Más información
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay resultados</p> // Message en espagnol lorsque aucun résultat n'est trouvé
        )}
      </div>

      {selectedProfessor && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h2>{selectedProfessor.name}</h2>
              <img
                src={selectedProfessor.photo}
                alt={`${selectedProfessor.name}'s Profile`}
                className="modal-profile-picture"
              />
            </div>
            <p>
              <strong>Título:</strong> {selectedProfessor.title}
            </p>
            <p>
              <strong>Ubicación:</strong> {selectedProfessor.city},{" "}
              {selectedProfessor.country}
            </p>
            <p>
              <strong className="profesores-description">Description : </strong>{" "}
              {selectedProfessor.description}
            </p>
            <p>
              <strong>Código del RIPEY:</strong> {selectedProfessor.codigo}
            </p>

            <a
              href={diplomaPDF} // Utilisation du fichier importé
              download={`diploma_${selectedProfessor.name}.pdf`} // Nom dynamique du fichier
              className="download-link"
            >
              Descargar el diploma RIPEY
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessorList;
