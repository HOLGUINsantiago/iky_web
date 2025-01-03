import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginComponent from "../../pageLogin/LoginForm"; // Assurez-vous que ce chemin est correct pour votre formulaire de connexion
import "./EventDetails.css";
import PaymentModal from "../NewEvenement/inscription/Paiement.js";

const EventDetail = ({ events }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // Pour afficher ou masquer le formulaire de login
  const [showConfirmation, setShowConfirmation] = useState(false); // Pour afficher le message de confirmation
  const [paymentFormVisible, setPaymentFormVisible] = useState(false); // Pour afficher le formulaire de paiement
  const { id } = useParams();

  const event = events ? events.find((e) => e.id === parseInt(id)) : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!events) {
    return <div>Cargando eventos...</div>;
  }

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  // Afficher "Gratis" si le prix est 0, sinon afficher le prix avec "COP"
  const formattedPrice = event.price === 0 ? "Gratis" : `${event.price} COP`;

  // Lorsque l'utilisateur clique sur "Iniciar sesión", afficher le formulaire de connexion
  const handleInscription = () => {
    if (!isLoggedIn) {
      setShowLogin(true); // Afficher le formulaire de connexion
    } else {
      if (event.price === 0) {
        // Si l'événement est gratuit, afficher un message de confirmation
        setShowConfirmation(true);
      } else {
        // Si l'événement est payant, afficher le formulaire de paiement
        setPaymentFormVisible(true);
      }
    }
  };

  // Lorsque l'utilisateur se connecte avec succès, mettre à jour l'état
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    if (event.price === 0) {
      setShowConfirmation(true);
    } else {
      setPaymentFormVisible(true);
    }
  };

  // Gérer la déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowConfirmation(false);
    setPaymentFormVisible(false);
  };

  return (
    <div className="event-detail-container">
      {/* Image de fond */}
      <div
        className="event-detail"
        style={{ backgroundImage: `url(${event.backgroundImage})` }}
      >
        <div className={`event-info-container ${scrolling ? "scrolled" : ""}`}>
          <h1>{event.title}</h1>
          <p>
            <strong>Ubicación:</strong> {event.location || "Por definir"}
          </p>
          <p>
            <strong>Precio:</strong> {formattedPrice}
          </p>
          <p>
            <strong>Detalles:</strong> {event.details}
          </p>
        </div>
      </div>

      {/* Contenu dessous */}
      <div className="content-below">
        <img src={event.flyerImage} alt="Flyer" className="flyer-image" />
        <button className="register-button" onClick={handleInscription}>
          Inscríbete
        </button>
      </div>

      {/* Affichage du formulaire de login dans une modale */}
      {showLogin && (
        <div className="modal-event">
          <div className="modal-event-content">
            <button
              className="close-button"
              onClick={() => setShowLogin(false)}
            >
              X
            </button>
            <LoginComponent onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}

      {/* Affichage du message de confirmation après inscription gratuite */}
      {showConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <p>Un email de confirmation vous a été envoyé à votre adresse.</p>
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
        </div>
      )}

      {/* Affichage du formulaire de paiement si l'événement est payant */}
      {paymentFormVisible && isLoggedIn && (
        <div className="modal-event">
          <div className="modal-event-content">
            <PaymentModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
