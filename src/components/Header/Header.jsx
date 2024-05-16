import { useState, useCallback } from "react";
import {
  Link,
  NavLink,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moviesSlice, { fetchSearchedMovies } from "../../store/moviesSlice.js";

import "./styles.scss";
import { useDebounce } from "../../hooks/useDebounce.js";

const Header = () => {
  const { starredMovies } = useSelector((state) => state.starred);
  const { resetMoviesSearchList } = moviesSlice.actions;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams("");
  const [searchValue, setSearchValue] = useState("");

  const searchMovies = useDebounce((value) => {
    navigate("/");
    setSearchParams(createSearchParams({ search: value }));
    dispatch(fetchSearchedMovies({ queryString: value }));
  }, 300);

  const resetSearchState = () => {
    navigate("/");
    setSearchValue("");
    setSearchParams("");
    dispatch(resetMoviesSearchList());
  };

  return (
    <header>
      <Link to="/" data-testid="home" onClick={resetSearchState}>
        <i className="bi bi-film" />
      </Link>

      <nav>
        <NavLink
          to="/starred"
          data-testid="nav-starred"
          className="nav-starred">
          {starredMovies.length > 0 ? (
            <>
              <i className="bi bi-star-fill bi-star-fill-white" />
              <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
          watch later
        </NavLink>
      </nav>

      <div className="input-group rounded">
        <Link to="/" onClick={resetSearchState} className="search-link">
          <input
            type="search"
            data-testid="search-movies"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyUp={(e) => searchMovies(e.target.value)}
            className="form-control rounded"
            placeholder="Search movies..."
            aria-label="Search movies"
            aria-describedby="search-addon"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

