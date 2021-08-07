import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 40px;
  background: none;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;

  button {
    background: none;
    border: none;
    cursor: pointer;

    margin-right: 40px;
  }

  transition: 0.15s ease-out;
  &:hover{
    background: ${({ theme }) => theme.colors.gray[900]};
    transition: 0.15s ease-in;
  }


  @media (max-width: 426px) {
    button {
      margin-right:40px;
    }
    button:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 321px) {
    justify-content: center;
    img {
      width:120px;
    }

    button {
      margin:10px;
    }
    button:nth-child(2) {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin-right: 80px;
  }

  img {
    width: 48px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray[100]}
  }

  @media (max-width: 426px) {
    h3{
      display: none;
    }
  }
`;

export const ImgContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  background: none;
  border: 4px solid rgb(91,19, 200);
  border-radius: 100px;
  overflow:hidden;

  margin-right: 10px;

  img {
    width: 100px;
    margin-right: 20px;
    margin-top: 40px;
  }
`;
