import { useEffect, useState } from 'react';
import { BorderBottomSvg, BorderTopSvg, QuizWrapper } from './Quiz.styled';

import { Container } from 'styles';
import { getOpenAiAPI, getQuizMovies } from 'apiService';
import { QuizQuestions } from './quizQuestions/QuizQuestions';
import { QuizListMovies } from './quizListMovies/QuizListMovies';
import { arrayFromString, firstElementsFromArray, scrollToY } from 'utils';
import { Loader } from 'components/loader/Loader';

export const Quiz = () => {
  const [quizResult, setQuizResult] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  if (isQuizActive) scrollToY(1380);

  // GET (POST) from openai API=====================
  useEffect(() => {
    if (quizResult.length < 7) return;
    const openAiAPI = async quizMovies => {
      setIsLoading(true);
      try {
        const response = await getOpenAiAPI(quizMovies);
  
        const arrayMovies = arrayFromString(response);
  
        if (arrayMovies.length < 2) return
  
          setMoviesFromOpenaiApi(arrayMovies);
      } catch (error) {
        console.error('Error fetch data from openai:', error);
      }
    };
  
    openAiAPI(quizResult);
  
  }, [quizResult]);
  
  // Rquest to TMdB
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getAiMoviesFromQuizResult = async movies => {
      try {
        const requests = await getQuizMovies(movies);
        const responses = await Promise.all(requests);

        const requestArr = firstElementsFromArray(responses);

        const loadMoreCard = { id: 'load_more', title: 'LOAD MORE' };
        const arrFilmsWithLoadMoreCard = [...requestArr, loadMoreCard];

        setListMovies(arrFilmsWithLoadMoreCard);
        scrollToY(1440);
        setIsQuizActive(false);
      } catch (error) {
        console.log('Error in Quiz!!!', error);
      }
      finally {
        setIsLoading(false);
      }
    };

    getAiMoviesFromQuizResult(moviesFromOpenaiApi);
  }, [moviesFromOpenaiApi]);


  const onClickLoadMoreCArd = (movies) => {
    setQuizResult(movies)
  }

  return (
    <Container>
      <QuizWrapper>
        <BorderTopSvg />
        {isLoading ? (
          <Loader />
        ) : isQuizActive ? (
          <QuizQuestions quizData={setQuizResult} />
        ) : (
          <QuizListMovies
            isQuizActive={setIsQuizActive}
            arrMovies={listMovies}
            onLoadMoreCard={onClickLoadMoreCArd}
          />
        )}
        <BorderBottomSvg />
      </QuizWrapper>
    </Container>
  );
};
