export const API_KEY = process.env.REACT_APP_API_KEY;
export const ENDPOINT = process.env.REACT_APP_ENDPOINT;
export const ENDPOINT_DISCOVER = `/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`;
export const ENDPOINT_SEARCH = `/search/movie?api_key=${API_KEY}`;
export const ENDPOINT_MOVIE = `/movie/507086?api_key=${API_KEY}&append_to_response=videos`;


export const MOVIES_API_ENDPOINTS = {
  searchMovies: ({ page, queryString }) => {
    return queryString
      ? `${ENDPOINT}${ENDPOINT_SEARCH}&query=${queryString}`
      : `${ENDPOINT}${ENDPOINT_DISCOVER}&page=${page}`;
  },
  searchMovieById: (id) =>
    `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
  discoverMovies: () => `${ENDPOINT}}${ENDPOINT_DISCOVER}`,
};


export const fetchAllMovies = async ({ page, queryString }) => {
  const data = await fetch(
    MOVIES_API_ENDPOINTS.searchMovies({
      page,
      queryString,
    })
  ).then((res) => res.json());
  return data;
};

export const fetchMovieById = async (id) => {
  const data = await fetch(MOVIES_API_ENDPOINTS.searchMovieById(id)).then(
    (res) => res.json()
  );
  return data;
};


