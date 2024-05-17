import { MainLogo } from 'components/mainLogo/MainLogo';
import {
  HeaderBgEllips,
  HeaderWrapper,
  WrapperHeaderContent,
} from './Header.styled';
import { HeaderSearchBar } from './headerSearchBar/HeaderSearchBar';
import { HeaderNav } from './headerNav/HeaderNav';
import sprite from '../../assets/images/svgSprite/sprite.svg'
import { useSize } from 'components/context/MyProvider';
import { Container } from 'styles';

const Header = () => {
  const viewWidth = useSize();

  return (
    <HeaderWrapper>

        {/* <Container $viewWidth={viewWidth}> */}
      <WrapperHeaderContent $viewWidth={viewWidth}>
          <MainLogo viewWidth={viewWidth} />

          <HeaderSearchBar viewWidth={viewWidth} />

          <HeaderNav viewWidth={viewWidth} />
      </WrapperHeaderContent>
      <HeaderBgEllips $viewWidth={viewWidth}>
        <use xlinkHref={`${sprite}#headerEllips `} />
      </HeaderBgEllips>
        {/* </Container> */}
    </HeaderWrapper>
  );
};

export default Header;
