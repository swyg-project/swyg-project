import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import * as S from "./styled";
import guideArrowSVG from "../../assets/guide_arrow.svg";
import cartSVG from "../../assets/cart.svg";

const Header = () => {
    const { pathname } = useLocation();
    const {category} = useParams();
    return (
        <S.Container>
            <S.FixedWrapper>
                <S.BackArrow to={-1}>
                    <img src={guideArrowSVG} />
                </S.BackArrow>
                <S.CategoryTitle>{category || ""}</S.CategoryTitle>
                {pathname !== "/cart" && pathname !== "/letter" && (
                    <S.Cart to={"/cart"}>
                        <img src={cartSVG} />
                    </S.Cart>
                )}
            </S.FixedWrapper>
        </S.Container>
    );
};

export default Header;
