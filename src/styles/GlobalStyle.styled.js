import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import mainFont from '../assets/fonts/cera pro sv/CeraPro-Regular.woff';
import mainBoldFont from '../assets/fonts/cera pro sv/CeraPro-Bold.woff';
import mainLightFont from '../assets/fonts/cera pro sv/CeraPro-Light.woff';
import fontH1 from '../assets/fonts/hind/Hind-Bold.woff2';
import fontH2 from '../assets/fonts/hind/Hind-SemiBold.woff2';

import { colors } from '../assets/variables/variables';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'mainFont';
    src: url(${mainFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'mainBoldFont';
    src: url(${mainBoldFont}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'mainLightFont';
    src: url(${mainLightFont}) format('woff');
    font-weight: lighter;
    font-style: normal;
  }
   @font-face {
    font-family: 'fontH1';
    src: url(${fontH1}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }
   @font-face {
    font-family: 'fontH2';
    src: url(${fontH2}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }


body{
  font-family: "mainFont", Arial, Helvetica, sans-serif;
  color: ${colors.textColor};
  width: 1440px;
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
  margin: 0;
  padding: 0;
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
