import React, { useState, useEffect, useRef } from "react";
import "./Lista.css";
import SearchComponent from "./SearchBar.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Loader from "../loaders/Loaders.js";

// Correction pour les icônes de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ProfessorList = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCode, setSearchCode] = useState(""); // Ajouter un état pour le code RIPEY
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  // Référence de la carte pour contrôler les zooms
  const mapRef = useRef(null);

  const initialView = {
    center: [0, 0], // Centro inicial (puedes modificarlo si quieres otro lugar)
    zoom: 2,       // Nivel de zoom inicial para un mapa deszoomeado
  };

  // Fonction pour récupérer les données des professeurs depuis l'API
  const fetchProfessorsWithRetries = async (retries = 100, delay = 10000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch("https://gateway-delicate-dust-1135.fly.dev/api/profesores/public/diplomado");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Datos obtenidos:", data);
        setProfessors(data);
        setLoading(false);
        return; // Salir si todo está bien
      } catch (error) {
        console.error(`Intento ${attempt} fallido al obtener profesores:`, error);
        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, delay)); // Esperar antes del próximo intento
        }
      }
    }
    console.error("Fallaron todos los intentos para obtener los profesores.");
  };


  // Appeler la fonction fetchProfessors quand le composant est monté
  useEffect(() => {
    fetchProfessorsWithRetries();
  }, []);

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleSearchCodeChange = (e) => {
    setSearchCode(e.target.value);
  };

  const openModal = (professor) => {
    setSelectedProfessor(professor);
  };

  const closeModal = () => {
    setSelectedProfessor(null);
  };

  const filteredProfessors = Array.isArray(professors) && professors.length > 0
    ? professors.filter((professor) => {
      const fullName = `${professor?.nombre ?? ""} ${professor?.prenom ?? ""}`.toLowerCase();
      const code = (professor?.codigo ?? "").toLowerCase();
      const address = (professor?.adress ?? "").toLowerCase();

      return (
        (fullName.includes(searchName.toLowerCase()) || searchName === "") &&
        (address.includes(searchLocation.toLowerCase()) || searchLocation === "") &&
        (code.includes(searchCode.toLowerCase()) || searchCode === "")
      );
    })
    : [];



  // Gérer le zoom automatique en fonction des résultats de la recherche
  useEffect(() => {
    if (filteredProfessors.length > 0 && mapRef.current) {
      const bounds = filteredProfessors
        .filter((professor) => professor?.latitud != null && professor?.longitud != null)
        .map((professor) => [professor.latitud, professor.longitud]);

      const map = mapRef.current;
      map.fitBounds(bounds); // Ajuste la vue de la carte pour inclure tous les marqueurs
    }
  }, [filteredProfessors]);

  // Afficher un message de chargement si les données ne sont pas encore récupérées
  if (loading) {
    return (
      <>
        <div className="loader">
          <Loader />;
        </div>
      </>
    )
  }

  return (
    <>
      <p className="text-listaRipey">
        Aquí encontrarás el listado de profesores IKY activos y disponibles para
        que recibas tus clases.
      </p>
      <div className="searchBar-container">
        <SearchComponent
          placeholder="Buscar por nombre"
          onChange={handleSearchNameChange}
        />
        <SearchComponent
          placeholder="Buscar por ubicación"
          onChange={handleSearchLocationChange}
        />
        <SearchComponent
          placeholder="Buscar por código RIPEY"
          onChange={handleSearchCodeChange}
        />
      </div>

      <div className="map-container-ripey">
        <MapContainer
          center={[0, 0]} // Coordonnées initiales (centre du monde)
          zoom={2}
          minZoom={2}
          maxZoom={18} // Niveau de zoom maximal (empêche de zoomer plus loin)
          style={{
            height: "60vh",
            width: "70%",
          }}
          ref={mapRef} // Référence pour accéder à la carte
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredProfessors.map((professor, index) => (
            <Marker
              key={index}
              position={[professor.latitud, professor.longitud]}
            >
              <Popup>
                <div>
                  <h3>{professor.nombre}</h3>
                  <p>{professor.titulo}</p>
                  <p>{professor.adress}</p>
                  <button
                    className="styled-button"
                    onClick={() => openModal(professor)}
                  >
                    Más información
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Modale de détails */}
        {selectedProfessor && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button-lista" onClick={closeModal}>
                &times;
              </button>
              <div className="modal-header">
                <h2>{selectedProfessor.nombre}</h2>
                {/* Vérification de la présence de la photo */}
                {selectedProfessor.photo && (
                  <img
                    src={selectedProfessor.photo}
                    alt={`${selectedProfessor.nombre}'s Profile`}
                    className="modal-profile-picture"
                  />
                )}
              </div>
              <p>
                <strong>Título:</strong> {selectedProfessor.titulo}
              </p>
              <p>
                <strong>Ubicación:</strong> {selectedProfessor.adress}
              </p>
              <p>
                <strong>Egresado del : {selectedProfessor.evento}</strong>
              </p>
              <p>
                <strong>Código del RIPEY :</strong> {selectedProfessor.codigo}
              </p>

              {selectedProfessor.description && (
                <p>
                  <strong>Description :</strong> {selectedProfessor.description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfessorList;
