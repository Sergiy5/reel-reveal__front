import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';
import { getAspectRatio } from 'utils';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.bgColor};

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderBgEllips = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: -50%;
  transform: translate(50%, 0);
  width: 100vw;
  height: calc(100vw / ${getAspectRatio(1440, 361)});
  filter: blur(97px);
  mix-blend-mode: normal;

  @media (min-width: 1440px) {
    top: 0;
    transform: translate(calc((100vw - (1440px) / 2)), 0);
    width: 1440px;
    height: 361px;
  }
`;

export const WrapperHeaderContent = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;
  height: 44px;
  background-color: ${colors.bgColor};

  @media (min-width: 769px) {
    padding: 0px 80px;
    height: 68px;
  }
  @media (min-width: 1025px) {
    padding: 0px 80px;
    height: 84px;
    width: 100%;
  }

  @media (min-width: 1281px) {
    padding: 0px 120px;
  }
  @media (min-width: 1440px) {
    padding: 0px 320px;
    width: 1840px;
  }
`;
