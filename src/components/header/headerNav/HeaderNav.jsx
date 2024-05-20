import { useEffect, useState } from "react";
import {
  SvgStyled,
  NavLinkStyled,
  QuizBtn,
  WrapperNav,
  MenuBtn,
  BurgerSvgStyled,
} from './HeaderNav.styled';
import sprite from '../../../assets/images/svgSprite/sprite.svg';
import useResize from "utils/useResize";


export const HeaderNav = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const viewWidth = useResize();
  // const [containerStyle, setContainerStyle] = useState({
  //   transform: `translateX(${sidebarVisible ? '0' : '-225px'})`,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     const windowWidth = window.innerWidth;
  //     let newTransformValue = '';

  //     if (windowWidth < 768) {
  //       newTransformValue = sidebarVisible ? '0' : '-225px';
  //     } else if (windowWidth >= 768 && windowWidth <= 1439) {
  //       newTransformValue = sidebarVisible ? '0' : '-300px';
  //     } else if (windowWidth >= 1440) {
  //       newTransformValue = sidebarVisible ? '0' : '0';
  //     }

  //     setContainerStyle({
  //       transform: `translateX(${newTransformValue})`,
  //     });
  //   };

  //   handleResize(); // Call it initially
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [sidebarVisible]);

  useEffect(() => {
    if (viewWidth <= 1280) setIsActiveMenu(false);
    if (viewWidth >= 1281) setIsActiveMenu(true);
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