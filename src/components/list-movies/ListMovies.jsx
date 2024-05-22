import { nanoid } from 'nanoid';
import { WrapperListMovies } from './ListMovies.styled';
import { MovieCard } from 'components/movie-card/MovieCard';

export const ListMovies = ({ movies, onLoadMore }) => {

  const handleClick = (e) => {
    if (e.target.id === 'load_more') {
      const filteredMovies = movies.filter(movie => movie.title)
      const arrExistedTitles = filteredMovies.map(movie => movie.title);
      onLoadMore(arrExistedTitles)
    };
  }

  return (
    <WrapperListMovies onClick={handleClick} >
      {movies.map(movie => {
        return <MovieCard key={nanoid()} movie={movie} />;
      })}
    </WrapperListMovies>
  );
};
