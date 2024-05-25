import { Hero } from 'components/hero/Hero';
import { HowItWorks } from 'components/how-It-work/HowItWorks';
import { Quiz } from 'components/quiz/Quiz';
import { GetShowMovies } from 'components/get-show-movies/GetShowMovies';
import { getUpcomingMovies } from 'api-service/getUpcomingMovies';
import { topRatedMOvies } from 'api-service/topRatedMovies';
import { ChoseGenre } from 'components/chose-genres/ChooseGenres';
import SimpleSlider from 'components/stuck-on-movie-choices/StuckOnMovieChoices';
import { LinkToQuiz } from 'components/link-to-quiz/LinkToQuiz';
import useResize from 'utils/useResize';

const HomePage = () => {
  const viewWidth = useResize();
  return (
    <>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={'Upcoming 20 movies in 2024'}
        getMovies={getUpcomingMovies}
      />
      <GetShowMovies title={'TOP 20 rated movies'} getMovies={topRatedMOvies} />
      <ChoseGenre />
      <SimpleSlider />
      {viewWidth > 768 ? <LinkToQuiz /> : null}
    </>
  );
};
export default HomePage;
