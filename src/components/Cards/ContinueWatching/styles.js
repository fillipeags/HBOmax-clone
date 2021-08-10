import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 50px;

  h2,p {
    margin-top: 0;
    color: white;
  }

  h2 {
    display: flex;
    align-items: flex-end;
  }
`;

export const CardContainer = styled.div`
  display:flex;
  align-items: center;

`;

export const CardContent = styled.div`
  img {
    width: 200px;
    height: 200px;
    margin-right: 10px;
  }

  p:before {
      content: '';
      width: 180px;
      height: 8px;
      background: linear-gradient(90deg, rgb(81, 170, 255), rgb(81, 170, 255) 45%, rgb(225, 62, 255) 100%);
      border-radius: 20px;
      display: block;
      position: absolute;
      bottom: 40px;
      left: 10px;
    }

  p {
    position: relative;
    margin-top: 20px;
    span {
      color: gray;
      margin-left: 10px;
      font-weight: 300;
    }
  }
`;
