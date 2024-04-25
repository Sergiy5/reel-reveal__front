import styled from 'styled-components';

export const MovieImg = styled.img`
  border-radius: 18px;
`;
export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 428px;
  background-size: contain;
  border-radius: 18px;
  border: '1px solid #fff';
  &:focus{
    outline: 1px solid red;
  }
`;
