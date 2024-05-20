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
  left: -10%;
`;
export const BorderTopSvg = styled(SharedBorderSvg)`
  top: 0;
`;
export const BorderBottomSvg = styled(SharedBorderSvg)`
  bottom: 0;
  transform: rotate(180deg);
`;
