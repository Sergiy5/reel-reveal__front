import { colors } from 'assets/variables';
import styled from 'styled-components';
import { getAspectRatio } from 'utils';

export const WrapperListMovies = styled.ul`
  display: grid;
  flex-wrap: wrap;
  align-items: start;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  width: 100%;
  height: auto;
  
  @media (min-width: 1025px) {
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const aspectRatioWidtToHeght = getAspectRatio(285, 428)

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
  height: 428px;
  background-size: contain;
  border-radius: 18px;

  @media (min-width: 1025px) {
    width: calc((100vw - 180px) / 4);
    height: calc(((100vw - 180px) / 4) / ${aspectRatioWidtToHeght});
  }

  @media (min-width: 1281px) {
    width: calc((100vw - 300px) / 4);
    height: calc(((100vw - 300px) / 4) / ${aspectRatioWidtToHeght});
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 428px;
  }

  &:focus {
    outline: 1px solid red;
  }
`;

export const LoadMoreBtn = styled.button`
  width: 285px;
  height: 428px;
  color: ${colors.textColor};
  border-radius: 18px;
  border: 1px solid #fff;
  background-color: transparent;

  @media (min-width: 1025px) {
    width: calc((100vw - 180px) / 4);
    height: calc(((100vw - 180px) / 4) / ${aspectRatioWidtToHeght});
  }

  @media (min-width: 1281px) {
    width: calc((100vw - 300px) / 4);
    height: calc(((100vw - 300px) / 4) / ${aspectRatioWidtToHeght});
  }

  @media (min-width: 1440px) {
    width: 285px;
    height: 428px;
  }

  &:focus {
    outline: 1px solid red;
  }
`;

  export const MovieImg = styled.img`
  width: 100%;
  height: auto;
    border-radius: 18px;
  `;