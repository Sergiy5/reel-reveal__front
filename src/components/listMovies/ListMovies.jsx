import { nanoid } from 'nanoid';
import { Container, SharedStyledLinkBtn } from 'styles';
import { MovieCard, MovieImg } from './ListMovies.styled';
import { colors } from 'assets/variables';
import notFound from '../../assets/images/No-Image.jpg'

export const ListMovies = ({ movies, onLoadMore }) => {

  // console.log('movies in list', movies);
  const handleClick = (e) => {
    if (e.target.id === 'load_more') {
      const filteredMovies = movies.filter(movie => movie.title)
      const arrTitles = filteredMovies.map(movie => movie.title);
      onLoadMore(arrTitles)
    };
  }
  return (
    <Container onClick={handleClick} $row $gap={'20px'} $padding_zero>
      {movies.map(movie => {
        const { poster_path, id, title, textBtn } = movie;

        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : `${notFound}`;

        return (
          <MovieCard key={nanoid()}>
            {id === 'load_more' ? (
              <SharedStyledLinkBtn
                $width={'100%'}
                $height={'100%'}
                $textColor={colors.textColor}
                $bRadius={'18px'}
                $bgColor={'transparent'}
                $border
                id={id}
              >
                {textBtn}
              </SharedStyledLinkBtn>
            ) : (
              <MovieImg key={nanoid()} id={id} src={poster} alt={title} />
            )}
          </MovieCard>
        );
      })}
    </Container>
  );
};
