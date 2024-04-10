import { nanoid } from 'nanoid';
import { Container } from 'styles';
import { MovieImg } from './ListMovies.styled';

export const ListMovies = ({ movies }) => {
  return (
    <Container $row $gap={'20px'} $padding>
      {movies.map(movie => {
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'no_poster';

        return <MovieImg key={nanoid()} src={poster} alt={movie.title} />;
      })}
    </Container>
  );
};
