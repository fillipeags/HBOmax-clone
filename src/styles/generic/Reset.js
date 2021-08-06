import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'MartelSans', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default Reset;
