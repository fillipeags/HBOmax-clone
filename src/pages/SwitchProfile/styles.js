import styled from 'styled-components';
import bgImg from '../../assets/images/bgImg.png';

export const Container = styled.main`
  height: 100vh;
  background: url(${bgImg});
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
  width: 128px;
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

export const ProfileOptions = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  margin-top: 40px;
`;

export const MButton = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;

  max-width: 400px;
  margin-top: 20px;

  border:none;
  background: none;
  color: rgb(158, 134, 255);

  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
    transition: 0.3s ease-in-out;
  }
`;
