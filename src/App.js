import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./components";
import {
  MoviesPage,
  StarredMoviesPage,
  WatchLaterPage,
  NotFoundPage,
} from "./pages";


const APP_ROUTES = {
  HOME: "/",
  STARRED: "/starred",
  WATCH_LATER: "/watch-later",
  NOT_FOUND: "*",
};

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<MoviesPage />} />
        <Route path={APP_ROUTES.STARRED} element={<StarredMoviesPage />} />
        <Route path={APP_ROUTES.WATCH_LATER} element={<WatchLaterPage />} />
        <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;

