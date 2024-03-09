import { colors } from 'assets/variables/variables';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const WrapperSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 405px;
  height: 40px;
  border-radius: 20px;
`;

export const HeaderSearchBarStyled = styled.input`
  width: 405px;
  height: 40px;
  padding-left: 21px;
  padding-right: 64px;
  color: ${colors.textColor};
  background: ${colors.inputColor};
  border: none;
  border-radius: 20px;
  border-right-style: hidden;
  outline: solid 2px transparent;
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
  width: 43px;
  height: 40px;
  margin-right: 0.05rem;
  padding: 8px 10px;
  right: -1px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: ${props =>
    props.$focus ? colors.inputColor : colors.accentColor};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FiSearchStyled = styled(FiSearch)`
  opacity: 50%;
  color: ${props => (props.$focus ? '#fff' : 'black')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
