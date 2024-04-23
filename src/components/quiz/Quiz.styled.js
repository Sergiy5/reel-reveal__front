import styled from 'styled-components';
import { ReactComponent as Border } from '../../assets/images/quiz/borderSvg.svg';
import { colors } from 'assets/variables/variablesColors';

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

export const TitleQuizStyled = styled.h2`
  width: 911px;
  font-family: fontH1;
  font-size: 48px;
  line-height: 125%;
`;
export const SpanTitle = styled.span`
  font-family: fontH;
  font-size: 48px;
  line-height: 125%;
  color: ${colors.accentColor};
`;

export const TittleProgresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BtnQuizWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 1200px;
`;
