import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(82.06deg, #02023A -4.68%, #200B6F 15.51%, #4F1AC2 70.47%, #962BE0 101.08%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: 50px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const ImageContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 10px;
  width: 180px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  border-radius: 50%;
  border: 10px solid rgb(91,19, 200);
  display:flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: 0.2s ease-out;


  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
    cursor:pointer;
  }
`;

export const ProfilePic = styled.img`
  width: 400px;
  margin-right:60px;
  margin-top: 100px;
`;

export const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-align: center;
`;

export const ManageProfileContainer = styled.div`
  h3 {
    opacity: 0.8;
    font-weight: 500;

    &:hover {
      opacity: 1;
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 44px;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 50px;
  margin-bottom: 28px;
  border-radius: 26px;

  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[100]};
  padding: 10px;
  transition: 0.3s ease-in-out;

  span{
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  * + & {
    margin-left: 40px;
  }

  &:hover{
    background-color: rgb(91,28,230);
    transition: 0.3s ease-in-out;
  }
`;
