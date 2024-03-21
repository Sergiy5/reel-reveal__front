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
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizData, setQuizData] = useState([]);
console.log(quizData)
  const { quiz, title, page, buttons } = quizCard;

  // Transition to the next page ================
  const handleQuizCard = (list, page) => {
    if (page < 8) {
      const currentQuiz = list.filter(item => item.page === page + 1);

      setQuizCard(...currentQuiz);
    }
  };

  // Collect data from quiz ======================
  const handleChoiseBtn = (e) => {

    // Page for ProgresBar =======================
    if (currentPageForProgresBar < 8) {
      setCurrentPageForProgresBar(page + 1);
      setQuizData(prev => [...prev, e]);
    }

    if (page === 7) return; // Need add logic =======================

    handleQuizCard(quizDataList, page);
  };

  return (
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
  );
};
