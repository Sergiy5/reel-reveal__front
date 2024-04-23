import { useEffect, useState } from 'react';
import { ButtonsQuiz } from './buttons/ButtonsQuiz';
import {
  BorderBottomSvg,
  BorderTopSvg,
  BtnQuizWrapper,
  QuizWrapper,
  SpanTitle,
  TitleQuizStyled,
  TittleProgresWrapper,
} from './Quiz.styled';
import { quizDataList } from '../../assets/ststicData/quizDataList';
import { ProgresBar } from './progresBar/ProgresBar';
import { Container } from 'styles';
import { getOpenAiAPI, getQuizMovies } from 'apiService';

export const Quiz = ({ getMovies }) => {
  const [currentQuizCard, setCurrentQuizCard] = useState(() => quizDataList[0]);
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizData, setQuizData] = useState([]);
  const [moviesFromOpenaiApi, setMoviesFromOpenaiApi] = useState([]);

  // Result from openai API
  useEffect(() => {
    if (!moviesFromOpenaiApi.length) return;

    const getMoviesFromQuizResult = async movies => {
      try {
        const requests = await getQuizMovies(movies);
        const responses = await Promise.all(requests);

        getMovies(responses);
      } catch (error) {
        console.log(error.message);
      }
    };

    getMoviesFromQuizResult(moviesFromOpenaiApi);
    // console.log('moviesFromOpenaiApi', moviesFromOpenaiApi);
  }, [getMovies, moviesFromOpenaiApi]);

  // GET (POST) from openai API=====================
  useEffect(() => {
    const openAiAPI = async () => {
      try {
        const respons = await getOpenAiAPI(quizData);
        setMoviesFromOpenaiApi(respons);
      } catch (error) {
        console.error('Error fetching data openai:', error);
      }
    };
    if (quizData.length === 7) {
      const arrayTitleFilms = openAiAPI(quizData);

      setMoviesFromOpenaiApi(arrayTitleFilms);
    }
  }, [quizData]);

  const { quiz, title, page, buttons } = currentQuizCard;

  // Transition to the next page ================
  const handleQuizCard = (list, page) => {
    if (page < 8) {
      const currentQuiz = list.filter(item => item.page === page + 1);

      setCurrentQuizCard(...currentQuiz);
    }
  };

  // Collect data from quiz ======================
  const handleChoiseBtn = e => {
    // Page for progres bar =======================
    if (currentPageForProgresBar < 8) {
      setCurrentPageForProgresBar(page + 1);

      setQuizData(prev => [...prev, e]);
    }

    if (page === 7) return; // Need to add logic =======================

    handleQuizCard(quizDataList, page);
  };

  return (
    <Container>
      <QuizWrapper>
        <BorderTopSvg />
        <TittleProgresWrapper>
          <TitleQuizStyled>
            <SpanTitle>{quiz}</SpanTitle>
            {title}
          </TitleQuizStyled>

          <ProgresBar page={currentPageForProgresBar} />
        </TittleProgresWrapper>
        <BtnQuizWrapper>
          <ButtonsQuiz click={handleChoiseBtn} buttons={buttons} />
        </BtnQuizWrapper>
        <BorderBottomSvg />
      </QuizWrapper>
    </Container>
  );
};
