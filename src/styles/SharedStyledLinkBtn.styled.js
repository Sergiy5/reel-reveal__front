import styled from 'styled-components';
import { colors } from 'assets/variables';

export const SharedStyledLinkBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: ${props => props.$width};
  height: 40px;
  font-family: mainBoldFont;
  font-weight: 700;
  font-size: 18px;
  line-height: 333%;
  text-transform: uppercase;
  color: ${colors.bgColor};
  background-color: ${colors.accentColor};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.3);
  }
  &:focus {
    box-shadow: 1px 2px 24px 0 rgba(32, 232, 218, 0.5);
  }
`;
