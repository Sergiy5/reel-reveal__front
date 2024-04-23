import { useEffect, useState } from 'react';
import {
  BorderBottomSvg,
  BorderTopSvg,
  QuizWrapper,
} from './Quiz.styled';

import { Container } from 'styles';
import { getOpenAiAPI } from 'apiService';
import { QuizQuestions } from './quizQuestions/QuizQuestions';
import { QuizListMovies } from './quizListMovies/QuizListMovies';
import { arrayFromString } from 'utils';

export const Quiz = () => {
 
  const [quizResult, setQuizResult] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [moviesForList, setMoviesForList] = useState([]);

   const getQuizMovies = arrMovies => {
     if (arrMovies.length) {
       setIsQuizActive(false);
       const arrForListMovies = arrMovies.map(movie => {
         return movie.data.results[0];
       });
       return arrForListMovies;
     }
   };



  // Result from TMdB
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromQuizResult = async movies => {
      try {
        const requests = getQuizMovies(movies);
        const responses = await Promise.all(requests);

        setMoviesForList(responses);
        setIsQuizActive(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMoviesFromQuizResult(moviesFromOpenaiApi);
    // console.log('moviesFromOpenaiApi', moviesFromOpenaiApi);
  }, [moviesFromOpenaiApi]);

  // GET (POST) from openai API=====================
  useEffect(() => {
    const openAiAPI = async quizMovies => {
      try {
        const response = await getOpenAiAPI(quizMovies);
        console.log('arrFomStringAI', response);

        const arrayMovies = arrayFromString(response);
        setMoviesFromOpenaiApi(arrayMovies);
      } catch (error) {
        console.error('Error fetching data openai:', error);
      }
    };

    if (quizResult.length === 7) {
console.log('start AI', quizResult.length);
      openAiAPI(quizResult);
    }
  }, [quizResult]);

  const resultQuizData = (data) => {
    console.log('data quiz',data)
  setQuizResult(data);
}

  return (
    <Container>
      <QuizWrapper>
        <BorderTopSvg />
        {isQuizActive ? (
          <QuizQuestions quizData={resultQuizData} />
        ) : (
          <QuizListMovies arrMovies={moviesForList} />
        )}

        <BorderBottomSvg />
      </QuizWrapper>
    </Container>
  );
};
