import styled from "styled-components";
import theme from "../../style/theme";

export const Container = styled.div`
  margin: 0 auto;
  color: var(--black-primary);

  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;

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
`;

export const Answer = styled.div``;

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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
`;

const BaseButton = styled.div`
  overflow: hidden;
  position: relative;
  width: 3.6rem;
  height: 4.3rem;
`;

export const PageNumber = styled.div`
  text-align: center;
  letter-spacing: 0px;
  color: var(--navy-color);
  opacity: 1;
`;

export const StyledBackButton = styled(BaseButton)`
  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: 2.9rem;
    width: 1rem;
    height: 1rem;
    border-top: 4px solid var(--navy-color);
    border-right: 4px solid var(--navy-color);
    transform: rotate(225deg);
  }
`;

export const StyledEmptyBox = styled(BaseButton)`
  &::after {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: -0.5rem;
    width: 1rem;
    height: 1rem;
    border-top: 4px solid var(--navy-color);
    border-right: 4px solid var(--navy-color);
    transform: rotate(45deg);
    opacity: 0.5;
  }
`;
