import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.15);
    transition: 0.2s ease-in;
    cursor:pointer;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid rgb(91,19, 200);
  display:flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 376px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 426px) {
    width: 140px;
    height: 140px;
  }
`;

export const ProfilePic = styled.img`
  width: 350px;
  margin-right:60px;
  margin-top: 100px;
`;

export const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-align: center;
`;
