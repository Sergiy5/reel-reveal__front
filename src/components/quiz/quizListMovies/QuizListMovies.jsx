import { ListMovies } from "components/listMovies/ListMovies";
import { SharedStyledLinkBtn } from "styles";
import { WrapperQuizListMovies } from "./QuizListMovies.styled";

export const QuizListMovies = ({ arrMovies, isQuizActive, onLoadMoreCard }) => {
  return (
    <WrapperQuizListMovies $padding_zero>
      <h2>Have you seen these?</h2>
      <ListMovies movies={arrMovies} onLoadMore={onLoadMoreCard} />
      <SharedStyledLinkBtn onClick={isQuizActive} $width={'285px'}>
        retake quiz
      </SharedStyledLinkBtn>
    </WrapperQuizListMovies>
  );
};