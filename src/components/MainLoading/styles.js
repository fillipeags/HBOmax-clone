import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  img {
    width: 400px;
  }
  background: linear-gradient(to right, #9A35EF , #4B00C4, #4176D6);
`;

export const LoaderContainer = styled.div`
  position: absolute;
  bottom: 80px;
`;
