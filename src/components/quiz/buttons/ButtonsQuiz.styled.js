import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';

export const BtnQuiz = styled.button`
  display: block;
  width: 285px;
  height: 200px;
  font-weight: 400;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: inherit;
  padding: 55px 50px;
  border-radius: 18px;
  border: 1px solid ${colors.bgColor};

  background-image: radial-gradient(
    ellipse closest-side at center,
    rgb(32, 43, 61),
    ${colors.bgColor} 160%
  );
  transform: none;
  transition-property: transform, border, color;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.01);

    border: 1px solid ${colors.accentColor};
    color: ${colors.accentColor};
  }
  &:focus {
    outline: 2px solid ${colors.accentColor};
    color: ${colors.accentClickedColor};
  }
  &:active {
    transform: scale(1);
  }
`;
