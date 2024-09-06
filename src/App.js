import React, { useState, useEffect, useRef } from "react";
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

import essai from "./assets/images/backgrounds/IMG_1948.jpeg";
import image1 from "./assets/images/IMG_0648.jpeg";
import flyer1 from "./assets/images/post_instruct.png";
import ScrollToTop from "./ScrollToTop.js";

const eventsData = [
  {
    id: 1,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: essai,
    flyerImage: flyer1,
    eventDate: "2024-11-25T10:00:00",
    details:
      "Lorem incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    backgroundImage: essai,
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
  {
    id: 2,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: image1,
    flyerImage: flyer1,
    eventDate: "2024-10-25T10:00:00",
    backgroundImage: essai,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
  {
    id: 3,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: image1,
    flyerImage: flyer1,
    eventDate: "2024-08-11T10:00:00",
    backgroundImage: essai,
    details:
      "ut labore et ds nisi ut aliquip ex voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
  {
    id: 4,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: image1,
    flyerImage: flyer1,
    eventDate: "2025-01-25T10:00:00",
    backgroundImage: essai,
    details: "Détails complets de l'événement ici...",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
  {
    id: 5,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: image1,
    flyerImage: flyer1,
    eventDate: "2024-08-25T10:00:00",
    backgroundImage: essai,
    details: "Détails complets de l'événement ici...",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
  {
    id: 6,
    title: "Conférence React 2024",
    date: "2024-09-15",
    eventImage: image1,
    flyerImage: flyer1,
    eventDate: "2024-09-25T10:00:00",
    backgroundImage: essai,
    details: "Détails complets de l'événement ici...",
    shortDescription:
      "Rejoignez-nous pour une conférence passionnante sur les dernières nouveautés de React.",
    longDescription:
      "Détails complets de l'événement : conférenciers, sessions, ateliers, et bien plus encore. Ne manquez pas cette opportunité d'apprendre des experts.",
  },
];

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Selecciona todas las imágenes en la página
    const images = document.querySelectorAll("img");
    let loadedImagesCount = 0;

    images.forEach((image) => {
      // Verifica si la imagen ya está cargada
      if (image.complete) {
        loadedImagesCount += 1;
      } else {
        image.addEventListener("load", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            const timer = setTimeout(() => {
              handleLoad();
            }, 2000); // 2 secondes de temps de chargement simulé
          }
        });
        image.addEventListener("error", () => {
          loadedImagesCount += 1;
          if (loadedImagesCount === images.length) {
            const timer = setTimeout(() => {
              handleLoad();
            }, 1000); // 2 secondes de temps de chargement simulé
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      const timer = setTimeout(() => {
        handleLoad();
      }, 1000);
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
          {routes.map((route, idx) => {
            console.log(route);
            return (
              <Route
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
            );
          })}
          {/* <Route
              path="/videos"
              element={<PageEvenement events={eventsData} />}
            />
            //{" "}
            <Route
              path="/event/:id"
              element={<EventDetail events={eventsData} />}
            /> */}
          {/* <Route path="/videos" element={<Calendar />}></Route> */}
          {/* <Route path="/videos" element={<PageVideo />}></Route> */}
          <Route path="/videos" element={<Categorie />}></Route>
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
// export default App;
