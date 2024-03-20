import { useState } from 'react';
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
import { quizDataList } from '../../assets/variables/quizDataList';
import { ProgresBar } from './progresBar/ProgresBar';

// const [page, title, ] = quizDataList;

export const Quiz = () => {
  const [quizCard, setQuizCard] = useState(() => quizDataList[0]);
  const [choicedButtons, setChoicedButtons] = useState([])
console.log(choicedButtons);
  const { quiz, title, page, buttons } = quizCard;

  const handleQuizCard = (list, page) => {
    if (page === 7) return;
  const currentQuiz = list.filter((item) => item.page === page + 1)
    return setQuizCard(...currentQuiz);
  }

  const handleChoiseBtn = (e) => {
    if (page === 7) return; // Need to add logic =======================

    setChoicedButtons(prev => [...prev, e]);
    handleQuizCard(quizDataList, page);
  }

  return (
    <QuizWrapper>
      <BorderTopSvg />

      <TittleProgresWrapper>
        <TitleQuizStyled>
          <SpanTitle>{quiz}</SpanTitle>
          {title}
        </TitleQuizStyled>

        <ProgresBar page={page} />
      </TittleProgresWrapper>

      <BtnQuizWrapper>
        <ButtonsQuiz click={handleChoiseBtn} buttons={buttons} />
      </BtnQuizWrapper>

      <BorderBottomSvg />
    </QuizWrapper>
  );
};
