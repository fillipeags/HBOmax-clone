import { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/images/bgImg.png';

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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MartelSans', sans-serif;
    background:linear-gradient(rgba(0,0,0,0), rgba(255,0,0,0)), url(${bgImg});
    background-size: 100% 100%;
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
