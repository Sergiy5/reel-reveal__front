import { colors } from "assets/variables";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SharedNavLinkStyled = styled(NavLink)`
  border-radius: 4px;
  outline: transparent;
  width: auto;
  height: auto;
  transition-property: outline, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
  &:focus {
    outline: 2px solid ${colors.accentColor};
  }
  &:active {
    outline: none;
    color: ${colors.accentClickedColor};
  }
`;