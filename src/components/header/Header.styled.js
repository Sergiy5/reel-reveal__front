import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const HeaderWrapper = styled.div`
  position: relative;
  background-color: ${colors.bgColor};
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${props => props.$viewWidth - 80}px;
  
  /* width: 320px; */
  height: auto;
  padding: 8px 16px;
  
  @media screen and (min-width: 767px) {
    justify-content: space-between;
    padding: 15px 20px;
    width: ${props => props.$viewWidth - 200}px;

    /* width: 600px; */
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 0px;
    width: ${props => props.$viewWidth - 200}px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 120px;
    width: 1440px;
  }
`;

export const WrapperHeaderContent = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 84px;
  background-color: ${colors.bgColor};
`;

export const SvgStyled = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
