import Sprite from '../../assets/images/svgSprite/sprite.svg';
import { NavLinkStyled, SpanStyled } from './MainLogo.styled';
//

export const MainLogo = () => {
  return (
    <NavLinkStyled to={''}>
      <svg width="48" height="48">
        <use xlinkHref={`${Sprite}#icon-main-logo-strip`} />
      </svg>
      <SpanStyled>ReelReveal</SpanStyled>
    </NavLinkStyled>
  );
};
