import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Evenement.css";
import ImagenBlackblaze from "../../tools/ImagenBlackblaze";

const EventList = ({ events }) => {
  const navigate = useNavigate();
  const eventRefs = useRef([]);

  // Fonction handleViewMore pour naviguer à l'événement sélectionné
  const handleViewMore = (id) => {
    navigate(`/event/${id}`);
  };


  // Fonction pour calculer le nombre de jours restants
  const calculateDaysRemaining = (eventDate) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);

    // Ignorer les heures/minutes
    today.setHours(0, 0, 0, 0);
    eventDateObj.setHours(0, 0, 0, 0);

    const timeDiff = eventDateObj - today;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Calculer la différence en jours
    return Math.max(daysRemaining, 0); // Toujours un minimum de 0
  };
  // Fonction pour calculer la largeur de la barre de progression
  const calculateProgress = (eventDate) => {
    const daysRemaining = calculateDaysRemaining(eventDate);
    const maxDays = 30; // Vous pouvez ajuster cela selon le nombre de jours maximal avant un événement (par exemple, un mois)
    const progress = (daysRemaining / maxDays) * 100;
    return Math.min(progress, 100); // Assurez-vous que la barre ne dépasse pas 100%
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
          const progress = calculateProgress(event.eventDate); // Récupération du pourcentage de progression

          return (
            <div
              key={event.id}
              className="event-item"
              onClick={() => handleViewMore(event.id)} // Appel de la navigation
              ref={(el) => (eventRefs.current[index] = el)} // Associe la référence à la carte
            >
              <ImagenBlackblaze
                src={event.imagenCobertura}
                alt={`${event.resumen || "Evento"} Imagen`}
                className="event-image"
              />
              <h2 className="event-title">{event.title}</h2>

              {/* Barre de progression */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }} // Applique la largeur calculée
                />
                <div className="time-left-text">
                  {calculateDaysRemaining(event.eventDate)} jours restants
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
