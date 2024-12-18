import React, { useState, useEffect } from "react";
import axios from "../axios.js";
import YouTube from "react-youtube";

const base_url_img = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="poster_row">
        {movies.map((movie) => (
          <div key={movie.id} className="poster-container">
            <img
              src={`${base_url_img}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              className={`poster ${isLargeRow ? "poster_large" : ""}`}
            />
            <div className="overlay">
              <div className="play-icon">▶</div>
            </div>
            <span className="movie-title">{movie.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
