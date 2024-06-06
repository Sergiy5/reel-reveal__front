import styled from "styled-components";
import { colors } from "assets/variables";
import { getAspectRatio } from "utils";

const aspectRatioWidtToHeght = getAspectRatio(285, 428);

export const WrapperMovieCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: auto;
  color: transparent;
  background-size: contain;
  border-radius: 18px;
  padding-right: -50px;

  @media (min-width: 577px) {
    width: calc((100vw - 45px) / 3);
  }

  @media (min-width: 855px) {
    width: calc((100vw - 45px) / 4);
  }

  @media (min-width: 1025px) {
    width: calc((100vw - 185px) / 4);
  }

  @media (min-width: 1281px) {
    width: calc((100vw - 285px) / 4);
    height: auto;
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 428px;
  }
`;

export const LoadMoreBtn = styled.button`
  width: 285px;
  height: 428px;
  color: ${colors.textColor};
  border-radius: 18px;
  border: 1px solid #fff;
  background-color: transparent;

  transition: border 350ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1025px) {
    width: calc((100vw - 180px) / 4);
    height: calc(width / ${aspectRatioWidtToHeght});

    &:hover {
      border: 1px solid ${colors.accentColor};
      color: ${colors.accentColor};
    }
    &:focus {
      border: 1px solid ${colors.accentColor};

      outline: 1px solid ${colors.accentColor};
    }
  }

  @media (min-width: 1281px) {
    width: calc((100vw - 300px) / 4);
    height: calc(width / ${aspectRatioWidtToHeght});
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 428px;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 18px;
`;

