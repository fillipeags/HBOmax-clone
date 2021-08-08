import styled from 'styled-components';

export const Wrapper = styled.div`

  color: white;
  background: rgba(0, 0, 0,0.8);
  width:100vw;
  height: 100vh;
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index:9999;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const Content = styled.div`
  width: 88%;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;

`;

export const SelectedContent = styled.div`
  width: 70%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray[800]};
  padding: 0px 28px;

  h1 {
    font-weight: 300;
    font-size: 42px;
  }
`;

export const CenterContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;


  p {
    font-size: 22px;
    font-weight: 300;
  }

  button {
    margin-top: 20px;
    color: rgb(158, 134, 255);
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;

    &:hover {
      color: ${({ theme }) => theme.colors.gray[100]};
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const SideBar = styled.div`
  width: 30%;
  height: 100vh;
  background:${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
  padding: 0px 20px;

  a {
    display: block;
    font-size: 22px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.gray[500]};


    &:first-of-type {
      color: white;
      margin-top: 40px;
    }

    &:hover {
      color: white;
    }
  }

  hr {
    margin: 40px 0px;
  }
`;
