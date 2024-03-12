import { MainLogo } from 'components/mainLogo/MainLogo';
import { FooterBackgroundElips, FooterWrapper, MenuFooterWrapper } from './Footer.styled';
import { MenuFootr } from './menuFooter/MenuFooter';
import { ListSocial } from './listSocial/ListSocial';
import { ReactComponent as CameraIcon } from '../../assets/images/camera.svg';

export const Footer = () => {
  return (
    <>
      <FooterBackgroundElips/>
      <FooterWrapper>
        <MainLogo />
        <MenuFooterWrapper>
          <MenuFootr />
          <CameraIcon />
          <ListSocial />
        </MenuFooterWrapper>
      </FooterWrapper>
    </>
  );
};
