import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 92%;
  border: 2px solid lightblue;
  border-radius: 20px;
  height: 100%;
  margin-top: 110px;
  margin-left: 17px;
  overflow-x: hidden;
  color: white;
  font-size: 1.1rem;
  line-height: 27px;

  button {
    border-radius: 0 0 20px 20px;
    color: white;
    font-weight: bold;
    border-top: 1px solid lightblue;
  }

  button:hover {
    background-color: white;
    font-weight: bold;
    color: black;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1.5rem;
    height: 100%;
  }
`;
