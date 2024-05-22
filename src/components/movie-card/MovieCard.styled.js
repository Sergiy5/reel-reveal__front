import { colors } from "assets/variables";
import styled from "styled-components";
import { getAspectRatio } from "utils";

const aspectRatioWidtToHeght = getAspectRatio(285, 428);

export const WrapperMovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 285px;
  height: auto;
  color: transparent;
  background-size: contain;
  border-radius: 18px;

  transition-property: border;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1025px) {
    width: calc((100vw - 180px) / 4);
    height: calc(((100vw - 180px) / 4) / ${aspectRatioWidtToHeght});

    &:hover {
      border: 1px solid ${colors.accentColor};
    }

    &:focus {
      outline: 1px solid ${colors.accentColor};
    }
  }

  @media (min-width: 1281px) {
    width: calc((100vw - 300px) / 4);
    height: calc(((100vw - 300px) / 4) / ${aspectRatioWidtToHeght});
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
    height: calc(((100vw - 180px) / 4) / ${aspectRatioWidtToHeght});

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
    height: calc(((100vw - 300px) / 4) / ${aspectRatioWidtToHeght});
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
