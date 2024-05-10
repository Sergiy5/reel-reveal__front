import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const WrapperNav = styled.div`
  font-weight: 300;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 40px;
`;

export const SvgStyled = styled.svg`
  fill: #fff;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${colors.accentColor};
  }
`;

export const NavLinkStyled = styled(NavLink)`
  border-radius: 4px;
  outline: transparent;
  transition-property: outline, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }

  &:focus {
    outline: 2px solid ${colors.accentColor};
  }
`;

export const QuizBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.textColor};
  color: ${colors.textActivColor};
  outline: none;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

  transition-property: background-color, box-shadow, outline;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.textActivColor};
    background-color: ${colors.accentColor};
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.3);
  }
  &:focus {
    background-color: ${colors.accentColor};
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.5);
    outline: 2px solid ${colors.accentColor};
  }
`;
