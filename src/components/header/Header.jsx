import { MainLogo } from 'components/mainLogo/MainLogo';
import {
  HeaderWrapper,
  SvgStyled,
  WrapperHeaderContent,
  Container,
} from './Header.styled';
import { HeaderSearchBar } from './headerSearchBar/HeaderSearchBar';
import { HeaderNav } from './headerNav/HeaderNav';
import Sprite from '../../assets/images/svgSprite/sprite.svg'
import useResize from 'utils/useResize';

const Header = () => {

  const windowWidth = useResize();
  console.log(windowWidth);
  return (
    <HeaderWrapper>
      <SvgStyled width="1440" height="361">
        <use xlinkHref={`${Sprite}#headerEllips `} />
      </SvgStyled>
      <WrapperHeaderContent>
        <Container>
          <MainLogo />
          <HeaderSearchBar />
          <HeaderNav />
        </Container>
      </WrapperHeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
