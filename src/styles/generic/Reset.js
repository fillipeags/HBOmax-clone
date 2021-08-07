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

  h1,h2,h3,h4,h5,h6,p,img,span, button{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MartelSans', sans-serif;
    max-width: 100vw;
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
