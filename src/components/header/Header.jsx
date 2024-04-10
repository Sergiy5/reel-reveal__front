import { MainLogo } from 'components/mainLogo/MainLogo';
import { SvgStyled, WrapperHeader } from './Header.styled';
import { HeaderSearchBar } from './headerSearchBar/HeaderSearchBar';
import { HeaderNav } from './headerNav/HeaderNav';
import Sprite from '../../assets/images/svgSprite/sprite.svg'

const Header = () => {
  return (
    <>
      <SvgStyled width="1440" height="361">
        <use xlinkHref={`${Sprite}#headerEllips `} />
      </SvgStyled>
      <WrapperHeader>
        <MainLogo />
        <HeaderSearchBar />
        <HeaderNav />
      </WrapperHeader>
    </>
  );
};

export default Header;
