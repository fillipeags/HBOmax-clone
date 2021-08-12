import styled from 'styled-components';

export const Container = styled.main`
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

  @media (min-width: 1366px) {
    img {
      width:380px;
    }
  }

  @media (max-width: 426px) {
    img {
      width: 260px;
    }
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  bottom: 80px;
`;
