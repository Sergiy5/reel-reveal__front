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
import { useSize } from 'components/context/MyProvider';

const Header = () => {
  const viewWidth = useSize();

  return (
    <HeaderWrapper>
      <SvgStyled width="1440" height="361">
        <use xlinkHref={`${Sprite}#headerEllips `} />
      </SvgStyled>

      <WrapperHeaderContent>
        <Container $viewWidth={viewWidth}>
          <MainLogo viewWidth={viewWidth} />

          <HeaderSearchBar viewWidth={viewWidth} />

          <HeaderNav viewWidth={viewWidth} />
          
        </Container>
      </WrapperHeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
