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

  @media (min-width: 2560px) {
    h2{
      font-size: 38px;
      margin-bottom: 18px;
    }

    p {
      font-size:20px;
    }

    margin-bottom: 40px;
  }

  @media (max-width: 376px) {
    h2{
      font-size: 24px;
    }

    p {
      font-size:12px;
    }
    margin-bottom: -10px;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  text-align: center;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 0 50px 50px 0px;

  &::-webkit-scrollbar {
    display: none;
  }


  img {
    object-fit: contain;
    width: 100%;
    max-height: ${(props) => (props.isBanner ? '200px' : '300px')};
    transition: transform 450ms;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const SkeletonContainer = styled.div`
  margin-top: 20px;
  margin-right: 10px;

`;
