import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  hieght: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftName = styled.div`
  margin: 10rem auto;

  span {
    border: 0.1px solid;
    padding: 0.3rem;
  }
`;

export const Banner = styled.div`
  padding: 5vh 0px;

  /* FIXME: 와이어 프레임 */
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.6rem;
`;

export const Button = styled.button`
  margin-top: 5rem;
  height: 3rem;
`;

export const Letter = styled.div`
  margin: 5rem 0;
`;
export const ProductList = styled.div`
  margin: 5rem 0;
`;
