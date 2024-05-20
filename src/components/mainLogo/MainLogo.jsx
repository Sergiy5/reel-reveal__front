import Sprite from '../../assets/images/svgSprite/sprite.svg';
import { MainLogoSVGStyled, NavLinkStyled, SpanStyled } from './MainLogo.styled';
import useResize from 'utils/useResize';
//

export const MainLogo = () => {
  const viewWidth = useResize();


  return (
    <NavLinkStyled to={''}>
      <MainLogoSVGStyled >
        <use xlinkHref={`${Sprite}#icon-main-logo-strip`} />
      </MainLogoSVGStyled>
      {viewWidth > 1024 ? (
        <SpanStyled>ReelReveal</SpanStyled>
      ) : null} 
    </NavLinkStyled>
  );
};
