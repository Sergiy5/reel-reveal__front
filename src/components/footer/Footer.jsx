import { MainLogo } from 'components/main-logo/MainLogo';
import {
  SvgBgStyled,
  ContentFooterWrapper,
  MenuFooterWrapper,
  FooterWrapper,
} from './Footer.styled';
import { MenuFootr } from './menu-footer/MenuFooter';
import { ListSocial } from './list-social/ListSocial';
import Sprite from '../../assets/images/svg-sprite/sprite.svg';
import useResize from 'utils/useResize';

export const Footer = () => {
  const viewWidth = useResize();

  return (
    <FooterWrapper>
      <SvgBgStyled $viewWidth={viewWidth}>
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
