import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding: 24px 16px;
  max-width: 1440px;
  background-color: ${colors.bgColor};
  overflow: hidden;
  gap: 64px;

  @media (min-width: 769px) {
    padding: 46px 60px;
    gap: 80px;
  }
  /* @media (min-width: 1025px) {
    padding: 56px 60px 503px 60px;
  } */

  @media (min-width: 1281px) {
    gap: 120px;
    padding: 56px 120px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
