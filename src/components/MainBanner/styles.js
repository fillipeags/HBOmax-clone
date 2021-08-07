import styled from 'styled-components';
import mainImg from '../../assets/images/mortalkombat.jpeg';

export const BannerContainer = styled.main`
  width: 100vw;
  height: 680px;
  background-image:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),  url(${mainImg});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  img {
    margin-left: 50px;
  }

  @media (min-width: 2161px) {
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  @media (max-width: 1026px) {
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  @media (max-width: 426px) {
    img {
      width: 200px;
    }
  }
`;

export const Title = styled.div`
  max-width: 480px;
  h4, p {
    color: white;
    margin-left: 46px;
    margin-bottom: -10px;
  }
  margin-bottom: 40px;

  @media (max-width: 426px) {
      font-size: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;

  @media (max-width: 426px) {
      width: 280px;
      margin-bottom: 360px;
  }
`;

export const PlayContainer = styled.button`
  margin-left: 40px;
  border-radius: 28px;
  border: none;
  width: 56px;
  height: 56px;
  background: linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 85%, rgb(129, 155, 253) 100%);
  transition: 0.3s ease-in;

  &:hover {
    transition: 0.3s ease-in;
    background: linear-gradient(0deg, rgb(71, 16, 193), rgb(120, 87, 255) 85%, rgb(129, 155, 253) 100%)
  }

  @media (max-width: 426px) {
    font-size: 10px;
    width: 100px;
    height: 40px;
  }
`;

export const InfoBtn = styled.button`
  width: 140px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 28px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.gray[700]};
  transition: 0.1s ease-out;

  &:hover {
    background-color: rgb(91,28,230);
    transition: 0.1s ease-in;
  }

  @media (max-width: 426px) {
    font-size: 10px;
    width: 100px;
    height: 40px;
  }
`;
