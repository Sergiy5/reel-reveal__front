import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

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

export const StartQuizBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 285px;
  height: 40px;
  font-family: mainBoldFont;
  font-weight: 700;
  font-size: 18px;
  line-height: 333%;
  text-transform: uppercase;
  color: ${colors.bgColor};
  background-color: ${colors.accentColor};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.3);
  }
  &:focus {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.5);
  }
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
