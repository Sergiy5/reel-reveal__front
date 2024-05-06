import axios from 'axios';

const Back_END_URL = 'http://localhost:4000/openai';

export const getOpenAiAPI = async (requestArray, existedMovies) => {
  const promptText = `
  - You are a connoisseur of films and everything related to them, music, actors, genres, the year the film was released, what film genres the actor is associated with.
  - Find 7 movies, one for each element form the array ${requestArray}.
  - Search for lesser-known films.
  - Temperature 2
  - Return structured valid JSON with seven titles of movies.
  - First offer with the highest rating, in the next similar request gradually lower the rating
  - As a result, there should be no such films ${existedMovies}.
  - The result in JSON format like this: ""["title", "title", "title", "title", "title", "title", "title"]"" without any additional text
    `;

  try {
    const openAiResponse = await axios.post(Back_END_URL, {
      promptText,
    });
    return openAiResponse.data;
  } catch (error) {
    console.log('getOpenAiAPI error', error.message);
  }
};
  
  // - The result like this : ["Moon", "Sun", "Good-buy", "Trminator", "Avatar", "Dog", "CAt"].