import React, { useState } from "react";
import placeholder from "../../../assets/not-found-500X750.jpeg";

const MovieCard = ({ children, movieImage, movieTitle }) => {
  const [cardState, setCardState] = useState("");

  const handleCardState = (event, value) => {
    event.stopPropagation();
    setCardState(value);
  };
  return (
    <div className="movie">
      <div
        className={`card ${cardState}`}
        onClick={(event) => handleCardState(event, "opened")}>
        <div>
          <div className="card-body text-center">
            <div className="overlay" />
            <div className="info_panel">{children}</div>
            <img
              className="center-block"
              src={
                 movieImage
                  ? `https://image.tmdb.org/t/p/w500/${movieImage}`
                  : placeholder
              }
              alt="Movie poster"
            />
          </div>
          <h6 className="title mobile-card">{movieTitle}</h6>
          <h6 className="title">{movieTitle}</h6>
          <button
            type="button"
            className="close"
            onClick={(event) => handleCardState(event, "")}
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

