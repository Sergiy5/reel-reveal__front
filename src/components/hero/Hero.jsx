import {
  HeroBGEllipse,
  HeroImage,
  HeroText,
  HeroTextCTAWrapper,
  HeroTitle,
  HeroWrapper,
  StartQuizBtn,
} from './HeroStyled';
import heroImg from '../../assets/images/hero-image.webp';

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBGEllipse />
      <HeroTextCTAWrapper>
        <HeroTitle>Discover Your Perfect Movie with ReelReveal!</HeroTitle>
        <HeroText>
          Tired of endlessly scrolling through streaming platforms, unsure of
          what to watch? Look no further! Reel Reveal is your go-to service for
          finding the perfect movie match.
        </HeroText>
        <StartQuizBtn to={'/search'}>Start quiz</StartQuizBtn>
      </HeroTextCTAWrapper>
      <HeroImage src={heroImg} alt="Hero movies" />
    </HeroWrapper>
  );
};
