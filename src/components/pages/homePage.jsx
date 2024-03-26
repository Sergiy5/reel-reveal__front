import { Hero } from 'components/hero/Hero';
import { HowItWorks } from 'components/howItWork/HowItWorks';
import { Quiz } from 'components/quiz/Quiz';
import { GetShowMovies } from 'components/GetShowMovies/GetShowMovies';
import { topRatedMOvies } from 'apiService/topRatedMovies';
import { getUpcomingMovies } from 'apiService/getUpcomingMovies';

const HomePage = () => {
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
    </>
  );
};
export default HomePage;
