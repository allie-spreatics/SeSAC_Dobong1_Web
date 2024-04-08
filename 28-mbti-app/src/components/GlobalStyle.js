import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body{
    font-family:'ONE-Mobile-POP', sans-serif ;
    padding-top:1rem ;
    white-space: pre-wrap;
}

ul,ol{
    list-style: none;
    padding-left: 0;
}
`;

export default GlobalStyle;
