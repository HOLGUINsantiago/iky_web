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
import { AppBar } from "@mui/material";

const urlList = [
  "https://profesores-services-reactivo.fly.dev/api/profesores/standup",
  "https://gateway-delicate-dust-1135.fly.dev/api/profesores/standup",
  "https://event-service.fly.dev/api/eventos/standup",
  "https://estudiantes-services.fly.dev/api/estudiantes/standup"
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [eventosReal, setEventosReal] = useState(null);
  const [isServicesUp, setIsServicesUp] = useState(false); // 🆕
  const apiUrl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("authToken");

  const urlList = [
    "https://profesores-services-reactivo.fly.dev/api/profesores/standup",
    "https://gateway-delicate-dust-1135.fly.dev/api/profesores/standup",
    "https://event-service.fly.dev/api/eventos/standup",
    "https://estudiantes-services.fly.dev/api/estudiantes/standup"
  ];

  // Verificar si todos los servicios están OK
  const fetchData = async () => {
    try {
      const results = await Promise.all(urlList.map(async (url) => {
        const response = await fetch(url);
        return response.ok;
      }));
      const allOk = results.every(result => result === true);
      setIsServicesUp(allOk); // 🆕
    } catch (error) {
      console.error("Error al realizar las solicitudes:", error);
      setIsServicesUp(true);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Cargar eventos solo si los servicios están OK
  useEffect(() => {
    if (!isServicesUp) return;

    fetch("https://event-service.fly.dev/api/eventos/profesor/13")
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        return response.json();
      })
      .then((data) => {
        const updatedData = data.map((event) => ({
          ...event,
          isInstructorado: event.resumen.includes("Instructorado") || event.resumen.includes("Profesorado"),
        }));
        setEventosReal(updatedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los eventos:", error);
        setIsLoading(false);
      });
  }, [isServicesUp]);

  // Cargar datos del estudiante solo si los servicios están OK
  useEffect(() => {
    if (!isServicesUp || !token) return;

    fetch(apiUrl + "/api/estudiantes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    })
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then(data => sessionStorage.setItem("user", JSON.stringify(data)))
      .catch(error => console.error("Error fetching students:", error));
  }, [isServicesUp, apiUrl, token]);




  useEffect(() => {
    console.log("Estado actualizado de eventosReal:", eventosReal);
  }, [eventosReal]);

  useEffect(() => {
    const handleLoad = () => setIsLoadingImage(false);
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

  if (isLoading || isLoadingImage) {
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

export default App;
