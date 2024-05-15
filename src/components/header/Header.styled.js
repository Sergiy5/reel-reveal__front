import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.bgColor};
`;

export const SvgStyled = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.$viewWidth / 3.9889}px;

  @media (min-width: 1440px) {
    width: 1440px;
    height: 361px;
  }
`;

export const WrapperHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: 64px;
  background-color: ${colors.bgColor};

  @media (min-width: 768px) {
    height: 68px;
  }
  @media (min-width: 1024px) {
    height: 84px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 8px 40px;
  width: ${props => props.$viewWidth}px;
  height: auto;

  @media (min-width: 767px) {
    justify-content: space-between;
    padding: 10px 80px;
    width: ${props => props.$viewWidth}px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
    /* width: ${props => props.$viewWidth}px; */
  }

  @media (min-width: 1281px) {
    padding: 20px 120px;
    width: ${props => props.$viewWidth}px;
  }

  @media (min-width: 1440px) {
    padding: 20px 120px;
    width: 1440px;
    /* gap: 108px; */
  }
`;

