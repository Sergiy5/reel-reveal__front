import styled from 'styled-components';
import { ReactComponent as MainLogoSvg } from '../../assets/images/mainlogo.svg';
import { colors } from 'assets/variables/variablesColors';

export const SvgStyled = styled(MainLogoSvg)`
  width: 204px;
  height: 48px;
  color: ${colors.textColor};
`;
