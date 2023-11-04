import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 36px;
  }
`;

export default GlobalStyle;
