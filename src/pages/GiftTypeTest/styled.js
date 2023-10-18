import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  height: 5rem;
  text-align: start;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const TestBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Question = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Answer = styled.div`
  div {
    text-align: center;
    height: 5rem;

    line-height: 5rem;

    background-color: var(--white-primary);
    border-radius: 0.7rem;
    margin: 0 2rem 1.5rem;
  }

  div:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

export const BackBtn = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
  position: fixed;
  bottom: 0;
  left: 50%;

  button {
    position: absolute;
    left: -500%;
  }
`;
