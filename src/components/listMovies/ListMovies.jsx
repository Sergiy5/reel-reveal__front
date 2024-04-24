import { nanoid } from 'nanoid';
import { Container, SharedStyledLinkBtn } from 'styles';
import { MovieCard, MovieImg } from './ListMovies.styled';
import { colors } from 'assets/variables';

export const ListMovies = ({ movies }) => {
if(movies.id ===' load_more') console.log('MOre')
  return (
    <Container $row $gap={'20px'} $padding_zero>
      {movies.map(movie => {
        // const id = movie.id;
        // const {poster,} = movie.poster_path
        const { poster_path, id, title } = movie;
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : 'no_poster';

        return (
          <MovieCard id={id} $border={id === 'load_more'} key={nanoid()}>
            {id === 'load_more' ? (
              <SharedStyledLinkBtn
                $width={'100%'}
                $height={'100%'}
                $textColor={colors.textColor}
                $bRadius={'18px'}
                $bgColor={'transparent'}
                $border
              >
                {title}
              </SharedStyledLinkBtn>
            ) : (
              <MovieImg key={nanoid()} src={poster} alt={title} />
            )}
          </MovieCard>
        );
      })}
    </Container>
  );
};
