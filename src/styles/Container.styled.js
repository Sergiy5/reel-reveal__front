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
