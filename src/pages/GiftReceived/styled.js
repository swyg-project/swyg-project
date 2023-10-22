import styled from "styled-components";
import theme from "../../style/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--white-primary);
  user-select: none;
  @media screen and ${theme.media.tablet} {
    font-size: 1.4rem;
  }
`;

export const Bar = styled.div`
  width: 10.1rem;
  border: 2.7px solid var(--pale-lavender-color);
  box-shadow: 0px 0px 6px var(--pale-lavender-color);
  opacity: 1;
  border-radius: 10px;
`;

export const NameWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.6rem;
`;
export const Text = styled.div``;
export const Name = styled.div`
  text-align: center;
`;
export const GiftName = styled.div`
  /* margin: 10rem auto 7rem; */
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  .receiver-box {
    margin-left: 1rem;
  }

  span {
    padding-left: 1rem;
  }
`;

export const Logo = styled.img``;

export const Button = styled.button`
  margin-top: 5rem;
  color: var(--navy-color);
  width: 16.75rem;
  height: 5.1rem;
  font-family: "GmarketSansMedium";
  background: var(--white-primary) 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px var(--pale-lavender-color);
  border: 5px solid var(--pale-lavender-color);
  border-radius: 10px;
  opacity: 1;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
  @media screen and ${theme.media.tablet} {
    font-size: 1.1rem;
    width: 20rem;
    height: 5rem;
  }
`;

export const Letter = styled.div`
  margin: 5rem 0;
`;
export const ProductList = styled.div`
  margin: 5rem 0;
`;
