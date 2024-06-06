import styled from "styled-components";

export const LinkToQuizWrapper = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 28px;
  
  @media (min-width: 769px) {
      flex-direction: row;
      gap: 48px;
  }
`;