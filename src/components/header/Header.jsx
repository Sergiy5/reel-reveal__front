import { MainLogo } from 'components/main-logo/MainLogo';
import {
  HeaderBgEllips,
  HeaderWrapper,
  WrapperHeaderContent,
} from './Header.styled';
import { HeaderSearchBar } from './header-search-bar/HeaderSearchBar';
import { HeaderNav } from './header-nav/HeaderNav';
import sprite from '../../assets/images/svg-sprite/sprite.svg';
import { useSize } from 'components/context/MyProvider';

const Header = () => {
  const viewWidth = useSize();

  return (
    <HeaderWrapper>
      <WrapperHeaderContent>
        <MainLogo isShowHalfLogo={viewWidth > 1025} />

        <HeaderSearchBar viewWidth={viewWidth} />

        <HeaderNav viewWidth={viewWidth} />
      </WrapperHeaderContent>
      <HeaderBgEllips >
        <use xlinkHref={`${sprite}#headerEllips `} />
      </HeaderBgEllips>
    </HeaderWrapper>
  );
};

export default Header;
