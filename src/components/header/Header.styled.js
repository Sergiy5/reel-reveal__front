import styled from 'styled-components';
import { ReactComponent as headerElips } from '../../assets/images/ellipseHeader.svg';
import { colors } from 'assets/variables/variables';

export const WrapperHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 120px;
  width: 100%;
  height: 84px;
  background-color: ${colors.bgColor};
`;

export const HeaderBackgroundElips = styled(headerElips)`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 0px;
`;
