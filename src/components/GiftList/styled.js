import styled from "styled-components";
import theme from "../../style/theme/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductBox = styled.div`
  display: flex;
  margin: 0;
  margin-bottom: 1.25rem;
  width: 24.1rem;
  height: 6.9rem;

  background: #ffffff80 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px var(--pale-lavender-color);
  border: 5px solid var(--pale-lavender-color);
  opacity: 1;
  border-radius: 10px;

  @media screen and ${theme.media.tablet} {
    width: 30em;
    height: 10rem;
  }
`;

export const ProductImg = styled.img`
  text-align: center;
  width: 6.25rem;
  height: 6.875rem;
  border-radius: 5px 0 0 5px;

  @media screen and ${theme.media.tablet} {
    width: 10rem;
    height: 10rem;
  }
`;

export const NamePriceSpace = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  padding-left: 0.6rem;
  justify-content: center;

  .productName {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1.25rem;
    line-height: 1.5rem;
  }
  .productPrice {
    font-size: 0.9rem;
  }

  @media screen and ${theme.media.tablet} {
    width: 23rem;
    margin-bottom: 1rem;
    .productName {
      line-height: 1.7rem;
    }
  }
`;

export const Heartbutton = styled.img`
  border: none;
  height: 1.3rem;
  width: 1.3rem;
  padding: 0;
  margin-top: 0.6rem;

  &:hover {
    cursor: pointer;
  }
`;
