import styled from 'styled-components';
import { ReactComponent as Border } from '../../assets/images/quiz/borderSvg.svg';
// import { colors } from 'assets/variables/variablesColors';

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 528px;
  gap: 48px;
  padding: 131px 0;
`;

export const SharedBorderSvg = styled(Border)`
  position: absolute;
  right: 0;
`;
export const BorderTopSvg = styled(SharedBorderSvg)`
  top: 0;
`;
export const BorderBottomSvg = styled(SharedBorderSvg)`
  bottom: 0;
  transform: rotate(180deg);
`;
