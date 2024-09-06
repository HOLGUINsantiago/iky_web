import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../Utils.js";

const base_url_img = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Failed to fetch movie", error);
      }
    }
    fetchMovie();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("${base_url_img}${movie.backdrop_path}")`
          : "none",
      }}
    >
      <div className="banner_content">
        {movie ? (
          <>
            <h1 className="banner-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description">{movie?.overview}</h1>
          </>
        ) : (
          <p>Loading...</p> // Ou un autre indicateur de chargement
        )}
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
