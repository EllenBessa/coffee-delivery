import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;  
  }
  
  ul {
    padding: 0;
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
    
    display: block;
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
  }
`;
