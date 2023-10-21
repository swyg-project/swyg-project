import styled from "styled-components";
import theme from "../../style/theme";
export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FixedWrapper = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  align-items: center;

  @media screen and ${theme.media.tablet} {
    max-width: 600px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-left: 12px;
  cursor: pointer;
`;

import { Link } from "react-router-dom";

const TypeTestHeader = () => {
  return (
    <Container>
      <FixedWrapper>
        <Logo to={"/"}>
          <img
            width="100"
            height="100"
            src={`${
              import.meta.env.VITE_PUBLIC_URL
            }/images/icons/요고어때 로고(미니).svg`}
          />
        </Logo>
      </FixedWrapper>
    </Container>
  );
};

export default TypeTestHeader;
