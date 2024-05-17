import { colors } from "assets/variables";
import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0px 40px;
  background-color: ${colors.bgColor};

  @media (min-width: 769px) {
    padding: 0px 80px;
  }

  @media (min-width: 1281px) {
    padding: 0px 120px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;


// export const Container = styled.div`
//   position: ${props => (props.$absolute ? 'absolute' : 'relative')};
//   z-index: ${props => props.$z_index};
//   display: flex;
//   flex-wrap: wrap;
//   padding: ${props => (props.$padding_zero ? '0' : '0 120px 0 120px')};
//   flex-direction: ${props => (props.$row ? 'row' : 'column')};
//   align-items: center;
//   justify-content: ${props => props.$justifyContent ?? 'center'};
//   gap: ${props => (props.$gap ? props.$gap : '48px')};
//   width: 100%;
//   height: ${props => props.$height};
//   background-color: ${props => props.$bgColor};
//   /* flex-grow: 2; */
// `;
