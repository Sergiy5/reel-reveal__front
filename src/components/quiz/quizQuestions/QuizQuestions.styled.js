import { colors } from "assets/variables";
import styled from "styled-components";

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
