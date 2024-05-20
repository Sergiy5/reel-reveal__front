import { useState } from 'react';
import { ButtonQuiz } from '../buttons/ButtonQuiz';
import { ProgresBar } from '../progresBar/ProgresBar';
import {
  BtnQuizWrapper,
  SpanTitle,
  TitleQuizStyled,
  TittleProgresWrapper,
  WrapperQuizQustions,
} from './QuizQuestions.styled';
import { quizDataList } from '../../../assets/ststicData/quizDataList';
import { useEffect } from 'react';
import useResize from 'utils/useResize';


export const QuizQuestions = ({ quizData }) => {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(
    () => quizDataList[0]
  );
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

const viewWidth = useResize()

  // Transition to the next question ================
  const moveOnToNextQueston = (listData, page) => {
    if (page < 8) {
      const currentQuiz = listData.filter(item => item.page === page + 1);
      setCurrentQuizQuestion(...currentQuiz);
    }
  };

  useEffect(() => {
    if (quizResult.length < 7) return;
    quizData(quizResult);
  }, [quizData, quizResult]);

  // Collect ansvers from quiz ======================
  const collectQuizChoices = e => {
    if (currentPageForProgresBar < 8) {
      setCurrentPageForProgresBar(page => page + 1);

      setQuizResult(prev => [...prev, e]);
    }
    if (page === 7) return setIsDisabled(true);
    moveOnToNextQueston(quizDataList, page);
  };

  const { quiz, title, page, options } = currentQuizQuestion;
  return (
    <WrapperQuizQustions>
      <TittleProgresWrapper>
        <TitleQuizStyled>
          <SpanTitle>{quiz}</SpanTitle>
          {title}
        </TitleQuizStyled>

        {viewWidth > 1024 ? (
          <ProgresBar page={currentPageForProgresBar} />
        ) : null}

      </TittleProgresWrapper>

      <BtnQuizWrapper>
        <ButtonQuiz
          click={collectQuizChoices}
          isActiv={isDisabled}
          buttons={options}
        />
      </BtnQuizWrapper>

      {viewWidth < 1025 ? <ProgresBar page={currentPageForProgresBar} /> : null}

    </WrapperQuizQustions>
  );
};
