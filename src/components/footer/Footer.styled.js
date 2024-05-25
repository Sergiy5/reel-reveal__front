import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';
import { getAspectRatio } from 'utils';

;
export const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 383px;
  background-color: ${colors.bgColor};

  @media (min-width: 1440px) {
  }
`;

export const ContentFooterWrapper = styled.div`
  position: absolute;
  z-index: 2;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding: 80px 120px; */
  width: 100%;
  height: 100%;
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
    /* padding: 0px 120px; */
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const MenuFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* margin-top: 16px; */
  /* height: fit-content; */
`;

export const SvgBgStyled = styled.svg`
  /* position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  @media (min-width: 1440px) {
    width: 1429px;
     height: 614px;
    
  }  */
  position: absolute;
  z-index: 1;
  left: -50%;

  bottom: 50%;
  transform: translateY(-50% 50%);
  width: 100vw;
  height: calc(width / ${getAspectRatio(1429, 614)});

  @media (min-width: 1440px) {
    bottom: 50%;
    left: calc(50vw - 720px);
    transform: translateY(-50% -50%);
    width: 1429px;
    height: 614px;
  }
`;
