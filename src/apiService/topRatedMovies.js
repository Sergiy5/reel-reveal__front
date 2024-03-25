import axios from "axios";

export const topRatedMOvies = async page => {
  try {
    const res = await axios.get(`top_rated?language=en-US&${page}`);
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU5MzBjMmZhNzRjYWVhNjRmMjAyNmNmNzBlYzQxMyIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvC078v2ZEDlsUKlhf6XJhVHnGo7gwYMbWV5S3NVSKY',
//   },
// };

// fetch(
//   'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
//   options
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
