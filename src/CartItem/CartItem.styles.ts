import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information {
    display: flex;
    justify-content: space-between;
  }

  .btn1 {
    @media only screen and (max-width: 480px) {
    margin-right: 7px;
    }
  }

  .btn2 {
    @media only screen and (max-width: 480px) {
    margin-left: 7px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
    margin-top: 8px;
    @media only screen and (max-width: 480px) {
      margin-left: 12px;
    }
  }
`;