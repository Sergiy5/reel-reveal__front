import { useEffect, useState } from "react";
import {
  SvgStyled,
  NavLinkStyled,
  QuizBtn,
  WrapperNav,
  MenuBtn,
  BurgerSvgStyled,
} from './HeaderNav.styled';
import sprite from '../../../assets/images/svg-sprite/sprite.svg';
import useResize from "utils/useResize";


export const HeaderNav = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const viewWidth = useResize();

  useEffect(() => {
    if (viewWidth <= 1024) setIsActiveMenu(false);
    if (viewWidth >= 1025) setIsActiveMenu(true);
  }, [viewWidth]);

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
        <MenuBtn>
          <BurgerSvgStyled >
            <use xlinkHref={`${sprite}#burger-icon`} />
          </BurgerSvgStyled>
        </MenuBtn>
      )}
    </WrapperNav>
  );
};