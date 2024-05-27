import styled from 'styled-components';
import{ReactComponent as svgFrame} from '../../assets/images/movie-frames/frame-short.svg'

export const WrapperSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  max-width: 3168px;
`;

export const Title = styled.h2`
margin: 0 auto;

@media (max-width: 440px) {
  width: calc(100vw - 10px);
}
`;

export const ContainerSlider = styled.div`
  width: 576px;
  height: auto;

  @media (min-width: 375px) {
    width: 864px;
  }
 
@media (min-width: 769px) {
  width: 1152px;
}

  @media (min-width: 1025px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 288px;
  height: 275px;
  cursor: pointer;
`;

export const ImgStyled = styled.img`
  margin-top: 45px;
  width: calc(100% - 2%);
  height: auto;
  `;

export const SvgFrame = styled(svgFrame)`
  position: absolute;
  top: 0;
  right: 2.45%;
  width: 100%;
  height: 100%;
`;