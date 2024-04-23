import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const FooterWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0px;
  display: block;
  text-align: start;
  padding: 80px 120px;
  width: 100%;
  height: 383px;
  background-color: ${colors.bgColor};
`;

export const MenuFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  height: fit-content;
`;

export const SvgBgStyled = styled.svg`
  position: absolute;
  bottom: 10px;
  left: 100px;
`;
