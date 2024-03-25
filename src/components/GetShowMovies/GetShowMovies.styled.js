import styled from 'styled-components';
 import { ReactComponent as ArrowSvg } from '../../assets/images/arrow.svg';

export const ButtonPrew = styled.button`
   position: absolute;
   z-index: 0;
   top: 50%;
   left: -3.5%;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0.4;
   width: 82px;
   height: 80px;
   border-radius: 20px;
   background-color: black;
   cursor: ${props => (props.disabled ? 'default' : 'pointer')};
 `;

 export const ButtonNext = styled.button`
   position: absolute;
   top: 50%;
   right: -3.5%;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0.4;
   width: 82px;
   height: 80px;
   border-radius: 20px;
   background-color: black;
 `;

 export const SvgArrow = styled(ArrowSvg)`
   width: 12px;
   height: 19px;
   color: ${props => (props.$activ ? 'rgba(255, 255, 255, 0.2)' : '#fff')};
 `;

export const H2Title = styled.h2`
color:red;
`