import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const WrapperHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 120px;
  width: 100%;
  height: 84px;
  background-color: ${colors.bgColor};
`;

export const SvgStyled = styled.svg`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 0px;
`;
