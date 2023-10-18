import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const HeaderContainer = styled.div`
  margin-top: 55px;
  height: 59px;
  width: 100%;

  .logo {
    height: 100%;
  }
`;
function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <img
        className="logo"
        src={`${
          import.meta.env.VITE_PUBLIC_URL
        }/images/icons/요고어때 로고(미니).svg`}
        onClick={() => {
          navigate("/");
        }}
      />
    </HeaderContainer>
  );
}

export default Header;
