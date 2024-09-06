import React, { useState, useEffect } from "react";
import "./EventDetails.css";
import { useParams } from "react-router-dom";

const EventDetail = ({ events }) => {
  const [scrolling, setScrolling] = useState(false);
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <div className="event-detail-container">
      <div
        className="event-detail"
        style={{ backgroundImage: `url(${event.backgroundImage})` }}
      >
        <div className={`event-info-container ${scrolling ? "scrolled" : ""}`}>
          <h1>{event.title}</h1>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <p>{event.details}</p>
        </div>
      </div>
      <div className="content-below">
        <img src={event.flyerImage} alt="Flyer" className="flyer-image" />
        <button className="register-button">Inscríbete</button>
      </div>
    </div>
  );
};

export default EventDetail;
