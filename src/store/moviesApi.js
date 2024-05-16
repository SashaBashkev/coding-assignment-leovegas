import { ENDPOINT, MOVIES_API_ENDPOINTS } from "../api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  endpoints: (builder) => ({
    // I have stacked with implementing store update on this level
    fetchMovies: builder.mutation({
      query: ({ page, searchQuery }) =>
        MOVIES_API_ENDPOINTS.searchMovies({ page, searchQuery }),
    }),
    fetchMovieById: builder.mutation({
      query: (movieId) => MOVIES_API_ENDPOINTS.searchMovieById(movieId),
    }),
  }),
});

export const { useFetchMoviesMutation, useFetchMovieByIdMutation } = moviesApi;

