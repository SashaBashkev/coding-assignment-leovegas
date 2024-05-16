import React, { useEffect, useCallback } from "react";
import { fetchMovies } from "../../store/moviesSlice.js";
import { Movie } from "../Movie";

import "./styles.scss";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll.js";

const Movies = ({ movies }) => {
  return (
    <div data-testid="movies" className="movies-grid">
      {movies &&
        movies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })}
    </div>
  );
};

export default Movies;

