import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backImage from "../../assets/guide_arrow.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FixedWrapper = styled.div`
  position: sticky;
  // flex-grow: 0.8;
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
`;

export const BackBtn = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14px;
  cursor: pointer;
  padding-top: 30px;
`;

const BackHeader = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(-1);
  };
  return (
    <Container>
      <FixedWrapper>
        <BackBtn src={backImage} onClick={handleBtn}>
          {/* <div className="arrow"></div> */}
        </BackBtn>
      </FixedWrapper>
    </Container>
  );
};

export default BackHeader;
