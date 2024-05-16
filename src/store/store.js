import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import starredSlice from "./starredSlice";
import watchLaterSlice from "./watchLaterSlice";
import modalSlice from "./modalSlice.js";
// import { moviesApi } from "./moviesApi.js";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    starred: starredSlice.reducer,
    watchLater: watchLaterSlice.reducer,
    modal: modalSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    // [moviesApi.reducerPath]: moviesApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,

  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;

