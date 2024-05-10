import { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeroImage,
  HeroText,
  HeroTextCTAWrapper,
  SvgStyled,
  WrapperImg,
  HeroWrapper,
} from './HeroStyled';
import heroImg from '../../assets/images/heroImage.webp';
import Sprite from '../../assets/images/svgSprite/sprite.svg';
import { SharedStyledLinkBtn } from 'styles/SharedStyledLinkBtn.styled';


export const Hero = () => {


  useEffect(() => {
    
    /*Looking max number division without a remainder============*/
    // const compairNumbers = (number1, numbe2) => {
    //   for (let i = number1 - 1; i > 0; i--) {
    //     if (number1 % i === 0) {
    //       if (numbe2 % i === 0) {
    //         // const largest = Math.max(i);
    //         console.log('largest', i);
    //         return i;
    //       }
    //     }
    //   }
    // };
    // compairNumbers(5555200, 666125);
  }, []);

  return (
    <HeroWrapper>
      <HeroTextCTAWrapper>
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
      <WrapperImg>
        <SvgStyled >
          {/* <use xlinkHref={`${Sprite}#heroEllips`} /> */}
        </SvgStyled>
        <HeroImage src={heroImg} alt="Hero movies" />
      </WrapperImg>
    </HeroWrapper>
  );
};
