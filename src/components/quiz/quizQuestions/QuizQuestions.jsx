import { useState } from "react";
import { ButtonsQuiz } from "../buttons/ButtonsQuiz";
import { ProgresBar } from "../progresBar/ProgresBar";
import { BtnQuizWrapper, SpanTitle, TitleQuizStyled, TittleProgresWrapper } from "./QuizQuestions.styled";
import { quizDataList } from '../../../assets/ststicData/quizDataList';


export const QuizQuestions = ({ quizData }) => {
  const [currentQuizCard, setCurrentQuizCard] = useState(() => quizDataList[0]);
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState([]);

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

      setQuizResult(prev => [...prev, e]);
    }

    if (page === 7) {return quizData(quizResult); }; // Need to add logic =======================

    handleQuizCard(quizDataList, page);
  };

  return (
    <>
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
    </>
  );
};