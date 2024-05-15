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
import { useSize } from 'components/context/MyProvider';

export const Footer = () => {
  const viewWidth = useSize();


  return (
    <FooterWrapper>
      <SvgBgStyled $viewWidth={viewWidth}>
        <use xlinkHref={`${Sprite}#footerBgEllips`} />
      </SvgBgStyled>
      <ContentFooterWrapper>
        <MainLogo/>
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
