import { useEffect, useState } from 'react';
import { BorderBottomSvg, BorderTopSvg, QuizWrapper } from './Quiz.styled';
import { getOpenAiAPI, getQuizMovies } from 'apiService';
import { QuizQuestions } from './quizQuestions/QuizQuestions';
import { QuizListMovies } from './quizListMovies/QuizListMovies';
import { firstElementsFromArray, loadMoreCard, scrollToY } from 'utils';
import { Loader } from 'components/loader/Loader';

export const Quiz = () => {
  const [quizResult, setQuizResult] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);
  const [allMoviesForOneSession, setAllMoviesForOneSession] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // if (isQuizActive) scrollToY(1330);
  // if (isLoading) scrollToY(1300);

  const clickLoadMore = (moviesArr) => {

    if (!moviesArr.length) return;

    const filteredMovies =  moviesArr.filter(element => allMoviesForOneSession.indexOf(element));
    setAllMoviesForOneSession(prev => [...prev, ...filteredMovies]);

  };

  const onNewQuiz = () => {
    setIsQuizActive(true);
    setAllMoviesForOneSession([]);
    setQuizResult([]);
  }
  // GET (POST) from openai API =====================
  useEffect(() => {
    
    if (quizResult.length < 7) return

    const openAiAPI = async (quizMovies, existedMovies) => {
      setIsLoading(true);
 
      try {
        const response = await getOpenAiAPI(quizMovies, existedMovies);
        if (!response) {
          setIsLoading(false)
          alert("Error... Try again")
          throw new Error()
        }
          setMoviesFromOpenaiApi(response);

      } catch (error) {
        console.error('Error fetch data from openai:', error);
      }
    };

    openAiAPI(quizResult, ...allMoviesForOneSession);

  }, [quizResult, allMoviesForOneSession]);

  // Rquest to TMdB
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromAIResult = async movies => {
      try {
        const promises = await getQuizMovies(movies);
        const response = await Promise.all(promises);

        const result = firstElementsFromArray(response);

        const arrFilmsWithLoadMoreCard = [...result, loadMoreCard()];

        setListMovies(arrFilmsWithLoadMoreCard);
        setIsQuizActive(false);
        scrollToY(1440);
        
      } catch (error) {
        console.log('Error in Quiz!!!', error);
      } finally {
        setIsLoading(false);
      }
    };
    const lastArrayFromAI = moviesFromOpenaiApi.slice(-7);

    getMoviesFromAIResult(lastArrayFromAI);
  }, [moviesFromOpenaiApi]);

  return (
      <QuizWrapper>
        <BorderTopSvg />
        {isLoading ? (
          <Loader />
        ) : isQuizActive ? (
          <QuizQuestions quizData={setQuizResult} />
        ) : (
          <QuizListMovies
            isQuizActive={onNewQuiz}
            arrMovies={listMovies}
            onLoadMoreCard={clickLoadMore}
          />
        )}
        <BorderBottomSvg />
      </QuizWrapper>
  );
};
