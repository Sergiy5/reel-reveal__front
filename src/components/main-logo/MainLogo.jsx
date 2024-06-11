import { useRef } from 'react';
import sprite from '../../assets/images/svg-sprite/sprite.svg';
import { MainLogoSVGStyled, NavLinkStyled, SpanStyled } from './MainLogo.styled';

export const MainLogo = ({ isShowHalfLogo }) => {
  
   const navLinkRef = useRef(null);

   const handleClick = () => {
     if (navLinkRef.current) {
       navLinkRef.current.blur();
     }
   };

  return (
    <NavLinkStyled to={''} ref={navLinkRef} onClick={handleClick}>
      <MainLogoSVGStyled>
        <use xlinkHref={`${sprite}#icon-main-logo-strip`} />
      </MainLogoSVGStyled>
      {isShowHalfLogo ? <SpanStyled>ReelReveal</SpanStyled> : null}
    </NavLinkStyled>
  );
};
