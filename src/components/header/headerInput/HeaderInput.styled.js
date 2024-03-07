import styled from 'styled-components';
// import { ReactComponent as svgSearchBar } from '../../images/Vector.svg';


export const WrapperSearchBar = styled.div`
  position: relative;
  display: flex;
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
  &:hover,
  &:focus {
    outline: solid 2px #20e8da;
  }
`;

export const WrapperSearchBarIcon = styled.button`
  position: absolute;
  width: 44px;
  height: 40px;
  padding: 8px 10px;
  right: -1px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${props => (props.$focus ? '#202432' : '#20e8da')};
`;
