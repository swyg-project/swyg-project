import styled from "styled-components";
import theme from "../../style/theme";
export const Container = styled.div`
  color: var(--black-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and ${theme.media.tablet} {
    font-size: 1.2rem;
  }
`;

export const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 5.6rem auto 3.1rem;
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .description {
    margin: 1.5rem auto 0;
    text-align: center;
    line-height: 1.4rem;
  }

  @media screen and ${theme.media.tablet} {
    .description {
      width: 80%;
    }
    .title {
      font-size: 1.5rem;
    }
  }
`;

export const GiftBox = styled.div`
  .text {
    align-self: center;
    margin-left: -16rem; /* 원하는 만큼 왼쪽으로 이동시킵니다. */
    margin-bottom: 0.8rem;
    
    @media screen and ${theme.media.tablet} {
      margin-top:1rem;
      margin-left: -23rem;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;
export const GiftList = styled.div`
  display: grid;
  grid-template-columns: 10.5rem 10.5rem;
  grid-template-rows: ${(props) => `repeat(${props.$columnLength}, 7rem)`};
  grid-column-gap: 1.2rem;
  grid-row-gap: 4rem;
  margin-bottom: 4rem;

  @media screen and ${theme.media.tablet} {
    grid-template-columns: 15rem 15rem;
    grid-template-rows: ${(props) => `repeat(${props.$columnLength}, 10rem)`};
    grid-column-gap: 1.2rem;
    grid-row-gap: 4rem;
    margin-bottom: 4rem;
  }
`;
export const GiftItem = styled.div`
  text-align: center;
  place-items: center;
  display: flex;
  flex-direction: column;


  .gift-name {
    margin-top:0.5rem;

  }
  .gift-image {
    background: var(--white-primary) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px var(--pale-lavender-color);
    border: 5px solid var(--pale-lavender-color);
    border-radius: 10px;
    opacity: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }



  }
`;

export const ResultBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  button {
    font-family: "GmarketSansMedium";
    font-weight: bold;
    width: 14.5rem;
    height: 3.25rem;

    background: var(--white-primary) 0% 0% no-repeat padding-box;
    border-radius: 10px;
    border: none;
    opacity: 1;
    box-shadow: 0px 4px 0px #9c76b0;
    margin-bottom: 22px;
    font-size: 1.1rem;
    color: var(--navy-color);
  }

  button:hover {
    cursor: pointer;
  }

  @media screen and ${theme.media.tablet} {
    margin-top: 2rem;
    button {
      width: 20rem;
      height: 4rem;
      font-size: 1.3rem;
    }
  }
`;
