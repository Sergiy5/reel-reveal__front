import React from 'react';
import { SvgBgEllips, WrapperChoseGenre, WrapperIconsGenres } from './ChooseGenres.styled';
import { IconGenre } from './IconGenre';
import sprite from '../../assets/images/svg-sprite/sprite-genres.svg'
 
export const ChoseGenre = () => {

  return (
    <WrapperChoseGenre>
      <SvgBgEllips>
        <use xlinkHref={`${sprite}#genresEllips`} />
      </SvgBgEllips>
      <h2>Choose a movie by genre</h2>
      <WrapperIconsGenres>
        <IconGenre name="comedy" />
        <IconGenre name="thriller" />
        <IconGenre name="detective" />
        <IconGenre name="drama" />
        <IconGenre name="romcom" />
        <IconGenre name="fantasy" />
        <IconGenre name="history" />
        <IconGenre name="sci-fi" />
        <IconGenre name="non-fic" />
        <IconGenre name="horror" />
        <IconGenre name="adventure" />
        <IconGenre name="cartoon" />
        <IconGenre name="musical" />
        <IconGenre name="anime" />
      </WrapperIconsGenres>
    </WrapperChoseGenre>
  );
};
