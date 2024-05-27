import styled from 'styled-components';
import { ReactComponent as Border } from '../../assets/images/quiz/borderSvg.svg';

export const QuizWrapper = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 131px 0;
  width: 100%;
  gap: 48px;
`;

export const SharedBorderSvg = styled(Border)`
  position: absolute;
  width: 100vw;
  
  @media (min-width: 1440px) {
    width: 1440px;
  }
  `;

export const BorderTopSvg = styled(SharedBorderSvg)`
  top: 0;
`;

export const BorderBottomSvg = styled(SharedBorderSvg)`
  bottom: 0;
  transform: rotate(180deg);
`;
