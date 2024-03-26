import axios from "axios";

export const topRatedMOvies = async page => {

    const res = await axios.get(`/top_rated?language=en-US&page=${page}`);
    return res.data.results;

};
