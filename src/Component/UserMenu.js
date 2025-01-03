import React, { useState, useEffect, useRef } from "react";
import "./UserMenu.css";

const UserMenu = ({
  user,
  handleLogout,
  toggleMenu,
  notificationsCount,
  eventsCount,
  upcomingCourseTime,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Utilisation de useRef pour référencer le conteneur du menu
  const menuRef = useRef(null);

  // Fonction pour afficher/masquer le menu
  const handleMenuClick = () => {
    setMenuVisible(!menuVisible); // Bascule entre afficher et masquer le menu
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Fermer le menu si on clique à l'extérieur du menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false); // Ferme le menu si on clique en dehors
      }
    };

    // Ajout de l'écouteur d'événements pour les clics sur le document
    document.addEventListener("click", handleClickOutside);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu-container">
      <div
        className={`user-dropdown sh`}
        ref={menuRef} // Référence sur le conteneur du menu
      >
        <button className="close-btn-user" onClick={closeMenu}>
          ×
        </button>

        <div className="user-info">
          <div className="user-name">{user?.username}</div>

          <div className="profile-circle">
            <img
              src={user?.profilePic || "default-profile-pic.png"} // Image par défaut si aucune image n'est fournie
              alt="Profile Logo"
              className="profile-logo"
            />
          </div>

          <div className="greeting">¡Hola, {user?.firstName}!</div>

          <button
            className="user-menu-btn access-platform-btn"
            onClick={handleMenuClick} // Ouvre ou ferme le menu
          >
            Acceder a la plataforma
          </button>

          {/* Notifications non lues */}
          <div className="user-notifications">
            {notificationsCount > 0
              ? `Tienes ${notificationsCount} notificaciones no leídas`
              : "No tienes notificaciones nuevas"}
          </div>

          {/* Événements ajoutés depuis la dernière visite */}
          <div className="user-events">
            {eventsCount > 0
              ? `Se han añadido ${eventsCount} eventos desde tu última visita`
              : "No se han añadido nuevos eventos"}
          </div>

          <div className="user-upcoming-course">
            {upcomingCourseTime
              ? `Tu próximo curso es en ${upcomingCourseTime} horas`
              : "No hay cursos próximos programados"}
          </div>

          <button className="user-menu-btn logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
