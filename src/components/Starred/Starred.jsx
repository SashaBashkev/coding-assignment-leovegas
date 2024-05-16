import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import starredSlice from "../../store/starredSlice";
import Movie from "../Movie/Movie";

import "./styles.scss";

const Starred = () => {
  const { starredMovies } = useSelector((state) => state.starred);
  const { clearAllStarred } = starredSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="starred">
      {starredMovies.length > 0 && (
        <div data-testid="starred-movies">
          <h6 className="header">Starred movies</h6>
          <div className="movies-grid">
            {starredMovies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>

          <footer className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(clearAllStarred())}>
              Remove all starred
            </button>
          </footer>
        </div>
      )}

      {starredMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-star" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Starred;

