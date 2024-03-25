import { colors } from 'assets/variables/variablesColors';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const WrapperSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 405px;
  /* height: 40px; */
  border-radius: 20px;
`;

export const HeaderSearchBarStyled = styled.input`
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

export const BtnSearchBarIcon = styled.button`
  position: absolute;
  width: 42px;
  height: 38px;
  padding-top: 3px;
  right: 2px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props =>
    props.$focus ? colors.inputColor : colors.accentColor};

  transition: background-color 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FiSearchStyled = styled(FiSearch)`
  opacity: ${props => (props.$focus ? '50%' : '100%')};
  color: ${props => (props.$focus ? '#fff' : 'black')};
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;
