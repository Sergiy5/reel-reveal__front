import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding: 36px 40px 503px 40px;
  max-width: 1440px;
  background-color: ${colors.bgColor};
  gap: 80px;
  overflow: hidden;

  @media (min-width: 769px) {
    padding: 46px 80px 503px 80px;
  }

  @media (min-width: 1281px) {
    gap: 120px;
    padding: 56px 120px 503px 120px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
