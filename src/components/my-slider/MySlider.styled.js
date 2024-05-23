import styled from "styled-components";
import { colors } from "assets/variables";

export const WrapperSlider = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: auto;

  @media (min-width: 577px) {
    width: 100vw;
  }
 
  @media (min-width: 1025px) {
    width: calc(100vw - 125px);
  }

  @media (min-width: 1281px) {
    width: calc(100vw - 230px);
  }
`;

export const SharedBtn = styled.button`
  position: absolute;
  z-index: 1;
  top: 42%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 80px;
  color: ${props =>
    props.disabled ? colors.disabledColor : colors.textColor};
  border-radius: 20px;
  outline: none;
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
    color: ${props =>
    props.disabled ? 'default' : colors.accentClickedColor};
    background-color: ${props =>
    props.disabled ? 'default' : colors.accentClicked};
  }
`;

export const ButtonPrew = styled(SharedBtn)`
  left: -4%;
  transform: rotate(180deg);
`;

export const ButtonNext = styled(SharedBtn)`
  right: -3%;
`;

export const SvgArrowStyled = styled.svg`
  opacity: 1;
  width: 12px;
  height: 19px;
  color: inherit;
`;