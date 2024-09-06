// src/PhotoMosaic.js
import React, { useEffect } from "react";
import "./PhotoMosaic.css";
import image from "../../assets/images/EcoHotel/EcoHotel.jpg";
import image1 from "../../assets/images/EcoHotel/EcoHotel1.jpg";
import image2 from "../../assets/images/EcoHotel/EcoHotel2.jpg";
import image3 from "../../assets/images/EcoHotel/EcoHotel3.jpg";
import image4 from "../../assets/images/EcoHotel/EcoHotel4.jpg";

const photos = [
  { id: 1, src: image, style: { gridArea: "1 / 1 / 4 / 4" } },
  { id: 2, src: image1, style: { gridArea: "3 / 4 / 5 / 7" } },
  { id: 3, src: image2, style: { gridArea: "4 / 1 / 5 / 2" } },
  { id: 4, src: image3, style: { gridArea: "4 / 2 / 5 / 4" } },
  { id: 5, src: image4, style: { gridArea: "1 / 4 / 3 / 7" } },
];

const PhotoMosaic = () => {
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

  const titleText = "Descubre nuestro EcoHotel";
  const splitTitle = titleText.split("").map((char, index) => (
    <span key={index} style={{ "--i": index + 1 }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
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
  );
};

export default PhotoMosaic;
