import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'assets/variables/variables';
import { ReactComponent as heroBGEllipse } from '../../assets/images/heroBGEllipse.svg';
import heroImg from '../../assets/images/hero-image.webp';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 20px;
  text-align: start;
  padding-top: 56px;
  padding-bottom: 120px;
  height: 760px;
`;

export const HeroTextCTAWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 591px;
  height: 316px;
  gap: 24px;
`;

export const HeroTitle = styled.h1`
  font-family: fontH1;
  font-weight: 700;
  font-size: 52px;
  line-height: 115%;
`;

export const HeroText = styled.p`
  font-family: mainLightFont;
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
`;

export const StartQuizBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
  padding: 16px 48px;
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
export const HeroBGEllipse = styled(heroBGEllipse)`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`;
export const HeroImgWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 56px;
  right: 0;
  width: 590px;
  height: 584px;
  background: transparent;
  background-image: url(${heroImg});
`;
