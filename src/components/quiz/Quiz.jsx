import { useEffect, useState } from 'react';
import { BorderBottomSvg, BorderTopSvg, QuizWrapper } from './Quiz.styled';
import { Container } from 'styles';
import { getOpenAiAPI, getQuizMovies } from 'apiService';
import { QuizQuestions } from './quizQuestions/QuizQuestions';
import { QuizListMovies } from './quizListMovies/QuizListMovies';
import { firstElementsFromArray, scrollToY } from 'utils';
import { Loader } from 'components/loader/Loader';

export const Quiz = () => {
  const [quizResult, setQuizResult] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);
  const [allMoviesForOneSession, setAllMoviesForOneSession] = useState([]);
  const [listMovies, setListMovies] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  if (isQuizActive) scrollToY(1330);
  if (!isQuizActive) scrollToY(1440);
  if (isLoading) scrollToY(1300);


  const clickLoadMore = (moviesArr) => {
    if (!moviesArr.length) return
    console.log('first', ...allMoviesForOneSession);
    console.log('second', ...moviesArr);
    const filteredMovies = new Set([...allMoviesForOneSession, ...moviesArr]);
    console.log('filteredMovies', filteredMovies);
    setAllMoviesForOneSession(prev => [...prev, ...filteredMovies]);
}

  const onNewQuiz = () => {
    setIsQuizActive(true);
    setAllMoviesForOneSession([]);
    setQuizResult([]);
  }
  // GET (POST) from openai API =====================
  useEffect(() => {
    // console.log('quizResult.length', !!quizResult.length < 7);
    
    // console.log(
    //   '!allMoviesForOneSession.length',
    //   !!allMoviesForOneSession.length
    // );
    if (quizResult.length < 7) return

    const openAiAPI = async (quizMovies, existedMovies) => {
      setIsLoading(true);
      // console.log('existedMovies', existedMovies);
      // console.log('quizMovies', quizMovies);
      try {
        const response = await getOpenAiAPI(quizMovies, existedMovies);
        setMoviesFromOpenaiApi(response);

        return response;

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
      // console.log('lastArrayFromAI', movies);
      try {
        const promises = await getQuizMovies(movies);
        const response = await Promise.all(promises);

        const result = firstElementsFromArray(response);

        const loadMoreCard = { id: 'load_more', textBtn: 'LOAD MORE' };

        const arrFilmsWithLoadMoreCard = [...result, loadMoreCard];

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
    <Container>
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
    </Container>
  );
};
