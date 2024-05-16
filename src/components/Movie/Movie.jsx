import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../store/modalSlice.js";
import starredSlice from "../../store/starredSlice";
import watchLaterSlice from "../../store/watchLaterSlice";
import MovieCard from "./ui/MovieCard.jsx";

import "./styles.scss";

const Movie = ({ movie }) => {
  const { starred, watchLater } = useSelector((state) => state);
  const { starMovie, unstarMovie } = starredSlice.actions;
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;
  const { onModalOpen } = modalSlice.actions;
  const dispatch = useDispatch();

  const checkedStarredMovies = useMemo(() => {
    return starred.starredMovies.map(movie => movie.id).includes(movie.id)
  }, [starred.starredMovies, movie.id]);

  const checkedWatchLaterMovies = useMemo(() => {
    return watchLater.watchLaterMovies.map(movie => movie.id).includes(movie.id)
  }, [watchLater.watchLaterMovies, movie.id]);

  const handleStarBtnClick = () => {
    checkedStarredMovies
      ? dispatch(unstarMovie(movie))
      : dispatch(
          starMovie({
            id: movie.id,
            overview: movie.overview,
            release_date: movie.release_date?.substring(0, 4),
            poster_path: movie.poster_path,
            title: movie.title,
          })
        );
  };

  const handleWatchLaterBtnClick = () => {
    checkedWatchLaterMovies
      ? dispatch(removeFromWatchLater(movie))
      : dispatch(
          addToWatchLater({
            id: movie.id,
            overview: movie.overview,
            release_date: movie.release_date?.substring(0, 4),
            poster_path: movie.poster_path,
            title: movie.title,
          })
        );
  };

  return (
    <MovieCard
      movieImage={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      movieTitle={movie.title}>
      <div className="overview">{movie.overview}</div>
      <div className="year">{movie.release_date?.substring(0, 4)}</div>

      <span
        className="btn-star"
        data-testid="star-link"
        onClick={handleStarBtnClick}>
        <i className={`bi ${checkedStarredMovies ? "bi-star-fill" : "bi-star"}`} />
      </span>
      <button
        type="button"
        data-testid={checkedWatchLaterMovies ? "remove-watch-later" : "watch-later"}
        className={`btn btn-light btn-watch-later ${
          checkedWatchLaterMovies ? "blue" : ""
        }`}
        onClick={handleWatchLaterBtnClick}>
        {checkedWatchLaterMovies ? <i className="bi bi-check"></i> : "Watch Later"}
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => dispatch(onModalOpen(movie?.id))}>
        View Trailer
      </button>
    </MovieCard>
  );
};

export default Movie;


