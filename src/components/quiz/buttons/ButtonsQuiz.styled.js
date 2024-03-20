import { colors } from 'assets/variables/variables';
import styled from 'styled-components';

export const BtnQuiz = styled.button`
  display: block;
  border-radius: 18px;
  width: 285px;
  height: 200px;
  font-weight: 400;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: inherit;
  padding: 55px 51px;
  background-image: radial-gradient(
    ellipse closest-side at center,
    rgb(32, 43, 61),
    ${colors.bgColor} 160%
  );
`;
