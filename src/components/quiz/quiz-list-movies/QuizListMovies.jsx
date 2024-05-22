import { ListMovies } from 'components/list-movies/ListMovies';
import { SharedStyledLinkBtn } from 'styles';
import { QuizListMoviesTitle, WrapperQuizListMovies, } from './QuizListMovies.styled';
import useResize from 'utils/useResize';

import { MySlider } from 'components/my-slider/MySlider';


export const QuizListMovies = ({ arrMovies, isQuizActive, onLoadMoreCard }) => {
  const viewWidth = useResize();

  const handleClick = e => {
    if (e.target.id === 'load_more') {
      const filteredMovies = arrMovies.filter(movie => movie.title);
      const arrExistedTitles = filteredMovies.map(movie => movie.title);
      onLoadMoreCard(arrExistedTitles);
    }
  };
  

  return (
    <WrapperQuizListMovies onClick={handleClick}>
      <QuizListMoviesTitle>Have you seen these?</QuizListMoviesTitle>

      {viewWidth > 1024 ? (
        <ListMovies movies={arrMovies} onLoadMore={onLoadMoreCard} />
      ) : (
        <MySlider arrMovies={arrMovies} onClick={handleClick} />
      )}
      <SharedStyledLinkBtn onClick={isQuizActive} $width={'285px'}>
        retake quiz
      </SharedStyledLinkBtn>
    </WrapperQuizListMovies>
  );
};
