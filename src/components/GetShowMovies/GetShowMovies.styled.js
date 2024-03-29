import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../assets/images/arrow.svg';
import { colors } from 'assets/variables';

export const SharedBtn = styled.button`
  position: absolute;
  top: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 80px;
  color: ${props => (props.disabled ? colors.disabledColor : colors.textColor)};
  border-radius: 20px;
  background-color: ${props =>
    props.disabled ? colors.disabledBgColor : colors.enableBgColor};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => (props.disabled ? 'default' : colors.accentColor)};
    background-color: ${props =>
      props.disabled ? 'default' : colors.hoverBgColor};
  }
  &:active {
    color: ${props => (props.disabled ? 'default' : colors.accentClickedColor)};
    background-color: ${props =>
      props.disabled ? 'default' : colors.accentClicked};
  }
`;

export const ButtonPrew = styled(SharedBtn)`
  left: -3.5%;
`;

export const ButtonNext = styled(SharedBtn)`
  right: -3.5%;
`;

export const SvgArrow = styled(ArrowSvg)`
  opacity: 1;
  width: 12px;
  height: 19px;
  color: inherit;
`;
