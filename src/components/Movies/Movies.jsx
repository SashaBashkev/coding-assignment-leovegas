import { Movie } from "../Movie";

import "./styles.scss";

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

