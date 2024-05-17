import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;
  
export const HeroTextCTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 24px;

  @media (min-width: 769px) {
    width: ${props => props.$viewWidth - 160}px;
  }

  @media (min-width: 1025px) {
    width: ${props => (props.$viewWidth - 160) / 2}px;
    height: ${props => ((props.$viewWidth - 160) / 2) * 1.0102}px;
  }
  
  @media (min-width: 1281px) {
    align-items: flex-start;
    width: ${props => (props.$viewWidth - 260) / 2}px;
    height: ${props => ((props.$viewWidth - 260) / 2) * 1.0102}px;
  }

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

export const HeroBgEllips = styled.svg`
  position: absolute;
  z-index: 1;
  right: 50%;
  transform: translate(50%, 0%);
  width: 100vw;
  height: ${props => props.$viewWidth / 0.9359}px;

  @media (min-width: 1025px) {
    right: 32%;
    transform: translate(32%, 0%);
    width: ${props => (props.$viewWidth - 180) / 2 / 0.70828}px;
    height: ${props => (props.$viewWidth - 180) / 2 / 0.70828 / 0.9359}px;
  }

  @media (min-width: 1281px) {
    right: 50%;
    transform: translate(50%, 0%);
    width: ${props => props.$viewWidth / getAspectRatio(1440, 833)}px;
    height: ${props => props.$viewWidth / 1.72869 / 0.9359}px;
  }

  @media (min-width: 1440px) {
    width: 833px;
    height: 890px;
  }
`;


export const WrapperImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$viewWidth - 80}px;
  height: ${props => props.$viewWidth - 80}px;

  @media screen and (min-width: 769px) {
    width: ${props => props.$viewWidth - 160}px;
    height: ${props => (props.$viewWidth - 160) / 1.005}px;
  }

  @media screen and (min-width: 1025px) {
    width: ${props => (props.$viewWidth - 180) / 2}px;
    height: ${props => ((props.$viewWidth - 180) / 2) / 1.0102}px;
  }

  @media screen and (min-width: 1281px) {
    width: ${props => (props.$viewWidth - 260) / 2}px;
    height: ${props => (((props.$viewWidth - 260) / 2) / 1.0102)}px;
  }

  @media screen and (min-width: 1440px) {
    width: 590px;
    height: 584px;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  z-index: 1;
  transform: translate(0%, 0%);
  width: 100%;
  height: auto;
`;
