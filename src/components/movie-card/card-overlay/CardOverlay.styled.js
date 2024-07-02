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
  outline: transparent;
  border-radius: 18px;
  color: rgba(255, 255, 255, 0.2);

  transition-property: border, color;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid ${colors.accentColor};
    color: rgba(255, 255, 255, 1);
    background: linear-gradient(
      180deg,
      rgba(15, 12, 32, 1) 0%,
      rgba(8, 7, 18, 0.46) 24.88%,
      rgba(7, 6, 14, 0.3) 33.67%,
      rgba(4, 3, 8, 0.07) 41.12%,
      rgba(0, 9, 0, 0) 51.67%,
      rgba(3, 3, 6, 0.02) 60.19%,
      rgba(6, 5, 12, 0.3) 68.67%,
      rgba(8, 7, 18, 0.46) 78.32%,
      rgba(15, 12, 32, 1) 100%
    );
  }
  &:focus {
    outline: 1px solid ${colors.accentColor};
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
color: inherit;
`;

export const ListButtons = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 120px;
color: inherit;
`;

export const HoverCardBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  background-color: transparent;
  border-radius: 100%;
  border: 1px solid
    ${props => (props.$isFavorit ? colors.accentColor : colors.textColor)};
  color: ${props => (props.$isFavorit ? colors.accentColor : colors.textColor)};

  transition-property: color border overflow;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    border: 1px solid
      ${props => (props.$isFavorit ? colors.accentColor : colors.textColor)};
    color: ${props =>
      props.$isFavorit ? colors.accentColor : colors.textColor};
  }
`;

export const DropDowBtn = styled.div`
  position: absolute;
  right: 0px;
  display: block;
  text-align: center;
  padding: 5px 26px 5px 0px;
  width: 30px;
  height: 31px;
  border-bottom: inherit;
  border-top: inherit;
  border-left: inherit;
  color: ${props =>
    props.$isFavorits ? 'rgba(32, 232, 218, 0)' : 'rgba(255, 255, 255, 0)'};
  border-radius: 15px 15px 15px 15px;
  overflow: hidden;

  transition-property: width color;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(
    0.445,
    0.05,
    0.55,
    0.95
  ); /* Smooth slide animation */

  ${HoverCardBtn}:hover & {
    color: ${props =>
      props.$isFavorit ? 'rgba(32, 232, 218, 0.1)' : 'rgba(255, 255, 255, 1)'};
    width: 111px;
    right: 0px;
  }
`;

// export const SpanTextStyled = styled.span`
// height: 17px;
// width: 50px;
// `;

export const HoverCardSvg = styled.svg`
  color: inherit;
  width: 16px;
  height: 16px;
`;

export const IconStar = styled.svg`
padding-right: 4px;
`
