import React, { useEffect, useState } from "react";
import "./PhotoMosaic.css";
import ModalPDF from "./ModalPDF";
import image from "../../assets/images/EcoHotel/EcoHotel.jpg";
import image1 from "../../assets/images/EcoHotel/cuisine.png";
import image2 from "../../assets/images/EcoHotel/chambre_partage.png";
import image3 from "../../assets/images/EcoHotel/chambre.png";
import image4 from "../../assets/images/EcoHotel/EcoHotel2.jpg";

import EcoHotelPDF from "../../assets/pdf/EcoHotel_Brochure.pdf";

const photos = [
  { id: 1, src: image, style: { gridArea: "1 / 1 / 4 / 4" } },
  { id: 2, src: image1, style: { gridArea: "3 / 4 / 5 / 7" } },
  { id: 3, src: image2, style: { gridArea: "4 / 1 / 5 / 2" } },
  { id: 4, src: image3, style: { gridArea: "4 / 2 / 5 / 4" } },
  { id: 5, src: image4, style: { gridArea: "1 / 4 / 3 / 7" } },
];

const PhotoMosaic = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const title = document.querySelector(".wave-title");
      const titlePosition = title.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (titlePosition < screenPosition) {
        title.classList.add("show");
      } else {
        title.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const titleText = "Descubre nuestro EcoHotel";
  const splitTitle = titleText.split("").map((char, index) => (
    <span key={index} style={{ "--i": index + 1 }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <>
      <div className="photo-mosaic">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item" style={photo.style}>
            <img src={photo.src} alt={`Photo ${photo.id}`} />
            {photo.id === 1 && (
              <>
                <h1 className="wave-title">{splitTitle}</h1>
                <p className="wave-paragraph">
                  Descubre un lugar excepcional donde la naturaleza y el confort
                  se unen...
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="more-info-section-ishka">
        <p className="more-info-text-ishka">
          Si deseas conocer más sobre nuestro EcoHotel, ver más fotos y
          descripciones, te invitamos a hacer clic en el botón justo debajo para
          descubrir más.
        </p>
        <button className="info-button-ishka" onClick={openModal}>
          Ver más
        </button>
      </div>
      <ModalPDF
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        pdfUrl={EcoHotelPDF}
      />
    </>
  );
};

export default PhotoMosaic;
