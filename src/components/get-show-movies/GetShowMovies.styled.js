import styled from 'styled-components';

export const WrapperGetShowMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media (min-width: 1025px) {
    width: calc(100vw - 120);
  }
`;

