import { nanoid } from 'nanoid';
import notFoundImg from '../../assets/images/No-Image.jpg';
import {LoadMoreBtn, MovieImg, WrapperMovieCard } from './MovieCard.styled';
import { useState } from 'react';
import { CardOverlay } from './card-overlay/CardOverlay';

export const MovieCard = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false)
  const { poster_path, id, title, textBtn, } = movie;
  // console.log(vote_average, release_date);
  
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `${notFoundImg}`;

  return (
    <WrapperMovieCard
      key={nanoid()}
      onMouseEnter={() => {
        setIsShowHover(true);
      }}
      onMouseLeave={() => {
        setIsShowHover(false);
      }}
    >
      {id === 'load_more' ? (
        <LoadMoreBtn id={id}>{textBtn}</LoadMoreBtn>
      ) : (
        <>
            {isShowHover ? <CardOverlay movie={movie} /> : null}
          <MovieImg key={nanoid()} id={id} src={poster} alt={title} />
        </>
      )}
    </WrapperMovieCard>
  );
};
