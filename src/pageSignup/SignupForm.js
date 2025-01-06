import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

function SignupForm() {
  const [nom, setNombre] = useState("");
  const [prenom, setApellido] = useState("");
  const [user, setNombreUsuario] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [naissance, setFechaNacimiento] = useState("");
  const [ubicacionDada, setDireccion] = useState("");
  const [errorContrasena, setErrorContrasena] = useState("");
  const [modalError, setModalError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate(); // Déclaration de useNavigate pour la redirection
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleCreateCuenta = () => {
    const data = {
      nom,
      prenom,
      user,
      mail,
      password,
      naissance,
      ubicacionDada,
    };

    fetch(apiUrl + "/api/estudiantes/registar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Échec de l'envoi des données.");
        }
        return response.json();
      })
      .then((data) => {
        setModalError(false);
        setModalVisible(true);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setModalError(true);
        setModalVisible(true); // Afficher le modal en cas d'erreur
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmarContrasena) {
      setErrorContrasena("Las contraseñas no coinciden.");
      return;
    }
    setErrorContrasena(""); // Effacer le message d'erreur
    handleCreateCuenta();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigate("/"); // Redirige vers la page d'accueil après la fermeture du modal
  };

  return (
    <div className="container">
      <span
        className="close-btn-signup"
        onClick={() => navigate("/")} // Redirection vers la page d'accueil
      >
        &#10005;
      </span>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <h1>Crear una cuenta</h1>
        <p>¡Bienvenido! Regístrate para no perderte nada.</p>
        <div className="input-group">
          <div className="name-container">
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              value={nom}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              value={prenom}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <input
            type="text"
            id="nombreUsuario"
            placeholder="Nombre de usuario"
            value={user}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Correo electrónico"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="contrasena"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <input
            type="password"
            id="confirmarContrasena"
            placeholder="Confirmar contraseña"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
          {errorContrasena && (
            <p className="error-message">
              <span className="error-icon">❌</span> {errorContrasena}
            </p>
          )}
          <input
            type="date"
            id="fechaNacimiento"
            placeholder="Fecha de nacimiento"
            value={naissance}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
          <input
            type="text"
            id="direccion"
            placeholder="Dirección postal (Calle ..., Ciudad, Pais)"
            value={ubicacionDada}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <button className="button-signupForm" type="submit">
          Crear una cuenta
        </button>
      </form>

      {modalVisible && (
        <div className="modal-signup">
          <div className="modal-content-signup">
            <h2>¡Registro exitoso!</h2>
            <p>
              Hemos enviado un correo de confirmación a la siguiente dirección:{" "}
              <strong>{mail}</strong>
            </p>

            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
