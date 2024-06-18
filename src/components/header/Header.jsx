import { useEffect, useState } from 'react';
import { MainLogo } from 'components/main-logo/MainLogo';
import {
  ContainerContent,
  HeaderBgEllips,
  HeaderWrapper,
  WrapperHeaderContent,
} from './Header.styled';
import { HeaderSearchBar } from './header-search-bar/HeaderSearchBar';
import { HeaderNav } from './header-nav/HeaderNav';
import sprite from '../../assets/images/svg-sprite/sprite.svg';
import useResize from 'utils/useResize';

const Header = () => {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  const viewWidth = useResize();


    useEffect(() => {
      if (viewWidth <= 1024) setIsShowBurgerMenu(false);
      if (viewWidth >= 1025) setIsShowBurgerMenu(true);


    }, [viewWidth]);


  return (
    <HeaderWrapper>
      <WrapperHeaderContent>
        <ContainerContent>
          <MainLogo isShowHalfLogo={viewWidth > 1280} />

          <HeaderSearchBar viewWidth={viewWidth} />

          <HeaderNav isShowMenu={isShowBurgerMenu} />
        </ContainerContent>
      </WrapperHeaderContent>
      <HeaderBgEllips>
        <use xlinkHref={`${sprite}#headerEllips `} />
      </HeaderBgEllips>
    </HeaderWrapper>
  );
};

export default Header;
