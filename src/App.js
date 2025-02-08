import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pageHome/Home.js";
import Loader from "./Component/loaders/Loaders.js";
import LoginPage from "./pageLogin/LoginPage.js";
import SignupPage from "./pageSignup/SignupPage.js";
import Page from "./Component/Page/PageComp.js";
import routes from "./view/routes.js";
import Categorie from "./Component/PageVideos/CategorieVideo/CategorieVideo.js";
import ScrollToTop from "./ScrollToTop.js";
import EventList from "./Component/NewEvenement/Evenement.js";
import EventDetail from "./Component/NewEvenement/EventDetails.js";
import Confirmation from "./Component/PageConfirmation.js";
import backgroundImage from "./assets/images/YogaBack.jpg";
import flyer from "./assets/images/post_instruct.png";

const urlList = [
  "https://silky-tessie-santiago03h-c56517a6.koyeb.app/api/eventos/standup",
  "https://profesores-services-reactivo.fly.dev/api/profesores/standup",
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [eventosReal, setEventosReal] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("authToken");

  const fetchData = async () => {
    try {
      for (const url of urlList) {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
        }
      }
    } catch (error) {
      console.error("Error al realizar las solicitudes:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 2 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchEventos = () => {
      fetch("https://silky-tessie-santiago03h-c56517a6.koyeb.app/api/eventos/profesor/13")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          const updatedData = data.map((event) => ({
            ...event,
            isInstructorado: event.resumen.includes("Instructorado") || event.resumen.includes("Profesorado"),
          }));
          setEventosReal(updatedData);
          console.log("Datos con isInstructorado (local):", updatedData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener los eventos:", error);
          setIsLoading(false);
        });
    };

    fetchEventos();
  }, []);

  useEffect(() => {
    console.log("Estado actualizado de eventosReal:", eventosReal);
  }, [eventosReal]);

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
          <Route path="/" element={<Home events={eventosReal} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {routes.map((route, idx) => (
            <Route
              key={idx}
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
          <Route path="/confirm/*" element={<Confirmation />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/event/:id" element={<EventDetail events={eventosReal} />} />
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
