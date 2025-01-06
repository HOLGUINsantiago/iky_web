import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoginComponent from "../../pageLogin/LoginForm"; // Asegúrate de que esta ruta sea correcta
import "./EventDetails.css";
import PaymentModal from "./inscription/Paiement";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../../pageHome/Carousel";

const EventDetail = ({ events }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentFormVisible, setPaymentFormVisible] = useState(false);
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };

  const event = events ? events.find((e) => e.idEvento === parseInt(id)) : null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    console.log(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const formattedPrice = event.precio === 0 ? "Gratis" : `${event.precio} COP`;

  const handleInscription = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      if (event.precio === 0) {
        setShowConfirmation(true);
      } else {
        setPaymentFormVisible(true);
      }
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    if (event.precio === 0) {
      setShowConfirmation(true);
    } else {
      setPaymentFormVisible(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowConfirmation(false);
    setPaymentFormVisible(false);
  };

  return (
    <div className="event-detail-container">
      <div
        className="event-detail"
        style={{ backgroundImage: `url(${event.imagenCobertura})` }}
      >
        <div className={`event-info-container ${scrolling ? "scrolled" : ""}`}>
          <h1>{event.resumen}</h1>
          <p>
            <strong>Ubicación:</strong>{" "}
            {event.ubicacion?.adress || "Por definir"}
          </p>

          <p>
            <strong>Precio:</strong> {formattedPrice}
          </p>
          <p>
            <strong>Detalles:</strong> {event.detalles}
          </p>
          {isMobile && (
            <div className="button">
              <button className="register-button" onClick={handleInscription}>
                Inscríbete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="content-below">
        {!isMobile && (
          <button className="register-button" onClick={handleInscription}>
            Inscríbete
          </button>
        )}

        <div className="carousel-event">
          <Carousel images={Object.values(event.imagenes)} />
        </div>
      </div>

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

      {/* Mensaje de confirmación */}
      {showConfirmation && (
        <div className="modal">
          <div className="modal-content">
            <p>Un email de confirmación te ha sido enviado.</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      )}

      {/* Formulario de pago */}
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
