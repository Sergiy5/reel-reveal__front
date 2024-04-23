import { ListMovies } from "components/listMovies/ListMovies";
import { Container } from "styles";

export const QuizListMovies = ({ arrMovies }) => {
    
  return (
    <Container>
      <ListMovies movies={arrMovies} />
    </Container>
  );
};