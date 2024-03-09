import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'assets/variables/variables';

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
  &:focus {
    color: ${colors.accentClickedColor};
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
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));

  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.textActivColor};
    background-color: ${colors.accentColor};
    filter: drop-shadow(0px 4px 4px rgba(32, 232, 217, 0.25));
  }
  &:focus {
    background-color: ${colors.accentClickedColor};
  }
`;
