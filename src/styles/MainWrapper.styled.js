import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 120px;
  padding: 144px 120px 443px 120px;
  width: 1440px;
  background-color: ${colors.bgColor};
`;
