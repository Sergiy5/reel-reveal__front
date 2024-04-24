import { useState } from "react";
import { ButtonsQuiz } from "../buttons/ButtonsQuiz";
import { ProgresBar } from "../progresBar/ProgresBar";
import { BtnQuizWrapper, SpanTitle, TitleQuizStyled, TittleProgresWrapper } from "./QuizQuestions.styled";
import { quizDataList } from '../../../assets/ststicData/quizDataList';
import { useEffect } from "react";


export const QuizQuestions = ({ quizData }) => {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(() => quizDataList[0]);
  const [currentPageForProgresBar, setCurrentPageForProgresBar] = useState(1);
  const [quizResult, setQuizResult] = useState([]);

  
  // Transition to the next question ================
  const moveOnToNextQueston = (listData, page) => {
    if (page < 8) {
      const currentQuiz = listData.filter(item => item.page === page + 1);
      setCurrentQuizQuestion(...currentQuiz);
    }
  };
  
  useEffect(() => {
    if (quizResult.length < 7) return
    quizData(quizResult);
  
  }, [quizData, quizResult])
  
  // Collect ansvers from quiz ======================
  const collectQuizChoices = e => {
    
    if (currentPageForProgresBar < 8) {
      setCurrentPageForProgresBar(page=>page + 1);
      
      setQuizResult(prev => [...prev, e]);
    }
    if(page === 7) return
    moveOnToNextQueston(quizDataList, page);
  };
  
  const { quiz, title, page, buttons } = currentQuizQuestion;
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
        <ButtonsQuiz click={collectQuizChoices} buttons={buttons} />
      </BtnQuizWrapper>
    </>
  );
};