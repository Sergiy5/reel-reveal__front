import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SvgUser } from '../../../assets/images/user.svg';
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

export const UserSvg = styled(SvgUser)`
  width: 24px;
  height: 24px;
  color: #fff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
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
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.textActivColor};
    background-color: ${colors.accentColor};
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.3);
  }
  &:focus {
    background-color: ${colors.accentClickedColor};
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.5);
  }
`;
