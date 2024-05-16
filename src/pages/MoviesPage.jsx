import React, { useCallback, useEffect } from "react";
import { Movies } from "../components";
import { fetchMovies } from "../store/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../hooks";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);
  const isLoading = movies.fetchStatus === "loading";

  const loadMovies = useCallback(
    (page) => {
      dispatch(fetchMovies({ page }));
    },
    [dispatch]
  );

  const moviesRenderList =
    movies.moviesSeachList.length > 0
      ? movies.moviesSeachList
      : movies.moviesList;

  const initScroll = useInfiniteScroll(loadMovies, isLoading);

  useEffect(() => {
    dispatch(fetchMovies({ page: 1 }));
  }, [dispatch]);

  if (isLoading) {
    return <h1>LOADING MOVIES</h1>;
  }
  return (
    <div>
      <Movies movies={moviesRenderList} />
    </div>
  );
};

export default MoviesPage;

