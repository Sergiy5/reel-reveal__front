import { ListMovies } from "components/listMovies/ListMovies";
import { Container, SharedStyledLinkBtn } from "styles";

export const QuizListMovies = ({ arrMovies, isQuizActive }) => {
    
  return (
    <Container $padding_zero>
      <h2>Have you seen these?</h2>
      <ListMovies movies={arrMovies} />
      <SharedStyledLinkBtn onClick={()=>isQuizActive(true)} $width={'285px'}>
        retake quiz
      </SharedStyledLinkBtn>
    </Container>
  );
};