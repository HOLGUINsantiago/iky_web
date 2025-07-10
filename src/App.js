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
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [eventosReal, setEventosReal] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const ghPlatform = process.env.REACT_APP_GH_PLATFORM;
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname === "localhost";

  useEffect(() => {
    const login = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return;
      }
      fetch(`${apiUrl}/api/profesores`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data))
        })
        .catch((error) => {
          console.error("Error al login", error);
        });

      fetch(apiUrl + "/api/estudiantes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
          return response.json();
        })
        .then((data) => sessionStorage.setItem("user", JSON.stringify(data)))
        .catch((error) => console.error("Error fetching students:", error));
    }

    login();

  }, []);

  useEffect(() => {
    const fetchEventos = () => {
      fetch(apiUrl + "/api/eventos/profesor/13")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          const updatedData = data.map((event) => ({
            ...event,
            isInstructorado:
              event.resumen.includes("Instructorado") ||
              event.resumen.includes("Profesorado"),
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

  if ((isLoading || isLoadingImage) && !isLocalhost) {
    return (
      <div className="container-loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <Helmet>
        <title>IKY Yoga - Tu plataforma de Yoga</title>
        <meta name="description" content="Clases, eventos y videos de yoga en IKY. Descubre nuestra plataforma y únete a la comunidad." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="components">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Inicio | IKY Yoga</title>
                <meta name="description" content="Página principal de IKY Yoga. Descubre clases, eventos y más." />
                <link rel="canonical" href="https://iky.com.co/" />
              </Helmet>
              <Home events={eventosReal} />
            </>
          } />
          <Route path="/login" element={
            <>
              <Helmet>
                <title>Iniciar sesión | IKY Yoga</title>
                <meta name="description" content="Accede a tu cuenta en IKY Yoga." />
                <link rel="canonical" href="https://iky.com.co/login" />
              </Helmet>
              <LoginPage />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Helmet>
                <title>Registrarse | IKY Yoga</title>
                <meta name="description" content="Crea tu cuenta en IKY Yoga y únete a la comunidad." />
                <link rel="canonical" href="https://iky.com.co/signup" />
              </Helmet>
              <SignupPage />
            </>
          } />
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
          <Route path="/videos" element={
            <>
              <Helmet>
                <title>Videos de Yoga | IKY Yoga</title>
                <meta name="description" content="Explora nuestra colección de videos de yoga." />
                <link rel="canonical" href="https://iky.com.co/videos" />
              </Helmet>
              <Categorie />
            </>
          } />
          <Route path="/confirm/*" element={<Confirmation />} />
          <Route path="/events" element={<EventList />} />
          <Route
            path="/event/:id"
            element={<EventDetail events={eventosReal} />}
          />
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
