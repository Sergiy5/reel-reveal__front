import axios from 'axios';

const handleUrlWithSearchingMovie = movie => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
  return url;
};

const AUTH_TOKEN = process.env.REACT_APP_TMDB_API_KEY;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getQuizMovies = async arrMovies => {
console.log('TMBD', arrMovies);
  const res = (arrMovies = arrMovies.map(movie => {
    const response = axios.get(handleUrlWithSearchingMovie(movie));

    return response;
  }));
  return res;
};
