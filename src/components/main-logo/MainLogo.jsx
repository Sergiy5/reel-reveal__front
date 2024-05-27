import sprite from '../../assets/images/svg-sprite/sprite.svg';
import { MainLogoSVGStyled, NavLinkStyled, SpanStyled } from './MainLogo.styled';

export const MainLogo = ({isShowHalfLogo}) => {

  return (
    <NavLinkStyled to={''}>
      <MainLogoSVGStyled>
        <use xlinkHref={`${sprite}#icon-main-logo-strip`} />
      </MainLogoSVGStyled>
      { isShowHalfLogo ? (
        <SpanStyled>ReelReveal</SpanStyled>
      ) : null}
    </NavLinkStyled>
  );
};
