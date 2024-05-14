import { useEffect, useState } from "react";
import {
  SvgStyled,
  NavLinkStyled,
  QuizBtn,
  WrapperNav,
  MenuBtn,
} from './HeaderNav.styled';
import sprite from '../../../assets/images/svgSprite/sprite.svg';


export const HeaderNav = ({ viewWidth }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  useEffect(() => {
    if (viewWidth > 1280) setIsActiveMenu(true);
   if (viewWidth < 1279) setIsActiveMenu(false);


  }, [viewWidth])
  

    return (
      <WrapperNav>
        {isActiveMenu ? (
          <>
            <NavLinkStyled>Movie search</NavLinkStyled>
            <NavLinkStyled>
              <SvgStyled width="18" height="16">
                <use xlinkHref={`${sprite}#icon-heart`} />
              </SvgStyled>
            </NavLinkStyled>
            <NavLinkStyled>
              <SvgStyled width="18" height="20">
                <use xlinkHref={`${sprite}#icon-user`} />
              </SvgStyled>
            </NavLinkStyled>
            <QuizBtn>take quiz</QuizBtn>
          </>
        ) : (
            <MenuBtn >
          <SvgStyled
            width="30px"
            height="40px"
          >
            <use xlinkHref={`${sprite}#burger-icon`} />
          </SvgStyled>
            </MenuBtn>
        )}
      </WrapperNav>
    );
}