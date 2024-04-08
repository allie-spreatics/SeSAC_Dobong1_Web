import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Ansungtangmyun-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ansungtangmyun-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  body {
    font-family: 'Ansungtangmyun-Bold';
  }
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

ul,ol{
    list-style: none;
}
`;

export default GlobalStyle;
