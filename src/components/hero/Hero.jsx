import {
  HeroBGEllipse,
  // HeroImgStyled,
  HeroImgWrapper,
  HeroText,
  HeroTextCTAWrapper,
  HeroTitle,
  HeroWrapper,
  StartQuizBtn,
} from './HeroStyled';
// import heroImg from '../../assets/images/heroImage.jpg';

export const Hero = () => {
  return (
    <>
      <HeroBGEllipse />
      <HeroWrapper>
        <HeroTextCTAWrapper>
          <HeroTitle>Discover Your Perfect Movie with ReelReveal!</HeroTitle>
          <HeroText>
            Tired of endlessly scrolling through streaming platforms, unsure of
            what to watch? Look no further! Reel Reveal is your go-to service
            for finding the perfect movie match.
          </HeroText>
          <StartQuizBtn to={'/search'}>Start quiz</StartQuizBtn>
        </HeroTextCTAWrapper>
        <HeroImgWrapper>
          {/* <HeroImgStyled src={heroImg} alt="Images movies" /> */}
        </HeroImgWrapper>
      </HeroWrapper>
    </>
  );
};
