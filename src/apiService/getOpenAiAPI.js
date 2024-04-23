import axios from "axios";

const Back_END_URL = 'http://localhost:4000/openai';

export const getOpenAiAPI = async requestArray => {

  const promptText = `Find 7 movies, one for each element of the 
    array ${requestArray}, the response should contain only an string with films, without word from this requst array ${requestArray}`;

  const backendResponse = await axios.post(Back_END_URL, {
    promptText,
  });
console.log('Response from AI', backendResponse.data.content);
  return backendResponse.data.content;
};
