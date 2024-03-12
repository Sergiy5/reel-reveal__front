import { colors } from 'assets/variables/variables';
import styled from 'styled-components';

export const ListMenuStyled = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  font-family: mainLightFont;
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  gap: 10px;
`;

export const ItemStyled = styled.li`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
  `
