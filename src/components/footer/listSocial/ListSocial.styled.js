import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const ListSocialStyled = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 159px;
  gap: 16px;
`;

export const ItemSvg = styled.li`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
`;
