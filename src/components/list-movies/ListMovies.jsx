import { nanoid } from 'nanoid';
import { LoadMoreBtn, MovieCard, MovieImg, WrapperListMovies } from './ListMovies.styled';
import notFoundImg from '../../assets/images/No-Image.jpg'

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
        const { poster_path, id, title, textBtn } = movie;

        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : `${notFoundImg}`;

        return (
          <li key={nanoid()}>
            <MovieCard key={nanoid()}>
              {id === 'load_more' ? (
                <LoadMoreBtn id={id}>{textBtn}</LoadMoreBtn>
              ) : (
                <MovieImg key={nanoid()} id={id} src={poster} alt={title} />
              )}
            </MovieCard>
          </li>
        );
      })}
    </WrapperListMovies>
  );
};
