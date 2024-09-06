import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Evenement.css";

const EventList = ({ events }) => {
  const navigate = useNavigate();
  const eventRefs = useRef([]); // Pour stocker les références des cartes d'événements

  // Fonction pour calculer le temps restant
  const calculateTimeLeft = (eventDate) => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  // Fonction pour calculer la largeur de la jauge en fonction des jours restants
  const calculateProgressWidth = (daysLeft) => {
    const maxDays = 100;
    const percentage = Math.min((daysLeft / maxDays) * 100, 100);
    return `${percentage}%`;
  };

  // Fonction handleViewMore pour naviguer à l'événement sélectionné
  const handleViewMore = (id) => {
    navigate(`/event/${id}`);
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
          const timeLeft = calculateTimeLeft(event.eventDate);
          return (
            <div
              key={event.id}
              className="event-item"
              onClick={() => handleViewMore(event.id)}
              ref={(el) => (eventRefs.current[index] = el)} // Associe la référence à la carte
            >
              <img
                src={event.eventImage}
                alt={`${event.title} Aperçu`}
                className="event-image"
              />
              <h2 className="event-title">{event.title}</h2>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: calculateProgressWidth(timeLeft.days) }}
                >
                  <span className="time-left-text">
                    {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
                  </span>
                </div>
              </div>
              <div className="hover-overlay">Voir plus</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
