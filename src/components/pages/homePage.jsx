import { useEffect, useState } from 'react';
import { Hero } from 'components/hero/Hero';
import { HowItWorks } from 'components/howItWork/HowItWorks';
import { Quiz } from 'components/quiz/Quiz';
import { GetShowMovies } from 'components/GetShowMovies/GetShowMovies';
import { topRatedMOvies } from 'apiService/topRatedMovies';
import { getUpcomingMovies } from 'apiService/getUpcomingMovies';
import { ChoseGenre } from 'components/choseGenres/ChooseGenres';
import SimpleSlider from 'components/stuckOnMovieChoices/StuckOnMovieChoices';
import { LinkToQuiz } from 'components/linkToQuiz/LinkToQuiz';
import { QuizListMovies } from 'components/quizListMovies/QuizListMovies';

const HomePage = () => {
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizForListMovies, setListQuizMovies] = useState([]);
  const [quizMovies, setQuizMovies] = useState([]);

  const getQuizMovies = arrMovies => {
    if (arrMovies.length) {
      setIsQuizActive(true);
      const arrForListMovies = arrMovies.map(movie => {
        return movie.data.results[0];
      });
      setQuizMovies(arrForListMovies)
    };
  }
   
    useEffect(() => {
  
      setListQuizMovies(quizMovies);
     
    }, [quizMovies])

  return (
    <>
      <Hero />
      <HowItWorks />
      <Quiz getMovies={getQuizMovies} />
      {isQuizActive ? <QuizListMovies arrMovies={quizForListMovies} /> : null}
      {!isQuizActive ? (
        <GetShowMovies
          title={'Upcoming 20 movies in 2024'}
          getMovies={getUpcomingMovies}
        />
      ) : null}
      {!isQuizActive ? (
        <GetShowMovies
          title={'TOP 20 rated movies'}
          getMovies={topRatedMOvies}
        />
      ) : null}
      <ChoseGenre />
      <SimpleSlider />
      <LinkToQuiz />
    </>
  );
};
export default HomePage;
