import sprite from '../../assets/images/svgSprite/sprite-genres.svg';
import { NavLinkIconStyled, SpanStyled, SvgGenreStyled } from './ChooseGenres.styled';

export const IconGenre = ({ name, ...props }) => {

    const capitalizeFirstLetter = str =>
      `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <NavLinkIconStyled to={'#'}>
      <SvgGenreStyled {...props}>
        <use xlinkHref={`${sprite}#${name}`} />
      </SvgGenreStyled>
      <SpanStyled>{capitalizeFirstLetter(name)}</SpanStyled>
    </NavLinkIconStyled>
  );
};
