import styled from 'styled-components';
import logo from '../../assets/images/Frame 353.svg';
import { colors } from 'assets/variables/variables';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  width: 204px;
  height: 48px;
  /* background-image: url(${logo}); */
`;

export const SvgStyled = styled.div`
  width: 204px;
  height: 48px;
  background-image: url(${logo});
  color: ${colors.accentClickedColor};
  fill: green;
  /* transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${colors.accentColor};
  }
  &:focus {
    fill: ${colors.accentClickedColor};
  } */
`;
