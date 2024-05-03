import axios from 'axios';

const Back_END_URL = 'http://localhost:4000/openai';

export const getOpenAiAPI = async requestArray => {
  const promptText = `
  - Find 7 movies, one for each element of the 
    array ${requestArray}.
    - Return structured valid array with seven titles of movies.
    - The response should not have such titles ${requestArray}.
    - The result like this : ["Moon", "Sun", "Good-buy", "Trminator", "Avatar", "Dog", "CAt"].
    `;

  try {
    const backendResponse = await axios.post(Back_END_URL, {
      promptText,
    });

    return backendResponse.data.content;
  } catch (error) {
    console.log('getOpenAiAPI error', error.message);
  }
};
