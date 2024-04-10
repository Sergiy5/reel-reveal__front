import styled from 'styled-components';

export const HeroTextCTAWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 590px;
  height: 584px;
  gap: 24px;
`;

export const HeroText = styled.p`
  font-family: mainLightFont;
  font-size: 20px;
  line-height: 30px;
`;

export const SvgStyled = styled.svg`
  position: absolute;
  z-index: 1;
  top: -24%;
  right: 120px;
`;

export const HeroImage = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 120px;
  width: 590px;
  height: 584px;
`;
