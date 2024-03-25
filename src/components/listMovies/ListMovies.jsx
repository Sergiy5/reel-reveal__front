import { nanoid } from 'nanoid';

import { WrapperMovieList } from 'styles/Container.styled';
import { MovieImg } from './ListMovies.styled';

export const ListMovies = ({ movies }) => {
  return (
    <WrapperMovieList>
      {movies.map(movie => {
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'no_poster';

        return <MovieImg key={nanoid()} src={poster} alt={movie.title} />;
      })}
    </WrapperMovieList>
  );
};
