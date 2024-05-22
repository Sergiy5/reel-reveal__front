import { nanoid } from 'nanoid';
import notFoundImg from '../../assets/images/No-Image.jpg';
import { LoadMoreBtn, MovieImg, WrapperMovieCard } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {

  const { poster_path, id, title, textBtn } = movie;
  
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `${notFoundImg}`;

  return (
    <WrapperMovieCard key={nanoid()}>
      {id === 'load_more' ? (
        <LoadMoreBtn id={id}>{textBtn}</LoadMoreBtn>
      ) : (
        <MovieImg key={nanoid()} id={id} src={poster} alt={title} />
      )}
    </WrapperMovieCard>
  );
};
