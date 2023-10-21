import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

export const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  cursor: pointer;

  .arrow {
    position: relative;
    display: inline-block;
    width: 75px;
    height: 75px;
  }

  .arrow::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(225deg);
    width: 1.25rem;
    height: 1.25rem;
    border-top: 4px solid var(--navy-color); /* 화살표 색상 */
    border-right: 4px solid var(--navy-color); /* 화살표 색상 */
  }
`;

const BackHeader = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(-1);
  };
  return (
    <Container>
      <FixedWrapper>
        <BackBtn onClick={handleBtn}>
          <div className="arrow"></div>
        </BackBtn>
      </FixedWrapper>
    </Container>
  );
};

export default BackHeader;
