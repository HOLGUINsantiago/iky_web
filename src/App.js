import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
// import Home from "./pageHome/HomePage.js";
import Home from "./pageHome/Home.js";
import Loader from "./Component/loaders/Loaders.js"; // Import du Loader
import LoginPage from "./pageLogin/LoginPage.js";
import SignupPage from "./pageSignup/SignupPage.js";
import Page from "./Component/Page/PageComp.js";
import routes from "./view/routes.js";
import PageVideo from "./Component/PageVideos/PageVideo.js";
import Categorie from "./Component/PageVideos/CategorieVideo/CategorieVideo.js";
import ScrollToTop from "./ScrollToTop.js";
import EventList from "./Component/NewEvenement/Evenement.js";
import EventDetail from "./Component/NewEvenement/EventDetails.js";
import backgroundImage from "./assets/images/YogaBack.jpg";
import flyer from "./assets/images/post_instruct.png";

// Données des événements
const events = [
  {
    id: 1,
    title: "Événement 1",
    eventDate: "2024-12-01",
    location: "Lieu 1",
    details: "Détails de l'événement 1",
    backgroundImage: backgroundImage,
    flyerImage: flyer,
  },
  {
    id: 2,
    title: "Événement 2",
    eventDate: "2024-12-02",
    location: "Lieu 2",
    details: "Détails de l'événement 2",
    backgroundImage: "url_image_background_2",
    flyerImage: "url_image_flyer_2",
  },
  // Ajoute d'autres événements ici
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      // Vérifier si le token est valide
      fetch(apiUrl + "/api/estudiantes", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Si l'utilisateur est valide, mettre à jour l'état
          sessionStorage.setItem("user", data);
        })
        .catch((error) => {
          console.error("Erreur lors de la vérification du token:", error);
          localStorage.removeItem("authToken");
        });
    }
  });

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const images = document.querySelectorAll("img");
    let loadedImagesCount = 0;

    images.forEach((image) => {
      if (image.complete) {
        loadedImagesCount += 1;
      } else {
        image.addEventListener("load", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        });
        image.addEventListener("error", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      handleLoad();
    }
  }, [location]);

  if (isLoading) {
    return (
      <div className="container-loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="components">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {routes.map((route, idx) => (
            <Route
              key={idx} // Ajoute une clé unique
              path={route.path}
              element={
                <Page
                  sections={route.content}
                  Mosaique={route.mosaique}
                  backgroundImage={route.backgroundImage}
                  color={route.color}
                />
              }
            />
          ))}
          <Route path="/videos" element={<Categorie />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetail events={events} />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
