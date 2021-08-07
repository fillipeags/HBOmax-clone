import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MartelSans', sans-serif;

  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default Reset;
