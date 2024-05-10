import { MainLogo } from 'components/mainLogo/MainLogo';
import {
  SvgBgStyled,
  ContentFooterWrapper,
  MenuFooterWrapper,
  FooterWrapper,
} from './Footer.styled';
import { MenuFootr } from './menuFooter/MenuFooter';
import { ListSocial } from './listSocial/ListSocial';
import Sprite from '../../assets/images/svgSprite/sprite.svg';

export const Footer = () => {
  return (
    <FooterWrapper>
      <SvgBgStyled width="1429" height="614">
        <use xlinkHref={`${Sprite}#footerBgEllips`} />
      </SvgBgStyled>
      <ContentFooterWrapper>
        <MainLogo />
        <MenuFooterWrapper>
          <MenuFootr />
          <svg width="154" height="160">
            <use xlinkHref={`${Sprite}#icon-camera`} />
          </svg>
          <ListSocial />
        </MenuFooterWrapper>
      </ContentFooterWrapper>
    </FooterWrapper>
  );
};
