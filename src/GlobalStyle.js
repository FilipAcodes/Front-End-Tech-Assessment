import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }

 a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-size: 16px;
    font-family: sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
