import { getUpcomingMovies } from 'apiService/apiService';
import { Hero } from 'components/hero/Hero';
import { HowItWorks } from 'components/howItWork/HowItWorks';
import { Quiz } from 'components/quiz/Quiz';
import { GetShowMovies } from 'components/GetShowMovies/GetShowMovies';
import { topRatedMOvies } from 'apiService/topRatedMovies';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={'Upcoming movies in 2024'}
        getMovies={getUpcomingMovies}
      />
      <GetShowMovies
        title={'TOP rated movies'}
        getMovies={topRatedMOvies}
      />
    </>
  );
};
export default HomePage;
