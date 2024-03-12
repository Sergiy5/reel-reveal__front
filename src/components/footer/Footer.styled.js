import styled from 'styled-components';
import { ReactComponent as footerElips } from '../../assets/images/footerBGEllipse.svg';
import { colors } from 'assets/variables/variables';

export const FooterWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 80px 120px;
  bottom: 0px;
  left:0;
  display: block;
  text-align: start;
  background-color: ${colors.bgColor};
`;

export const MenuFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  height: fit-content;
`;

export const FooterBackgroundElips = styled(footerElips)`
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 100px;
`;
