import { loremIpsum } from "lorem-ipsum";
import React, { useState } from "react";
import ListaProfesores from "../Component/ListaProfesores/Lista.js";
import MosaiqueCRK from "../pageAcerca/MosaiqueCRKan.js";
import MosaiqueRipey from "../pageRipey/MosaiqueRipey.js";
import MosaiqueYoga from "../pageYoga/MosaiqueYoga.js";
import MosaiqueIshka from "../pageCosmovision/MosaiqueIshka.js";
import MosaiqueKankueb from "../pageEvenement/MosaiqueKankueb.js";
import MosaiqueIkynesis from "../pageIky/MosaiqueIkynesis.js";
import Carlos from "../assets/images/profil/Carlos.jpg";
import essai from "../assets/images/backgrounds/IMG_1948.jpeg";
import image1 from "../assets/images/IMG_0648.jpeg";
import flyer1 from "../assets/images/iky.png";
import imageAbout from "../assets/images/backgrounds/IMG_1948.jpeg";
import imageYoga from "../assets/images/backgrounds/3FD006E5-591C-4D1F-B913-DA8B3E895010.JPG";
import CardComponent from "../Component/Diplomas/DiplomaGallery.js";
import diplome from "../assets/images/post_instruct.png";
import BiographyCard from "../pageAcerca/Biografia/Biografia.js";
import imageIshka from "../assets/images/backIshka.jpg";
import PhotoEcoHotel from "../pageCosmovision/EcoHotel/PhotoMosaic.js";
import Planning from "../Component/FlyerCours/FlyerCours.js";
import CardEspacios from "../pageCosmovision/Espacios/Espacios.js";
import MapDescrption from "../pageCosmovision/NuestroCentro/MapDescription.js";
import NuestroProfesores from "../pageCosmovision/NuestroProfessores/NuestroProfesores.js";
import Video from "../Component/CompoVideos/YoutubeVideo.js";
import FormaciónYoga from "../pageAcerca/FormaciónYoga/FormaciónYoga.js";
import CaminoMaya from "../pageAcerca/CaminoMaya/CaminoMaya.js";
import MetodoFeldenkrais from "../pageAcerca/MetodoFeldenkrais/MetodoFeldenkrais.js";
import Ripey from "../pageRipey/Ripey/Ripey.js";
import ExempleDiplomas from "../pageRipey/Ripey/DiplomasExemple/DiplomasExemple.js";
import Simon from "../assets/images/profil/Simon.jpg";
import SystemaIKY from "../pageYoga/SystemaIky/SystemaIKY.js";
import YogaDef from "../pageYoga/YogaDef.js";
import Kankueb from "../pageEvenement/Kankueb/Kankueb.js";

import YogaBack from "../assets/images/YogaBack.jpg";
import imageIkynesis from "../assets/images/imageIkynesis.jpeg";
import imageKankueb from "../assets/images/imageKankueb.JPG";
import YogaBackground from "../assets/images/imageYoga.jpg";

import Salon1 from "../assets/images/Salon1.jpg";
import Jardin1 from "../assets/images/Jardin1.jpg";
import Jardin2 from "../assets/images/Jardin2.JPG";
import Instalacion from "../assets/images/instalacion.jpeg";
import Jardin3 from "../assets/images/Jardin3.jpeg";
import Jardin4 from "../assets/images/Jardin4.jpeg";
import Instalacion2 from "../assets/images/instalacion2.jpeg";
import repos from "../assets/images/repos.jpeg";
import imageRipey from "../assets/photoPageRipey1/228DB818-748B-4F33-9EEC-23B60CC17A05.JPG";
import petitSalon from "../assets/images/IMG_0036.jpg";

import Diplomas1 from "../assets/images/Diplomas/1724187181139.jpg";
import Diplomas2 from "../assets/images/Diplomas/guia-espiritual.jpg";
import Diplomas3 from "../assets/images/Diplomas/instituto-yoga-kai-de-palermo-instructor-de-yoga.jpg";
import Diplomas4 from "../assets/images/Diplomas/instituto-yoga-kai-de-palermo-profesor-de-yoga.jpg";
import Diplomas5 from "../assets/images/Diplomas/instituto-yoga-kai-de-palermo-yoga-para-ninos.jpg";
import Diplomas6 from "../assets/images/Diplomas/instituto-yoga-kai-de-palermo.jpg";
import Diplomas7 from "../assets/images/Diplomas/master-choa-kok-sui.jpg";
import Diplomas8 from "../assets/images/Diplomas/reiki-usui-shiki-ryoho-sanacion-natural.jpg";
import Diplomas9 from "../assets/images/Diplomas/tai-chi.jpg";
import Diplomas10 from "../assets/images/Diplomas/terapia-de-yoga-nidra.jpg";
import { color } from "framer-motion";
import IKYNESIS from "../pageIky/Ikynesis/IKYNESIS.js";
import CosmovisionMaya from "../pageEvenement/CosmovisonMaya/Cosmovision.js";
import Techniques from "../pageEvenement/mysticDance/Tecnicas.js";
import ProfesoradoInstructorado from "../pageYoga/profesoradoInstructorado/ProfesoradoInstructorado.js";
import Yes from "../pageYoga/YES/Yes.js";

const cardsData = [
  {
    id: 1,
    hoverText: "",
    description: "Maestro del Método Feldenkrais®",
    backgroundImage: Diplomas1,
    width: "300px",
    height: "100px",
  },
  {
    id: 2,
    hoverText: "",
    description:
      "Certificación de guía espiritual maya por el gobierno de Guatemala",
    backgroundImage: Diplomas2,

    width: "250px",
    height: "100px",
  },
  {
    id: 3,
    hoverText: "",
    description: "Instructor de power yoga",
    backgroundImage: Diplomas3,

    width: "200px",
    height: "100px",
  },

  {
    id: 5,
    hoverText: "",
    description: "Postgrado de yoga para niños",
    backgroundImage: Diplomas5,
  },
  {
    id: 6,
    hoverText: "",
    description: "Profesor de yoga para embarazadas",
    backgroundImage: Diplomas6,
  },
  {
    id: 7,
    hoverText: "",
    description: "Certificación de sanación pránica",
    backgroundImage: Diplomas7,
  },
  {
    id: 8,
    hoverText: "",
    description: "Maestro Reiki",
    backgroundImage: Diplomas8,
  },
  {
    id: 9,
    hoverText: "",
    description: "Instructor de Tai Chi y Chi Kung",
    backgroundImage: Diplomas9,
  },
  {
    id: 10,
    hoverText: "",
    description: "Certificación en yoga nidra",
    backgroundImage: Diplomas10,
  },
  {
    id: 4,
    hoverText: "",
    description: "Profesor de yoga",
    backgroundImage: Diplomas4,
  },
];

const cardsDataEspacios = [
  {
    id: 1,
    imageSrc: Salon1,
    hoverText: "Salón principal",
    description:
      "En un espacio abierto rodeado de naturaleza se encuentra un Salón principal donde se entregan las clases de yoga y de kankueb.",
  },
  {
    id: 2,
    imageSrc: petitSalon,
    hoverText: "Salón central",
    description:
      "Este Salón se encuentra en el interior de las instalaciones y tiene vista hacia el pequeño Jardín. Con aire condicionado este Salón se usa para las grabaciones y las clases de ikynesis. ",
  },
  {
    id: 3,
    imageSrc: Jardin2,
    hoverText: "Centro de convivencia",
    description: "",
  },
  {
    id: 4,
    imageSrc: Jardin3,
    hoverText: "Centro de fuegos",
    description:
      "En este pequeno circulo de piedras se hacen las ceremonias mayas donde con el fuego se le ofrende a la tierra.",
  },
  {
    id: 5,
    imageSrc: Jardin4,
    hoverText: "Jardín",
    description:
      "Esta es la vista que tienen todos los estudiantes desde el Salón principal.",
  },
  {
    id: 6,
    imageSrc: Instalacion,
    hoverText: "Ramada",
    description:
      "Nuestras instalaciones cuentan con su cocina y comedor exclusivo para estudiantes.",
  },
  {
    id: 7,
    imageSrc: Instalacion2,
    hoverText: "Jardín pequeño",
    description: "Entrada peatonal de Ishka Center.",
  },
  {
    id: 8,
    imageSrc: repos,
    hoverText: "Sitios de descanso",
    description:
      "Nuestro centro cuenta con sillas, hamacas y sillones para que los estudiantes descansen.",
  },
];

const sectionsCRKan = [
  {
    id: 1,
    name: "Diplomas",
    content: <CardComponent cardsData={cardsData} />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 2,
    name: "Formación en yoga",
    content: <FormaciónYoga />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 3,
    name: "Camino maya",
    content: <CaminoMaya />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Formación en Método Feldenkrais® de Autoconciencia a Través del Movimiento",
    content: <MetodoFeldenkrais />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 5,
    name: "Experiencia",
    content: <BiographyCard nom="Carlos HOLGUIN" titre="" photoUrl={Carlos} />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const sectionsYoga = [
  {
    id: 1,
    name: "Definición de Yoga",
    content: <YogaDef />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 2,
    name: "Systema Iky",
    content: <SystemaIKY />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 3,
    name: "Profesorado e intructorado",
    content: <ProfesoradoInstructorado />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Cursos, retiros y talleres",
    content: <Yes />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 5,
    name: "Profondizaciones y especializaciones",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const sectionsIkynesis = [
  {
    id: 1,
    name: "Ikynesis",
    content: <IKYNESIS />,
    recommendations: [],
  },
  {
    id: 2,
    name: "Yoga del movimiento",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 3,
    name: "Método Feldenkrais®",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Cursos, retiros y talleres",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 5,
    name: "Sesiones individuales",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const sectionsISHKA = [
  {
    id: 1,
    name: "Nuestro centro",
    content: <MapDescrption />,
    recommendations: [],
  },
  {
    id: 2,
    name: "Espacios",
    content: <CardEspacios cardsData={cardsDataEspacios} />,
    recommendations: [],
  },
  {
    id: 3,
    name: "Nuestro profesores",
    content: <NuestroProfesores />,
    recommendations: [],
  },
  {
    id: 4,
    name: "Calendario",
    content: <Planning />,
    recommendations: [],
  },
  {
    id: 5,
    name: "Eco-Living",
    content: <PhotoEcoHotel />,
    recommendations: [],
  },
];

const sectionsKankueb = [
  {
    id: 1,
    name: "Kankueb",
    content: <Kankueb />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 2,
    name: "Cosmovisión y Calendario Maya",
    content: <CosmovisionMaya />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },

  {
    id: 3,
    name: "Mystic Dance",
    content: <Techniques />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const professors = [
  {
    name: "Carlos Holguin",
    title: "Maestro de Yoga",
    photo: Carlos,
    city: "Cali",
    country: "Colombia",
    codigo: "IKY-0101-280724-01",
  },
  {
    name: "Simon Roa",
    title: "Profesores de Yoga",
    photo: Simon,
    city: "Cali",
    country: "Colombia",
    codigo: "IKY-0101-280510-01",
    description:
      "Licenciado en lenguas extranjeras aplicadas a la enseñanza y la traducción. Traductor simultáneo.Profesor de Ishka Kankueb Yoga y meditación con énfasis en movimiento humano y estrategias de encauzamiento de la mente desde el 2017. Ha traducido y enseñado en más de 20 entrenamientos internacionales para instructores de yoga en IKY y del programa YES de Yoga, Español y Salsa.",
  },
  {
    name: "Prof. Emily Johnson",
    title: "Chemistry",
    photo: "https://via.placeholder.com/100.png?text=EJ",
    city: "Paris",
    country: "France",
    codigo: "IKY-0101-280724-01",
  },
];

const sectionsRIPEY = [
  {
    id: 1,
    name: "Qué es el RIPEY ?",
    content: <Ripey />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 2,
    name: "Ejemplo de diploma RIPEY",
    content: <ExempleDiplomas />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 3,
    name: "Lista de profesores por paises",
    content: <ListaProfesores professors={professors} />,
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const sectionsIshka = [
  {
    id: 1,
    name: "Yoga del movimiento",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 2,
    name: "Método Feldenkrais®",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 3,
    name: "Cursos, retiros y talleres",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Sesiones individuales",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
    recommendations: [
      { title: "1 Blog 1", url: "#ikyblog3", porcentaje: 10, allowed: true },
      { title: "1 Blog 2", url: "#ikyblog2", porcentaje: 20, allowed: true },
      {
        title: "1 Link 1",
        url: "https://biojava.org/docs/api6.1.0/org/biojava/nbio/core/alignment/template/Profile.html",
        porcentaje: 50,
        allowed: true,
      },
    ],
  },
];

const routes = [
  {
    path: "/kankueb",
    name: "Kankueb",
    content: sectionsKankueb,
    mosaique: MosaiqueKankueb,
    backgroundImage: imageKankueb,
    color: "rgb(53 19 19)",
  },
  {
    path: "/iky",
    name: "iky",
    content: sectionsIkynesis,
    backgroundImage: imageIkynesis,
    mosaique: MosaiqueIkynesis,
    color: "#463d4b",
  },
  {
    path: "/ripey",
    name: "ripey",
    content: sectionsRIPEY,
    mosaique: MosaiqueRipey,
    backgroundImage: imageRipey,
    color: "#20283D",
  },
  {
    path: "/ishka",
    name: "ishka",
    content: sectionsISHKA,
    mosaique: MosaiqueIshka,
    backgroundImage: imageIshka,
    color: "rgb(19 18 18)",
  },
  {
    path: "/about",
    name: "about",
    content: sectionsCRKan,
    mosaique: MosaiqueCRK,
    backgroundImage: imageAbout,
    color: "rgb(26 41 6)",
  },
  {
    path: "/yoga",
    name: "yoga",
    content: sectionsYoga,
    mosaique: MosaiqueYoga,
    backgroundImage: YogaBackground,
    color: "#475840",
  },
];

export default routes;
