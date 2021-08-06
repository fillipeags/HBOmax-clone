import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(40deg, hsla(290, 60%, 26%, 1) 4%, hsla(0, 0%, 0%, 1) ,68%, hsla(260, 90%, 24%, 1) 80%, hsla(257, 74%, 36%, 1) 100%);
  display:flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 376px) {
    justify-content: center;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 135px;
  margin-top: 28px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-top: 40px;

  @media (max-width: 376px) {
    font-size: 24px;
  }

  @media (max-width: 426px) {
    font-size: 40px;
  }
`;

export const ProfilesContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  gap: 60px;
`;

export const CreateProfileContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-top: 40px;
`;

export const MButton = styled.button`
  max-width: 400px;
  display: flex;
  align-items:center;
  justify-content:center;

  border:none;
  background: none;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 20px;
  color: rgb(158, 134, 255);

  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;
