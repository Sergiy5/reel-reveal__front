import { NavLinkStyled, QuizBtn, SvgHeartStyled, SvgUserStyled, WrapperNav } from "./HeaderNav.styled";
import Sprite from '../../../assets/images/svgSprite/sprite.svg';

export const HeaderNav = () => {
    return (
      <WrapperNav>
        <NavLinkStyled>Movie search</NavLinkStyled>
        <NavLinkStyled>
          <SvgHeartStyled width="18" height="16">
            <use xlinkHref={`${Sprite}#icon-heart`} />
          </SvgHeartStyled>
        </NavLinkStyled>
        <NavLinkStyled>
          <SvgUserStyled width="18" height="20">
            <use xlinkHref={`${Sprite}#icon-user`} />
          </SvgUserStyled>
        </NavLinkStyled>
        <QuizBtn>take quiz</QuizBtn>
      </WrapperNav>
    );
}