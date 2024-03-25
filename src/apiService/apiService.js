import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU5MzBjMmZhNzRjYWVhNjRmMjAyNmNmNzBlYzQxMyIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvC078v2ZEDlsUKlhf6XJhVHnGo7gwYMbWV5S3NVSKY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getUpcomingMovies = async page => {
  try {
    const res = await axios.get(`upcoming?language=en-US&page=${page}`);
    return res.data.results;
    
  } catch (error) {
    console.log(error.message);
  }
};

