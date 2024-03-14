import styled from 'styled-components';
import { ReactComponent as Border } from '../../assets/images/quiz/borderSvg.svg';

export const QuizWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 528px;
  /* height: auto; */
`;

export const BorderTopSvg = styled(Border)`
  position: absolute;
  top: 0;
  right: -10%;
`;
export const BorderBottomSvg = styled(Border)`
  position: absolute;
  bottom: 0;
  right: -10%;
  transform: rotate(180deg);
`;
