import styled from 'styled-components';

export const WrapperListMovies = styled.ul`
  display: grid;
  flex-wrap: wrap;
  align-items: start;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  width: 100%;
  height: auto;
  
  @media (min-width: 1025px) {
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`;
