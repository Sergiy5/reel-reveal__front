import { colors } from "assets/variables";
import styled from "styled-components";

export const WrapperQuizQustions = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
gap: 48px;
`;

export const TittleProgresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const SpanTitle = styled.span`
  font-family: fontH;
  font-size: 48px;
  line-height: 125%;
  color: ${colors.accentColor};
`;


export const BtnQuizWrapper = styled.div`
  display: grid;
  align-items: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  height: auto;

  @media (min-width: 1025px) {
    display: flex;
  }
`;
