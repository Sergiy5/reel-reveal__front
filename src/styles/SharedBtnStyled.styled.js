import styled from 'styled-components';
import { colors } from 'assets/variables';

export const SharedBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width};
  height: ${props => (props.$height ? props.$height : '40px')};
  font-family: mainBoldFont;
  font-weight: 700;
  font-size: 18px;
  line-height: 333%;
  text-transform: uppercase;
  color: ${props => (props.$textColor ? props.$textColor : colors.bgColor)};
  border-radius: ${props => (props.$bRadius ? props.$bRadius : '30px')};
  border: ${props => (props.$border ? '1px solid #fff' : 'none')};
  background-color: ${props =>
    props.$bgColor ? props.$bgColor : colors.accentColor};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  outline: none;

  transition-property: box-shadow, color, border, outline;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.3);
    border: ${props =>
      props.$border ? `1px solid ${colors.accentColor}` : 'none'};
    color: ${props => (props.$textColor ? colors.accentColor : colors.bgColor)};
  }
  &:focus {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.5);
    border: ${props =>
      props.$border ? `1px solid ${colors.accentColor}` : 'none'};
    color: ${props => (props.$textColor ? colors.accentColor : colors.bgColor)};
    outline: 2px solid ${colors.accentColor};
  }
`;
