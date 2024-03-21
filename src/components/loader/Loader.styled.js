import { colors } from 'assets/variables/variables';
import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: ${colors.bgLightColor};
`;
