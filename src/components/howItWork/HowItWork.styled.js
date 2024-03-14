import { colors } from 'assets/variables/variables';
import styled from 'styled-components';
import { ReactComponent as howItWorksBGEllipse } from '../../assets/images/howItWorks/howItWorksBGEllipse.svg';

export const HowItWorksWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 346px;
  gap: 48px;
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
  flex-direction: row;
  width: 100%;
  height: 265px;
`;
export const SvgStyled = styled.svg`
  width: 61px;
  height: 61px;
`;

export const HowItWorksOneCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: start;
  gap: 24px;
  padding-top: 32px;
  width: 300px;
  height: 265px;
  background-color: ${colors.bgColor};
`;
export const TextCardStyled = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;
export const HowItWorksBGSElips = styled(howItWorksBGEllipse)`
  position: absolute;
  top: -54%;
  left: -10%;
`;
