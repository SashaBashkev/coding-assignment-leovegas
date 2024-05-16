import { ENDPOINT, MOVIES_API_ENDPOINTS } from "../api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  endpoints: (builder) => ({
    // I have stuck with implementing store updates on this level, and skipped this approach due to time consuming
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


