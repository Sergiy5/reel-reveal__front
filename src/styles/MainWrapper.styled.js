import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  gap: 120px;
  padding: 140px 0 503px 0;
  max-width: 1440px;
  background-color: ${colors.bgColor};

 `;
