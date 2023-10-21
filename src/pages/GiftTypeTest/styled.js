import styled from "styled-components";
import theme from "../../style/theme";

export const Container = styled.div`
  margin: 0 auto;
  color: var(--black-primary);

  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;

  overflow-y: auto;
  @media screen and ${theme.media.tablet} {
    font-size: 1.2rem;
  }
`;

export const TestBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Question = styled.div`
  padding: 0 1.8rem;
  margin: 0 auto;
  height: 12rem;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.4rem;
  margin-bottom: 4rem;
`;

export const Answer = styled.div`
  margin-bottom: 2rem;
`;

export const AnswerBtn = styled.div`
  margin: 0 auto 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 7rem;
  box-shadow: 0px 0px 6px var(--pale-lavender-color);
  border: 5px solid var(--pale-lavender-color);
  border-radius: 10px;
  opacity: 1;
  &:hover {
    box-shadow: 0px 0px 6px var(--yellow-color);
    border: 5px solid var(--yellow-color);
    border-radius: 10px;
    opacity: 1;
    cursor: pointer;
  }

  @media screen and ${theme.media.tablet} {
    width: 30rem;
    margin: 0 auto 1rem;
    height: 10rem;
    margin-top: 0;
  }
`;

export const BackBtnWrap = styled.div`
  // width: 70%;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`;

export const BackButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
export const ForwardButton = styled.img`
  transform: scaleX(-1);
  opacity: 0.5;
`;

export const PageNumber = styled.div`
  text-align: center;
  letter-spacing: 0px;
  color: var(--navy-color);
  opacity: 1;
`;
