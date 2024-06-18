import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const ListSocialStyled = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 159px;
  gap: 16px;
`;

export const Item = styled.li`
  height: 34px;

`;
export const SvgStyled = styled.svg`
  width: 34px;
  height: 34px;
  fill: ${colors.textColor};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: ${colors.accentColor};
  }
`;
// export const NavLinkStyled = styled(NavLink)`
// border-radius: 3px;
//   outline: transparent;
//   transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:focus {
//     outline: 3px solid ${colors.accentColor};
//   }
// `;