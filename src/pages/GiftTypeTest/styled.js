import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #484c99;
  color: #ffffff;
`;

export const TestBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0
  justify-content: center;
`;

export const Question = styled.div`
  padding: 0 30px;
  font-size: 20px;
  margin: 0 auto;
  height: 279px;
  display: flex;
  align-items: center;
`;

export const Answer = styled.div`
  .answer-btn {
    margin: 0 auto 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 353px;
    height: 111px;
    border: 5px solid #9c76b0;
    border-radius: 10px;
    opacity: 1;
  }

  .answer-btn:hover {
    box-shadow: 0px 0px 6px #c194c0;
    border: 5px solid #c194c0;
    border-radius: 10px;
    opacity: 1;
    cursor: pointer;
  }
`;

export const BackBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 64px;

  .back-btn {
    overflow: hidden;
    position: relative;
    width: 58px;
    height: 70px;
  }

  .back-btn::after {
    box-shadow: 0px 0px 6px #c194c0; /* 테두리에만 그림자 적용 */

    position: absolute;
    content: "";
    top: 25px;
    left: 44px;
    width: 20px; /* 사이즈 */
    height: 20px; /* 사이즈 */
    border-top: 4px solid #c194c0; /* 선 두께 */
    border-right: 4px solid #c194c0; /* 선 두께 */
    transform: rotate(225deg); /* 각도 */
  }

  .page-number {
    text-align: center;
    letter-spacing: 0px;
    color: #c892be;
    text-shadow: 0px 0px 6px #c892be;
    opacity: 1;
  }
  .empty-box {
    width: 58px;
    height: 70px;
  }
`;
