import sprite from '../../assets/images/svg-sprite/sprite-genres.svg';
import { SharedNavLink } from 'components/shared-nav_link/SharedNavLink';
import { SpanStyled, SvgGanreWrapper, SvgGenreStyled } from './ChooseGenres.styled';

export const IconGenre = ({ name }) => {

    const capitalizeFirstLetter = str =>
      `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

  return (
    <SharedNavLink to={'#'}>
      <SvgGanreWrapper>
      <SvgGenreStyled>
        <use xlinkHref={`${sprite}#${name}`} />
      </SvgGenreStyled>
      <SpanStyled>{capitalizeFirstLetter(name)}</SpanStyled>
      </SvgGanreWrapper>
    </SharedNavLink>
  );
};
