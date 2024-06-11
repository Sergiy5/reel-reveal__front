import { LinkToQuiz } from "components/link-to-quiz/LinkToQuiz";
import SimpleSlider from "components/stuck-on-movie-choices/StuckOnMovieChoices";
import useResize from "utils/useResize";

const MoviePage = () => {
  const viewWidth = useResize();

    return (
      <>
        <SimpleSlider />
        {viewWidth > 768 ? <LinkToQuiz /> : null}
      </>
    );
}

export default MoviePage