import { colors } from 'assets/variables/variablesColors';
import styled from 'styled-components';
import { getAspectRatio } from 'utils';


export const BtnQuiz = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 28px;
  line-height: 114%;
  width: auto;
  /* aspect-ratio: 285/200; */
  height: calc(((100vw - 140px) / 2) / ${getAspectRatio(285, 200)});
  color: inherit;
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

  @media (min-width: 1025px) {
    width: calc((100% - 60px) / 4);
    height: calc(((100vw - 300px) / 4) / ${getAspectRatio(285, 200)});
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 200px;
  }

  &:hover {
    ${props =>
      props.$isActive
        ? null
        : `
    transform: scale(1.01);
    border: 1px solid ${colors.accentColor};
    color: ${colors.accentColor};
    `}
  }
  &:focus {
    outline: 2px solid ${colors.accentColor};
    color: ${colors.accentClickedColor};
  }
  &:active {
    transform: ${props => (props.$isActive ? 'scale(1)' : null)};
  }
`;
