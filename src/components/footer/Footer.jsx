import { MainLogo } from 'components/main-logo/MainLogo';
import {
  SvgBgStyled,
  ContentFooterWrapper,
  MenuFooterWrapper,
  FooterWrapper,
} from './Footer.styled';
import { MenuFooter } from './menu-footer/MenuFooter';
import { ListSocial } from './list-social/ListSocial';
import sprite from '../../assets/images/svg-sprite/sprite.svg';
import useResize from 'utils/useResize';
import { LinkToQuiz } from 'components/link-to-quiz/LinkToQuiz';

export const Footer = () => {
  const viewWidth = useResize();

  return (
    <FooterWrapper>
      <ContentFooterWrapper>
        {viewWidth > 768 ? (
          <MainLogo isShowHalfLogo={viewWidth > 769} />
        ) : (
          <LinkToQuiz />
        )}
        <MenuFooterWrapper>
          {viewWidth > 768 ? <MenuFooter /> : null}
          <svg width="154" height="160">
            <use xlinkHref={`${sprite}#icon-camera`} />
          </svg>
          <ListSocial />
        </MenuFooterWrapper>
      </ContentFooterWrapper>
      {viewWidth > 769 ? <SvgBgStyled >
        <use xlinkHref={`${sprite}#footerBgEllips`} />
      </SvgBgStyled> : null}
    </FooterWrapper>
  );
};
