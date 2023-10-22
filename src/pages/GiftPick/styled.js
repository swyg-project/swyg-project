import styled from "styled-components";
import theme from "../../style/theme/index";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;

  .empty-box {
    margin-top: 2rem;
  }
`;
export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  button {
    font-family: "GmarketSansMedium";
    font-weight: bold;
    width: 16.25rem;
    height: 3.25rem;

    background: var(--white-primary) 0% 0% no-repeat padding-box;
    border-radius: 10px;
    border: none;
    opacity: 1;
    box-shadow: 0px 4px 0px #9c76b0;
    margin-bottom: 40px;
    font-size: 1.1rem;
    color: var(--navy-color);
  }

  button:hover {
    cursor: pointer;
  }

  @media screen and ${theme.media.tablet} {
    button {
      width: 20rem;
      height: 4.5rem;
    }
  }
`;

export const ProductList = styled.div`
  .text {
    font-size: 20px;
    margin: 4rem 0 1rem;
    color: var(--white-primary);
  }
`;

export const ProductBox = styled.div``;

export const LetterPaper = styled.div`
  width: 22rem;
  min-height: 18rem;
  height: 100%;

  position: relative;

  background: #ffffff80 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px var(--pale-lavender-color);
  border: 5px solid var(--pale-lavender-color);
  opacity: 1;
  border-radius: 10px;

  @media screen and ${theme.media.tablet} {
    width: 30em;
  }
`;

export const LetterWrap = styled.div`
  margin-top: 3rem;
`;

export const LetterUnderlined = styled.div`
  width: 80%;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  background: repeating-linear-gradient(
    transparent,
    transparent 3rem,
    #707070 3.1rem,
    #707070 3.15rem
  );

  .letter {
    padding-top: 0.6rem;
    line-height: 3.15rem;
  }
`;
