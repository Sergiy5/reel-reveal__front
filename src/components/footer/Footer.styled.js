import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';
import { getAspectRatio } from 'utils';

;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 263px;
  background-color: ${colors.bgColor};

  @media (min-width: 769px) {
    height: 383px;
  }
`;

export const ContentFooterWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  gap: 16px;
  background-color: ${colors.bgColor};

  @media (min-width: 769px) {
    align-items: start;
    padding: 80px 60px;
  }
  @media (min-width: 1025px) {
    /* padding: 80px 60px; */
    width: 100%;
  }

  @media (min-width: 1281px) {
    padding: 80px 120px;
  }
  @media (min-width: 1440px) {
    padding: 80px 320px;
    width: 1840px;
  }
`;

export const MenuFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SvgBgStyled = styled.svg`
  position: absolute;
  /* z-index: 0; */
  width: 100vw;
  height: calc(100vw / ${getAspectRatio(1429, 614)});
  filter: blur(97px);
  mix-blend-mode: normal;

  @media (min-width: 769px) {
    transform: translate(0%, -19%);
  }

  @media (min-width: 1440px) {
    width: 1429px;
    height: 614px;
  }
`;
