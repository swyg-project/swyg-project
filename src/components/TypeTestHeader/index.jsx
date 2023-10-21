import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const FixedWrapper = styled.div`
  position: sticky;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
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
