import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import mainFont from '../assets/fonts/cera pro sv/CeraPro-Regular.woff';
import mainBoldFont from '../assets/fonts/cera pro sv/CeraPro-Bold.woff';
import mainLightFont from '../assets/fonts/cera pro sv/CeraPro-Light.woff';
import fontH1 from '../assets/fonts/hind/Hind-Bold.woff2';
import fontH2 from '../assets/fonts/hind/Hind-SemiBold.woff2';

import { colors } from '../assets/variables/variablesColors';


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'mainFont';
    src: url(${mainFont}) format('woff');
    font-weight: normal;
   font-display: swap, sans-serif;
  }

  @font-face {
    font-family: 'mainBoldFont';
    src: url(${mainBoldFont}) format('woff');
    font-style: normal;
   font-display: swap, sans-serif;

  }
  
  @font-face {
    font-family: 'mainLightFont';
    src: url(${mainLightFont}) format('woff');
    font-weight: normal;
    font-style: normal;
   font-display: swap, sans-serif;

  }
   @font-face {
    font-family: 'fontH1';
    src: url(${fontH1}) format('woff2');
    font-weight: bold;
    font-style: normal;
   font-display: swap, sans-serif;

  }
   @font-face {
    font-family: 'fontH2';
    src: url(${fontH2}) format('woff2');
    font-weight: 600;
    font-style: normal;
   font-display: swap, sans-serif;

  }
@font-face {
  font-family: 'Hind-Bold';
  src: url('/path/to/font/Hind-Bold.woff2') format('woff2');
  font-display: swap; 
}


body{
  font-family: "mainFont", Arial, Helvetica, sans-serif;
  display: block;
  color: ${colors.textColor};
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
}

 code {
    font-family: 'mainFont', monospace;
  }

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}

h1{
  font-family: fontH1;
  font-size: 40px;
  line-height: 120%;


@media (min-width: 769px) {
  line-height: 60px;
  font-size: 52px;
}
}

h2{
  font-family: fontH2;
  font-size: 38px;
  line-height: 124%;
  
  @media (min-width: 769px) {
    font-size: 48px;
    line-height: 60px;
  }
}
h3{
  font-family: mainBoldFont;
  font-size: 22px;
  line-height: 150%; // line-height: 33px; 

  @media (min-width: 769px) {
    line-height: 32px;
    font-size: 30px;
  }
}
h4{
  font-family: mainFont;
  line-height: 32px;
  font-size: 28px;
}
h5{
  font-family: mainFont;
  line-height: 30px;
  font-size: 20px;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
padding: 0 16px;
margin: 0;
@media (min-width: 769px) {
  padding: 0;
  
}

}

p{
  @media (max-width: 480px) {
font-size: 16px;

// line-height: 18px;
line-height: 110%;
    
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button, a {
  cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
}
`;

export default GlobalStyle;
