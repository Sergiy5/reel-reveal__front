import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const HowItWorksWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 24px;


  @media (min-width: 769px) {
    align-items: center;
    
  }

  @media (min-width: 1025px) {
    gap: 38px;
  }

  @media (min-width: 1281px) {
    gap: 48px;
  }
`; 

export const ContainerBgEllipses = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 40%;
  left: 20%;
  transform: translate(-20%, -40%);
`;

const aspectRatioHeightToWidth = getAspectRatio(1440, 850);

export const HowItWorksBgEllips = styled.svg`
  width: 100vw;
  height: calc(100vw / ${aspectRatioHeightToWidth});
  filter: blur(97px);
  mix-blend-mode: normal;

  @media (min-width: 600px) {
    margin-bottom: -50px;
  }

  @media (min-width: 769px) {
    margin-bottom: -250px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    height: 850px;
  }
`;

export const TitleH3styled = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 107%;
`;

export const HowItWorksAllCardsWrapper = styled.div`
position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 24px;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const SvgStyled = styled.svg`
  width: 61px;
  height: 61px;
`;

export const HowItWorksOneCardWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: start;
  gap: 14px;
  width: 100%;
  height: auto;

  @media (min-width: 1025px) {
    gap: 24px;
    justify-content: flex-start;
    text-align: start;

    width: calc(100% / 3);
    height: auto;
  }
`;
export const TextCardStyled = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;
