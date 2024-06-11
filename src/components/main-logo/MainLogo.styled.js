import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from 'assets/variables/variablesColors';

export const MainLogoSVGStyled = styled.svg`
  width: 36px;
  height: 36px;
  color: ${colors.textColor};

  @media (min-width: 769px) {
    width: 48px;
    height: 48px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 3px;
  outline: transparent;

  transition: outline 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:focus {
    outline: 2px solid ${colors.accentColor};
  }
  &:active{
    outline: none;
  }
`;
export const SpanStyled = styled.span`
  font-family: fontH2;
  font-weight: 500;
  font-size: 32px;
  margin-left: 4px;
  height: 32px;
`;
