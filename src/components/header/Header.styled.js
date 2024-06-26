import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.bgColor};

  @media (min-width: 1440px) {
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;
  width: 100%;
  height: 44px;
  background-color: ${colors.bgColor};
  z-index: 2;

  @media (min-width: 769px) {
    padding: 0px 60px;
    height: 68px;
  }
  @media (min-width: 1025px) {
    height: 84px;
    width: 100%;
  }

  @media (min-width: 1281px) {
    padding: 0px 120px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
`;

export const HeaderBgEllips = styled.svg`
  position: absolute;
  top: 0;
  left: -50%;
  transform: translate(50%, 0);
  width: 100%;
  aspect-ratio: 1440/361;
  filter: blur(97px);
  mix-blend-mode: normal;
  z-index: 1;

  @media (min-width: 1440px) {
    top: 0;
    transform: translate(calc((100vw - (1440px) / 2)), 0);
    width: 1440px;
    height: 361px;
  }
`;
