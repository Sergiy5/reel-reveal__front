import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  height: auto;
  gap: 24px;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const HeroTextCTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 24px;

  @media (min-width: 1440px) {
    width: 590px;
    height: 584px;
  }
`;

export const HeroText = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;

export const WrapperImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media screen and (min-width: 1440px) {
    width: 590px;
    height: 584px;
  }
`;

export const HeroImage = styled.img`
  z-index: 1;
  transform: translate(0%, 0%);
  width: 100%;
  height: auto;
`;

const aspectRatioViewWidthToWidth = getAspectRatio(1440, 833); 

export const HeroBgEllips = styled.svg`
  position: absolute;
  z-index: 1;
  right: 50%;
  transform: translate(50%, 0%);
  width: 100vw;
  aspect-ratio: 833/890;
  filter: blur(97px);

  @media (min-width: 1025px) {
    transform: translate(46%, -1%);
    width: calc(100vw / ${aspectRatioViewWidthToWidth});
  }

  @media (min-width: 1281px) {
    transform: translate(49%, 0%);
    width: calc(100vw / ${aspectRatioViewWidthToWidth});
  }

  @media (min-width: 1440px) {
    width: 833px;
    height: 890px;
  }
`;