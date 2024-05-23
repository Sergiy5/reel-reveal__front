import { colors } from 'assets/variables';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperChoseGenre = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 48px;
`;

export const WrapperIconsGenres = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 64px;

  @media (min-width: 481px) {
    justify-content: space-between;
  }
`;

export const NavLinkIconStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95px;
  height: 85px;
  gap: 8px;
  cursor: pointer;
  scale: none;
  outline: transparent;
  border-radius: 3px;
  
  transition-property: color, scale, outline;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    scale: 1.05;
    color: ${colors.accentColor};
  }
  &:focus {
    color: ${colors.accentColor};
    outline: 2px solid ${colors.accentColor};
  }
  &:active {
    scale: 1;
    color: ${colors.accentClicked};
  }
`;

export const SvgGenreStyled = styled.svg`
  width: 48px;
  height: 48px;
  fill: ${colors.textColor};
  /* scale: 1;

  transition-property: fill, scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${colors.accentColor};
    scale: 1.03;
  } */
`;

export const SpanStyled = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
`;

export const SvgBgEllips = styled.svg`
  position: absolute;
  top: -58%;
  right: -10%;
  width: 1440px;
  height: 720px;
`;
