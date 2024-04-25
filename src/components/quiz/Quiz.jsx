import { useEffect, useState } from 'react';
import {
  BorderBottomSvg,
  BorderTopSvg,
  QuizWrapper,
} from './Quiz.styled';

import { Container } from 'styles';
import { getOpenAiAPI, getQuizMovies } from 'apiService';
import { QuizQuestions } from './quizQuestions/QuizQuestions';
import { QuizListMovies } from './quizListMovies/QuizListMovies';
import { arrayFromString, firstElementsFromArray } from 'utils';

export const Quiz = () => {
 
  const [quizResult, setQuizResult] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);
  const [moviesForList, setMoviesForList] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(true);

  // Rquest to TMdB
  useEffect(() => {

    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromQuizResult = async movies => {
      try {

        const requests = await getQuizMovies(movies);
        const responses = await Promise.all(requests);

        const requestArr = firstElementsFromArray(responses);
        const loadMoreCard = { id: 'load_more', title: 'LOAD MORE' };
        console.log('requestArr', requestArr);
        const addedLoadMore = [...requestArr, loadMoreCard]
        console.log(addedLoadMore)
        setMoviesForList(addedLoadMore);
        setIsQuizActive(false);

      } catch (error) {
        console.log(error.message);
      }
    };

    getMoviesFromQuizResult(moviesFromOpenaiApi);

  }, [moviesFromOpenaiApi]);

  // GET (POST) from openai API=====================
  useEffect(() => {
if (quizResult.length < 7) return
    const openAiAPI = async quizMovies => {
      try {
        const response = await getOpenAiAPI(quizMovies);
        
        const arrayMovies = arrayFromString(response);
        setMoviesFromOpenaiApi(arrayMovies);

      } catch (error) {
        console.error('Error fetching data openai:', error);
      }
    };

    openAiAPI(quizResult);
    
  }, [quizResult]);

  return (
    <Container>
      <QuizWrapper>
        <BorderTopSvg />
        {isQuizActive ? (
          <QuizQuestions quizData={setQuizResult} />
        ) : (
          <QuizListMovies isQuizActive={setIsQuizActive} arrMovies={moviesForList} />
        )}

        <BorderBottomSvg />
      </QuizWrapper>
    </Container>
  );
};
