import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  cursor: 'pointer';
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: #20e8d9;
    transform: none;
    color: #20e8d9;
  }
`;

export const QuizBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  cursor: 'pointer';

  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
  transition: filter 2400ms cubic-bezier(0.4, 0, 0.2, 1);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: none;
    background-color: #20e8d9;
    filter: drop-shadow(0px 4px 4px rgba(32, 232, 217, 0.25));
  }
`;
