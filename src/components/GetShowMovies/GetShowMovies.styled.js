import styled from 'styled-components';
import { colors } from 'assets/variables';

export const SharedBtn = styled.button`
  position: absolute;
  z-index: 1;
  top: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 80px;
  color: ${props => (props.disabled ? colors.disabledColor : colors.textColor)};
  border-radius: 20px;
  outline: transparent;
  background-color: ${props =>
    props.disabled ? colors.disabledBgColor : colors.enableBgColor};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  transition-property: color, background-color, outline;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => (props.disabled ? 'default' : colors.accentColor)};
    background-color: ${props =>
      props.disabled ? 'default' : colors.hoverBgColor};
  }
  &:focus {
    outline: 2px solid ${colors.accentColor};
    color: ${props => (props.disabled ? 'default' : colors.accentColor)};

  }
  &:active {
    color: ${props => (props.disabled ? 'default' : colors.accentClickedColor)};
    background-color: ${props =>
      props.disabled ? 'default' : colors.accentClicked};
  }
`;

export const ButtonPrew = styled(SharedBtn)`
  left: 5.5%;
`;

export const ButtonNext = styled(SharedBtn)`
  right: 5.5%;
`;

export const SvgArrowStyled = styled.svg`
  opacity: 1;
  width: 12px;
  height: 19px;
  color: inherit;
`;
