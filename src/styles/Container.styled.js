import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: ${props => (props.$padding ? '0' : '0 120px 0 120px')};
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  align-items: center;
  justify-content: ${props => (props.$center ? 'center' : 'flex-start')};
  gap: ${props => (props.$gap ? props.$gap : '48px')};
  width: 100%;
`;
