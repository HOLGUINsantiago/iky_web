import React, { useState, useEffect, useRef } from "react";
import "./Lista.css";
import SearchComponent from "./SearchBar.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Loading from "../../pageRipey/Ripey/Loading.js";

// Correction icônes Leaflet
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
  const [searchCode, setSearchCode] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const mapRef = useRef(null);

  const fetchProfessors = async () => {
    if (window.location.hostname === "localhost") {
      console.log("Modo local: no se carga la lista de profesores.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://gateway-delicate-dust-1135.fly.dev/api/profesores/public/diplomado",
      );
      const data = await response.json();

      // Vérification si c’est bien un tableau
      if (Array.isArray(data)) {
        setProfessors(data);
      } else {
        console.warn("Les données reçues ne sont pas un tableau :", data);
        setProfessors([]); // fallback vide
      }
    } catch (error) {
      console.error("Error al obtener los profesores:", error);
      setProfessors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfessors();
  }, []);

  const handleSearchNameChange = (e) => setSearchName(e.target.value || "");
  const handleSearchLocationChange = (e) =>
    setSearchLocation(e.target.value || "");
  const handleSearchCodeChange = (e) => setSearchCode(e.target.value || "");

  const openModal = (professor) => setSelectedProfessor(professor);
  const closeModal = () => setSelectedProfessor(null);

  const filteredProfessors = Array.isArray(professors)
    ? professors.filter((professor) => {
        const fullName =
          `${professor?.nombre || ""} ${professor?.prenom || ""}`.toLowerCase();
        const code = (professor?.codigo || "").toLowerCase();
        const address = (professor?.adress || "").toLowerCase();

        return (
          fullName.includes(searchName.toLowerCase()) &&
          address.includes(searchLocation.toLowerCase()) &&
          code.includes(searchCode.toLowerCase())
        );
      })
    : [];

  useEffect(() => {
    if (filteredProfessors.length > 0 && mapRef.current) {
      const bounds = filteredProfessors
        .filter(
          (p) =>
            typeof p.latitud === "number" && typeof p.longitud === "number",
        )
        .map((p) => [p.latitud, p.longitud]);

      if (bounds.length) {
        mapRef.current.fitBounds(bounds);
      }
    }
  }, [filteredProfessors]);

  if (loading) {
    return <Loading />;
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
        {loading ? (
          <Loading />
        ) : (
          <MapContainer
            center={[0, 0]}
            zoom={2}
            minZoom={2}
            maxZoom={18}
            style={{ height: "60vh", width: "70%" }}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredProfessors.map((professor, index) => (
              <Marker
                key={index}
                position={[professor?.latitud || 0, professor?.longitud || 0]}
              >
                <Popup>
                  <div>
                    <h3>{professor?.nombre || "Sin nombre"}</h3>
                    <p>{professor?.titulo || "Sin título"}</p>
                    <p>{professor?.adress || "Sin dirección"}</p>
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
        )}

        {selectedProfessor && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button-lista" onClick={closeModal}>
                &times;
              </button>
              <div className="modal-header">
                <h2>{selectedProfessor?.nombre || "Profesor/a"}</h2>
                {selectedProfessor?.photo && (
                  <img
                    src={selectedProfessor.photo}
                    alt={`${selectedProfessor.nombre}'s Profile`}
                    className="modal-profile-picture"
                  />
                )}
              </div>
              <p>
                <strong>Título:</strong>{" "}
                {selectedProfessor?.titulo || "No disponible"}
              </p>
              <p>
                <strong>Ubicación:</strong>{" "}
                {selectedProfessor?.adress || "No disponible"}
              </p>
              <p>
                <strong>Egresado del:</strong>{" "}
                {selectedProfessor?.evento || "No especificado"}
              </p>
              <p>
                <strong>Código del RIPEY:</strong>{" "}
                {selectedProfessor?.codigo || "N/A"}
              </p>
              {selectedProfessor?.description && (
                <p>
                  <strong>Descripción:</strong> {selectedProfessor.description}
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
