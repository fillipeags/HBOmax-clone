import styled from 'styled-components';

export const Button = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;

  width: 200px;
  height: 44px;
  border: none;
  color: ${({ theme }) => theme.colors.gray[100]};

  margin: 50px 0px 28px 0px;
  padding: 10px;
  border-radius: 25px;

  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  background:rgba(255, 255, 255, 0.1);

  transition: 0.3s ease-in-out;

  span{
    font-size: 26px;
    font-weight: bold;
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

  @media (max-width: 426px) {
    width: 160px;
    * + & {margin-left: 20px; }
  }

  @media (max-width: 376px) {
    width: 140px;
    * + & {margin-left: 20px; }
  }

`;
