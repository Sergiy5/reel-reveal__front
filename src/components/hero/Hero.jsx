import { NavLink } from 'react-router-dom';
import {
  HeroImage,
  HeroText,
  HeroTextCTAWrapper,
  WrapperImg,
  HeroWrapper,
  HeroBgEllips,
} from './HeroStyled';
import sprite from '../../assets/images/svgSprite/sprite.svg'
import heroImg from '../../assets/images/heroImage.webp';
import { SharedStyledLinkBtn } from 'styles/SharedStyledLinkBtn.styled';
import { useSize } from 'components/context/MyProvider';


export const Hero = () => {
  const viewWidth = useSize();
  
  return (
    <HeroWrapper $viewWidth={viewWidth}>
      <HeroTextCTAWrapper $viewWidth={viewWidth}>
        <h1>Discover Your Perfect Movie with ReelReveal!</h1>

        <HeroText>
          Tired of endlessly scrolling through streaming platforms, unsure of
          what to watch? Look no further! Reel Reveal is your go-to service for
          finding the perfect movie match.
        </HeroText>

        <SharedStyledLinkBtn as={NavLink} to="#" $width="285px">
          start quiz
        </SharedStyledLinkBtn>
      </HeroTextCTAWrapper>

      <WrapperImg $viewWidth={viewWidth}>
        <HeroBgEllips $viewWidth={viewWidth}>
          <use xlinkHref={`${sprite}#heroEllips`} />
        </HeroBgEllips>
        <HeroImage src={heroImg} alt="Hero movies" />
      </WrapperImg>
    </HeroWrapper>
  );
};
