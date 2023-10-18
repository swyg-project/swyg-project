import { Link } from "react-router-dom";

import * as S from "./styled";
import logoPng from "../../assets/요고어때_로고.png";
import cartPng from "../../assets/장바구니.png";

const Header = () => {
    return (
        <S.Container>
            <S.FixedWrapper>
                <S.Logo to={"/"}>
                    <img width="75" height="75" src={logoPng} />
                </S.Logo>
                <S.Options>
                    <Link to={"/cart"}>
                        <img width="50" height="50" src={cartPng} />
                    </Link>
                </S.Options>
            </S.FixedWrapper>
        </S.Container>
    );
};

export default Header;
