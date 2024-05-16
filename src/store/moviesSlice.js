import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchAllMovies } from "../api";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page, queryString }) => {
    const data = await fetchAllMovies({ page, queryString });
    return data;
  }
);
export const fetchSearchedMovies = createAsyncThunk(
  "movies/fetchSearchedMovies",
  async ({ page, queryString }) => {
    const data = await fetchAllMovies({ page, queryString });
    return data;
  }
);

const initialState = {
  moviesList: [],
  moviesSeachList: [],
  fetchStatus: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMoviesSearchList: (state) => {
      state.moviesSeachList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList = state.moviesList.concat(action.payload.results);
        state.fetchStatus = "success";
      })
      .addCase(fetchMovies.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSearchedMovies.fulfilled, (state, action) => {
        state.moviesSeachList = action.payload.results;
        state.fetchStatus = "success";
      })
      .addCase(fetchSearchedMovies.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchSearchedMovies.rejected, (state) => {
        state.fetchStatus = "failed";
      });
  },
});

export default moviesSlice;

