import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import myMainFont from '../assets/fonts/cera pro sv/Cera Pro Medium.otf';
import myMainBoldFont from '../assets/fonts/cera pro sv/Cera Pro Bold.otf';
import myMainLightFont from '../assets/fonts/cera pro sv/Cera Pro Light.otf';
import { colors } from '../assets/variables/variables';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'MyCustomFont';
    src: url(${myMainFont}) format('otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'myMainBoldFont';
    src: url(${myMainBoldFont}) format('otf');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'myMainLightFont';
    src: url(${myMainLightFont}) format('otf');
    font-weight: lighter;
    font-style: normal;
  }


body{
  font-family: "myMainFont",'myMainLightFont','myMainBoldFont', Arial, Helvetica, sans-serif;
  color: ${colors.textColor};
}

 code {
    font-family: 'myMainFont', monospace;
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
