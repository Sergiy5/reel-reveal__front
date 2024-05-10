import { colors } from 'assets/variables/variablesColors';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';


export const WrapperSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 405px;
  border-radius: 20px;
  outline: solid 1px transparent;

  transition: outline-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 1280px) {
    width: 365px;
  }

  &:hover {
    outline-color: ${colors.accentColor};
  }
  &:focus {
    outline-color: ${colors.accentClickedColor};
  }
`;

export const HeaderInputStyled = styled.input`
  width: 403px;
  height: 38px;
  padding-left: 21px;
  padding-right: 64px;
  font-weight: 300;
  font-size: 20px;
  color: ${colors.textColor};
  background: ${colors.inputColor};
  border: none;
  border-radius: 20px;
  border-right-style: hidden;
  outline: solid 1px transparent;

  transition: outline-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    outline-color: ${colors.accentColor};
  }
  &:focus {
    outline-color: ${colors.accentClickedColor};
  }
`;

export const BtnSearchBar = styled.button`
  position: absolute;
  width: 42px;
  height: 38px;
  padding-top: 3px;
  right: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props =>
    props.$focus ? colors.accentColor : colors.inputColor};
  outline: none;

  transition-property: outline, background-color;
  transition-duration: 450ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  /* transition: background-color 450ms cubic-bezier(0.4, 0, 0.2, 1); */
  &:focus {
    outline: 2px solid ${colors.accentColor};
    background-color: ${colors.accentColor};
  }
`;

export const FiSearchStyled = styled(FiSearch)`
  opacity: ${props => (props.$focus ? '100%' : '50%')};
  color: ${props => (props.$focus ? 'black' : '#fff')};

  transition-property: color, outline, opacity;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  /* transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1); */

  &:focus {
    color: ${props => (props.$focus ? '#fff' : 'black')};
  }
`;
