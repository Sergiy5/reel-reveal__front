import {
  SvgStyled,
  WrapperNav,
  MenuBtn,
  BurgerSvgStyled,
} from './HeaderNav.styled';
import sprite from '../../../assets/images/svg-sprite/sprite.svg';
import { SharedBtn } from "components/shared-btn/SharedBtn";
import { colors } from "assets/variables";
import { SharedNavLink } from "components/shared-nav_link/SharedNavLink";


export const HeaderNav = ({isShowMenu}) => {
 
  return (
    <WrapperNav>
      {isShowMenu ? (
        <>
          <SharedNavLink>Movie search</SharedNavLink>
          <SharedNavLink>
            <SvgStyled width="18" height="16">
              <use xlinkHref={`${sprite}#icon-heart`} />
            </SvgStyled>
          </SharedNavLink>
          <SharedNavLink>
            <SvgStyled width="18" height="20">
              <use xlinkHref={`${sprite}#icon-user`} />
            </SvgStyled>
          </SharedNavLink>
          <SharedBtn
            width={'140px'}
            height={'40px'}
            $bgColor={`${colors.textColor}`}
          >
            take quiz
          </SharedBtn>
        </>
      ) : (
        <MenuBtn>
          <BurgerSvgStyled>
            <use xlinkHref={`${sprite}#burger-icon`} />
          </BurgerSvgStyled>
        </MenuBtn>
      )}
    </WrapperNav>
  );
};