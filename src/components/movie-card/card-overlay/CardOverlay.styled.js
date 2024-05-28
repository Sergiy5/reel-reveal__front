import { colors } from "assets/variables";
import styled from "styled-components";

export const CardOverlayWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0);

  transition: background-color 450ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      180deg,
      rgba(20, 17, 39, 0.93) 0%,
      rgba(10, 9, 20, 0.3) 24.88%,
      rgba(7, 6, 14, 0.18) 33.67%,
      rgba(4, 3, 8, 0.07) 41.12%,
      rgba(0, 9, 0, 0) 51.67%,
      rgba(3, 3, 6, 0.02) 60.19%,
      rgba(6, 5, 12, 0.1) 68.67%,
      rgba(10, 9, 20, 0.26) 78.32%,
      rgba(20, 17, 39, 0.92) 100%
    );
  }
`;

export const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingYearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52px;
`;

export const SpanStyled = styled.span`
display: flex;
align-items: center;
color: ${colors.textColor};
`;

export const ListButtons = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 120px;
`;

export const HoverCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  background-color: transparent;
  border-radius: 100%;
  border: 1px solid ${colors.textColor};
`;

export const HoverCardSvg = styled.svg`
  color: ${colors.textColor};
  width: 16px;
  height: 16px;
`;

export const IconStar = styled.svg`
padding-right: 4px;
`
