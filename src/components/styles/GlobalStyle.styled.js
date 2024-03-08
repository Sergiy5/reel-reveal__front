import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import myCustomFont from '../../fonts/cera pro sv/Cera Pro Medium.otf'; // Path to your font file

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'MyCustomFont';
    src: url(${myCustomFont}) format('otf');
  }


body{
  font-family: 'ManropeMedium', 'InterMedium', 'ManropeRegular', 'MontserratRegular', 'MontserratSemiBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  list-style: none;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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

ul,
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
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
}
`;

export default GlobalStyle;
