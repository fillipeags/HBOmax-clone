import styled from 'styled-components';

export const Container = styled.main`


  margin-left: 40px;

  color: #fff;

  h2{
    margin-top: 0;
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 0px;
  }

  p {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.gray[400]}
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  text-align: center;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 50px 50px 0px;


  img {
    object-fit: contain;
    width: 100%;
    max-height: 200px;
    transition: transform 450ms;
    margin-right: 10px;
  }
`;
