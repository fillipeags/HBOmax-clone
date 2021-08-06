import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(82.06deg, #02023A -4.68%, #200B6F 15.51%, #4F1AC2 70.47%, #962BE0 101.08%);
  display:flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: 40px;
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
