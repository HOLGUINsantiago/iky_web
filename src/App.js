import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pageHome/HomePage.js";
import Nav from "./pageHome/Nav.js";
import LoginPage from "./pageLogin/LoginPage.js";
import SignupPage from "./pageSignup/SignupPage.js";
import EvenementesPages from "./pageEvenement/EventosPages.js";
import IkyPage from "./pageIky/IkyPage.js";
import RipeyPage from "./pageRipey/RipeyPage.js";
import CosmoPage from "./pageCosmovision/CosmovisionPage.js";
import AcercaPage from "./pageAcerca/AcercaPage.js";
import YogaPage from "./pageYoga/YogaPage.js";

import Auth from "./pageHome/AuthMenu.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/eventos" element={<EvenementesPages />} />
            <Route path="/iky" element={<IkyPage />} />
            <Route path="/ripey" element={<RipeyPage />} />
            <Route path="/vision" element={<CosmoPage />} />
            <Route path="/about" element={<AcercaPage />} />
            <Route path="/yoga" element={<YogaPage />} />

            {/* Ajoutez plus de routes si nécessaire */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
