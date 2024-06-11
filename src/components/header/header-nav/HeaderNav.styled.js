import styled from 'styled-components';
import { colors } from 'assets/variables/variablesColors';

export const WrapperNav = styled.div`
  font-weight: 300;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: auto;
  height: 40px;

  @media screen and (min-width: 1025px) {
    width: 380px;
    flex-direction: row;
  }
`;

export const SvgStyled = styled.svg`
  width: 22px;
  height: 22px;
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.accentColor};
  }
  `;

export const MenuBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: ${colors.bgColor};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${colors.bgLightColor};
  }
`;


export const BurgerSvgStyled = styled(SvgStyled)`
  width: 31px;
  height: 22px;

  @media (min-width: 769px) {
    width: 38px;
    height: 42px;
  }
`;