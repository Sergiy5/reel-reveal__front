import { NavLink } from 'react-router-dom';
import {
  HeroImage,
  HeroText,
  HeroTextCTAWrapper,
  WrapperImg,
  HeroWrapper,
  HeroBgEllips,
} from './HeroStyled';
import sprite from '../../assets/images/svg-sprite/sprite.svg';
import heroImg from '../../assets/images/heroImage.webp';
import { SharedBtn } from 'components/shared-btn/SharedBtn';

export const Hero = () => {
  
  return (
    <HeroWrapper>
      <HeroTextCTAWrapper>
        <h1>Discover Your Perfect Movie with ReelReveal!</h1>

        <HeroText>
          Tired of endlessly scrolling through streaming platforms, unsure of
          what to watch? Look no further! Reel Reveal is your go-to service for
          finding the perfect movie match.
        </HeroText>

        <SharedBtn as={NavLink} to="#" width="285px">
          start quiz
        </SharedBtn>
      </HeroTextCTAWrapper>

      <WrapperImg>
        <HeroBgEllips>
          <use xlinkHref={`${sprite}#heroEllips`} />
        </HeroBgEllips>
        <HeroImage src={heroImg} alt="Hero movies" />
      </WrapperImg>
    </HeroWrapper>
  );
};

// const screenWidth = window.innerWidth;
// const pixelRatio = window.devicePixelRatio || 1;
// const isRetina = pixelRatio > 1;

// let imageIndex = 0;
// if (screenWidth <= 375) {
//   imageIndex = 0;
// } else if (screenWidth >= 768) {
//   imageIndex = 1;
// } else if (screenWidth >= 1440) {
//   imageIndex = 2;
// }

// if (isRetina) {
//   imageIndex = imageIndex + 3;
// }

// const imagePaths = [
//   require('../../images/GOOSE-mobile.png'),
//   require('../../images/GOOSE-tablet.png'),
//   require('../../images/GOOSE-desktop.png'),
//   require('../../images/GOOSE-mobile@2x.png'),
//   require('../../images/GOOSE-tablet@2x.png'),
//   require('../../images/GOOSE-desktop@2x.png'),
// ];

// const selectedImagePath = imagePaths[imageIndex];
