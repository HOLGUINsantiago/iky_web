import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./EvenementInstructorado.css";

const EventList = ({ events }) => {
  const navigate = useNavigate();
  const eventRefs = useRef([]);

  console.log("eventos", events);

  // Navegar a la página del evento seleccionado
  const handleViewMore = (id) => {
    navigate(`/event/${id}`);
  };

  // Calcula el número de días restantes
  const calculateDaysRemaining = (eventEndDate) => {
    const today = new Date();
    const eventEndDateObj = new Date(eventEndDate);

    today.setHours(0, 0, 0, 0);
    eventEndDateObj.setHours(0, 0, 0, 0);

    const timeDiff = eventEndDateObj - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return Math.max(daysRemaining, 0);
  };

  // Calcula la anchura de la barra de progreso
  const calculateProgress = (eventEndDate) => {
    const daysRemaining = calculateDaysRemaining(eventEndDate);
    const maxDays = 30; // Ajustar según el rango máximo esperado
    const progress = (daysRemaining / maxDays) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    eventRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (eventRefs.current) {
        eventRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <div className="event-list">
      <div className="events-grid">
        {events.map((event, index) => {
          const eventStartDate = event.fechas?.fechaInicio;
          const eventEndDate = event.fechas?.fechaFinalTotal;
          const progress = calculateProgress(eventEndDate);

          return (
            <div
              key={event.idEvento}
              className="event-item"
              onClick={() => handleViewMore(event.idEvento)}
              ref={(el) => (eventRefs.current[index] = el)}
            >
              <img
                src={event.imagenCobertura}
                alt={`${event.resumen} Aperçu`}
                className="event-image"
              />
              <h2 className="event-title">{event.resumen}</h2>

              {/* Barra de progreso */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                />
                <div className="time-left-text">
                  {calculateDaysRemaining(eventEndDate)} días restantes
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
