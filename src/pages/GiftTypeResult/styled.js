import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const TypeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  align-items: center;

  .title {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .description {
    width: 30rem;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
`;

export const GiftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const GiftList = styled.div`
  margin-top: 0.5rem;
  display: grid;

  grid-template-columns: 10rem 10rem;
  grid-template-rows: 3rem 3rem 3rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  line-height: 3rem;
`;

export const GiftItem = styled.div`
  place-items: center;
  background-color: var(--white-primary);
  border-radius: 1rem;
  text-align: center;

  font-size: 0.7rem;
  white-space: pre-line;
  word-break: break-all;
`;

export const ResultBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 10rem;
    margin: 0.2rem;
  }
`;
