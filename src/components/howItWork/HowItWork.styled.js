import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const HowItWorksWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 28px;

  @media (min-width: 1024px) {
    gap: 38px;
  }

  @media (min-width: 1280px) {
    gap: 48px;
  }
`; 

export const HowItWorksBgEllips = styled.svg`
  position: absolute;
  top: -54%;
  left: 0;
  width: 100%;
  height: ${() => `calc(100vw / ${getAspectRatio(1440, 850)})`};

  @media (max-width: 768px) {
    top: 10%;
    transform: rotate(90deg);
  }
`;

export const TitleH3styled = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 107%;
`;

export const HowItWorksAllCardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const SvgStyled = styled.svg`
  width: 61px;
  height: 61px;
`;

export const HowItWorksOneCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 24px;
  padding-top: 32px;
  width: 100%;
  height: auto;
  background-color: ${colors.bgColor};

  @media (min-width: 769px) {
    justify-content: flex-start;
    text-align: start;

    width: 300px;
    height: auto;
  }
`;
export const TextCardStyled = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;
