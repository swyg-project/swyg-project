import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // background-color: #484c99;
  background-color: white;
  overflow-y: auto;
  // color: #ffffff;
  color: black;
`;

export const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 90px auto 50px;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  .description {
    text-align: center;
    margin-top: 25px;
    font-size: 15px;
    line-height: 20px;
  }
`;

export const GiftBox = styled.div`
  .text {
    font-size: 20px;
    margin-bottom: 30px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GiftList = styled.div`
  display: grid;
  grid-template-columns: 187px 187px;
  grid-template-rows: 111px 111px 111px;
  grid-column-gap: 18px;
  grid-row-gap: 30px;
  margin-bottom: 50px;
`;

export const GiftItem = styled.div`
  text-align: center;
  place-items: center;

  .gift-name {
    font-size: 17px;
  }
  .gift-image {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const ResultBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  button {
    width: 232px;
    height: 52px;
    /* UI Properties */
    background: #c194c0 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;

    margin-bottom: 22px;
  }
`;
