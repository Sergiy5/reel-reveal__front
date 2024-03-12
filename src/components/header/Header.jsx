import { MainLogo } from 'components/mainLogo/MainLogo';
import { HeaderBackgroundElips, WrapperHeader } from './Header.styled';
import { HeaderSearchBar } from './headerSearchBar/HeaderSearchBar';
import { HeaderNav } from './headerNav/HeaderNav';

const Header = () => {
  return (
    <>
      <HeaderBackgroundElips />
      <WrapperHeader>
        <MainLogo />
        <HeaderSearchBar />
        <HeaderNav />
      </WrapperHeader>
    </>
  );
};

export default Header;
