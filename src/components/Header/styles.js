import styled from 'styled-components';

export const Container = styled.header`
  height: 40px;
  background: none;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;

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
`;

export const ProfileContainer = styled.div`
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin-right: 0px;
  }

  img {
    width: 48px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray[100]}
  }
`;

export const ImgContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  background: none;
  border: 4px solid rgb(91,19, 200);;
  border-radius: 100px;
  overflow:hidden;

  margin-right: 10px;

  img {
    width: 100px;
    margin-right: 20px;
    margin-top: 40px;
  }
`;
