import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 244px;
  height: 68px;
`;

export const Circle = styled.div`
  border-radius: 100%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props =>
    props.$bg ? colors.accentColor : colors.bgColor};
  border: 3px solid
    ${props => (props.color ? colors.accentColor : colors.textColor)};
`;
