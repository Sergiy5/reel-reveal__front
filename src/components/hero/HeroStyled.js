import styled from 'styled-components';
import { ReactComponent as BgEllipsHero } from '../../assets/images/svgSprite/sprite.svg#heroEllips';

export const HeroWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 120px;
  max-width: 1440px;
  gap: 20px;

  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

export const HeroTextCTAWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 584px;
  gap: 24px;

  @media screen and (max-width: 1280px) {
    width: 400px;
    height: 460px;
  }

  @media screen and (min-width: 1280px) {
    width: 511px;
  }
  @media screen and (min-width: 1440px) {
    width: 590px;
  }

`;

export const HeroText = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;

export const SvgStyled = styled(BgEllipsHero)`
  position: absolute;
  z-index: 1;
  top: o;
  left: -20%;
  width: 433px;
  height: 460px;

  @media screen and (max-width: 1280px) {
    width: 833px;
    height: 890px;
    left: -52%;
  }

  @media screen and (min-width: 1280px) {
    width: 833px;
    height: 890px;
  }

  width: 833px;
  height: 890px;
`;

export const WrapperImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 584px;

  /* @media screen and (min-width: 767px) {
    width: 470px;
  } */

  @media screen and (max-width: 1280px) {
    width: 470px;
    height: 465px;
  }

  @media screen and (min-width: 1280px) {
    width: 590px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0px;
  width: 100%;
  height: auto;
`;
