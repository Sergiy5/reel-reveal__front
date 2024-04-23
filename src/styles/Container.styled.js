import styled from "styled-components";

export const Container = styled.div`
  position: ${props => (props.$absolute ? 'absolute' : 'relative')};
  z-index: ${props => props.$z_index};
  display: flex;
  flex-wrap: wrap;
  padding: ${props => (props.$padding_zero ? '0' : '0 120px 0 120px')};
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  align-items: center;
  justify-content: ${props => (props.$center ? 'center' : 'flex-start')};
  gap: ${props => (props.$gap ? props.$gap : '48px')};
  width: 100%;
  height: ${props => props.$height};
`;
