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
  color: #ffffff;
  background: #202432;
  border: none;
  border-radius: 20px;
  border-right-style: hidden;
  outline: solid 2px transparent;
  transition: outline-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    outline-color: #20e8da;
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
  outline-color: transparent;
  background-color: ${props => (props.$focus ? '#202432' : '#20e8da')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: none;
  }
`;

export const FiSearchStyled = styled(FiSearch)`
  opacity: 50%;
  color: ${props => (props.$focus ? '#fff' : 'black')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
