import { colors } from 'assets/variables/variables';
import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 2200px;
  height: 3220px;
  opacity: 0.5;
  background-color: ${colors.bgLightColor};
`;
