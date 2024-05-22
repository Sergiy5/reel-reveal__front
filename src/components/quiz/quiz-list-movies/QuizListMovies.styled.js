import styled from "styled-components";

export const WrapperQuizListMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
gap: 48px;
`;

export const QuizListMoviesTitle = styled.h2`
padding: 0 10px;
`;

export const WrapperQuizSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 975px;
  height: auto;

  @media (min-width: 601px) {
    width: 1180px;
  
  }

   @media (min-width: 769px) {
    width: 1180px;
    gap: 8px;
  }
`