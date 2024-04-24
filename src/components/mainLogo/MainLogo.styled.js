import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MainLogoSvg } from '../../assets/images/svgSprite/sprite.svg#icon-main-logo-strip';
import { colors } from 'assets/variables/variablesColors';

export const SvgStyled = styled(MainLogoSvg)`
  width: 204px;
  height: 48px;
  color: ${colors.textColor};
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
`;
export const SpanStyled = styled.span`
  font-family: fontH2;
  font-weight: 500;
  font-size: 32px;
  margin-left: 4px;
  height: 32px;
`;
