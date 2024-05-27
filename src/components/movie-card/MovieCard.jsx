import { nanoid } from 'nanoid';
import notFoundImg from '../../assets/images/No-Image.jpg';
import { HoverCard, HoverCardBtn, HoverCardSvg, ListButtons, LoadMoreBtn, MovieImg, RatingYearWrapper, TitleMovie, WrapperMovieCard } from './MovieCard.styled';
import sprite from '../../assets/images/svg-sprite/sprite.svg'
import { useState } from 'react';

export const MovieCard = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false)

  const { poster_path, id, title, textBtn } = movie;
  
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : `${notFoundImg}`;

  return (
    <WrapperMovieCard key={nanoid()} onMouseEnter={() => { setIsShowHover(true) }} onMouseLeave={()=>{setIsShowHover(false)} }>
      {id === 'load_more' ? (
        <LoadMoreBtn id={id}>{textBtn}</LoadMoreBtn>
      ) : (
        <>
          {isShowHover ? (
            <HoverCard>
              <RatingYearWrapper />
              <ListButtons>
                <li>
                  <HoverCardBtn>
                    <HoverCardSvg>
                      <use xlinkHref={`${sprite}#icon-heart_btn`} />
                    </HoverCardSvg>
                  </HoverCardBtn>
                </li>
                <li>
                  <HoverCardBtn>
                    <HoverCardSvg>
                      <use xlinkHref={`${sprite}#icon-checked`} />
                    </HoverCardSvg>
                  </HoverCardBtn>
                </li>
                <li>
                  <HoverCardBtn>
                    <HoverCardSvg>
                      <use xlinkHref={`${sprite}#icon-play`} />
                    </HoverCardSvg>
                  </HoverCardBtn>
                </li>
              </ListButtons>

              <TitleMovie>{title}</TitleMovie>
            </HoverCard>
          ) : null}
          <MovieImg key={nanoid()} id={id} src={poster} alt={title} />
        </>
      )}
    </WrapperMovieCard>
  );
};
