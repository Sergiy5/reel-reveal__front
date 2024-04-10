import styled from 'styled-components';
import{ReactComponent as svgFrame} from '../../assets/images/movieFrames/frame-short.svg'

export const ContainerSlider = styled.div`
  width: 100%;
  height: 275px;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 288px;
  height: 275px;
`;

export const ImgStyled = styled.img`
margin-top: 45px;
  width: 275px;
  height: 189px;
  `;

export const SvgFrame = styled(svgFrame)`
  position: absolute;
  top: 0;
  right: 2.45%;
  width: 100%;
  height: 100%;
`;