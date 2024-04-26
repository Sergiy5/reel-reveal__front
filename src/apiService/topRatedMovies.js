import axios from "axios";

const AUTH_TOKEN = process.env.REACT_APP_TMDB_API_KEY;
console.log('Replaced rows');
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const topRatedMOvies = async page => {

    const res = await axios.get(`top_rated?language=en-US&page=${page}`);
    return res.data.results;

};
