import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductLayout from "../../components/ProductLayout";

import { getItem } from "../../utils/storage";
import { CART } from "../../constants/cart";

import * as S from "./styled";

function Cart() {
    const [products, setProducts] = useState(getItem(CART, []));
    const navigate = useNavigate();

    const handleOnConfirm = () => {
        navigate("/letter")
    }

    return (
        <S.Container>
            {products.length > 0 ? (
                <ProductLayout type={"list"} products={products} />
            ) : (
                <div>아직 리스트에 선물이 추가되지 않았어요!</div>
            )}
            <S.ButtonContainer>
                <button type="button" onClick={() => navigate("/list")}>더 담으러 가기</button>
                <button type="button" onClick={handleOnConfirm}>완료하기</button>
            </S.ButtonContainer>
        </S.Container>
    );
}

export default Cart;
