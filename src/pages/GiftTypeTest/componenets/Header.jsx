import { useNavigate } from "react-router-dom";
import * as S from "../styled";
function Header() {
  const navigate = useNavigate();
  return (
    <S.Header
      onClick={() => {
        navigate("/");
      }}
    >
      로고
    </S.Header>
  );
}

export default Header;
