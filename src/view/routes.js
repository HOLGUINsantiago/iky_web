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
import flyer1 from "../assets/images/post_instruct.png";
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
import FormacionYoga from "../pageAcerca/FormacionYoga/FormacionYoga.js";
import CaminoMaya from "../pageAcerca/CaminoMaya/CaminoMaya.js";
import MetodoFeldenkrais from "../pageAcerca/MetodoFeldenkrais/MetodoFeldenkrais.js";
import Ripey from "../pageRipey/Ripey/Ripey.js";
import ExempleDiplomas from "../pageRipey/Ripey/DiplomasExemple/DiplomasExemple.js";
import Simon from "../assets/images/profil/Simon.jpg";

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

const cardsData = [
  {
    id: 1,
    hoverText: "",
    description: "Maestro en Feldenkrais",
    backgroundImage: Diplomas1,
    width: "300px",
    height: "100px",
  },
  {
    id: 2,
    hoverText: "",
    description:
      "Certificacion de guia espiritual maya por el govierno de Guatemala",
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
    id: 4,
    hoverText: "",
    description: "Profesor de yoga",
    backgroundImage: Diplomas4,
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
    description: "Profesor de yoga para mujer embarazadas",
    backgroundImage: Diplomas6,
  },
  {
    id: 7,
    hoverText: "",
    description: "Certicicacion de sanacion pranica",
    backgroundImage: Diplomas7,
  },
  {
    id: 8,
    hoverText: "",
    description: "Certificado de Reiki",
    backgroundImage: Diplomas8,
  },
  {
    id: 9,
    hoverText: "",
    description: "Instrutor de Tai Chi y Chi Kung",
    backgroundImage: Diplomas9,
  },
  {
    id: 10,
    hoverText: "",
    description: "Certificacion en yoga nidra",
    backgroundImage: Diplomas10,
  },
];

const cardsDataEspacios = [
  {
    id: 1,
    imageSrc: Salon1,
    hoverText: "Salon principal",
    description:
      "En un espacio abierto rodeado de naturaleza se encuentra un salon principal donde se entregan las clases de yoga y de kankueb.",
  },
  {
    id: 2,
    imageSrc: petitSalon,
    hoverText: "Salon central",
    description:
      "Este salon se encuentra en el interior de las instalaciones y tiene vista hacia el pequeño jardin. Con aire condicionado este salon se usa para las grabaciones y las clases de ikynesis. ",
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
    hoverText: "Jardin",
    description:
      "Esta es la vista que tienen todos los estudiantes desde el salon principal.",
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
    hoverText: "Jardin pequeño",
    description: "Entrada peatonal de Ishka.",
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
    name: "Formacion en yoga",
    content: <FormacionYoga />,
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
    name: "Formacion en Feldenkrais",
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
    name: "Biografia",
    content: (
      <BiographyCard
        nom="Carlos HOLGUIN"
        titre="Profesor de Yoga"
        photoUrl={Carlos}
      />
    ),
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
    name: "Systema Iky",
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
    name: "Clases",
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
    name: "Profesorado y intructorado",
    content: loremIpsum({ count: 20, units: "paragraphs" }),
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
    name: "Método Feldenkrais",
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
    name: "Eco-Hotel",
    content: <PhotoEcoHotel />,
    recommendations: [],
  },
  {
    id: 6,
    name: "Descubre",
    content: <Video />,
    recommendations: [],
  },
];

const sectionsKankueb = [
  {
    id: 1,
    name: "Cosmovision y Calendario Maya",
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
    name: "Kankueb",
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
    name: "Mystic Dance",
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
    name: "Método Feldenkrais",
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
  // Ajoutez plus d'événements ici
];

const routes = [
  {
    path: "/kankueb",
    name: "Kankueb",
    content: sectionsKankueb,
    mosaique: MosaiqueKankueb,
    backgroundImage: imageAbout,
  },
  {
    path: "/iky",
    name: "iky",
    content: sectionsIkynesis,
    mosaique: MosaiqueIkynesis,
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
    backgroundImage: imageYoga,
  },
];

export default routes;
