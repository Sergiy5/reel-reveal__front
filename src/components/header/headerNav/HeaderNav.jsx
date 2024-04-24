import { NavLinkStyled, QuizBtn, WrapperNav } from "./HeaderNav.styled";
import Sprite from '../../../assets/images/svgSprite/sprite.svg';
import { SvgStyled } from './HeaderNav.styled';

export const HeaderNav = () => {
    return (
      <WrapperNav>
        <NavLinkStyled>Movie search</NavLinkStyled>
        <NavLinkStyled>
          <SvgStyled width="18" height="16">
            <use xlinkHref={`${Sprite}#icon-heart`} />
          </SvgStyled>
        </NavLinkStyled>
        <NavLinkStyled>
          <SvgStyled width="18" height="20">
            <use xlinkHref={`${Sprite}#icon-user`} />
          </SvgStyled>
        </NavLinkStyled>
        <QuizBtn>take quiz</QuizBtn>
      </WrapperNav>
    );
}