import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductLayout from "../../components/ProductLayout";

import { getItem } from "../../utils/storage";
import { CART } from "../../constants/cart";

import * as S from "./styled";

function Cart() {
    const [products, setProducts] = useState(getItem(CART, []));
    const navigate = useNavigate();

    const handleOnConfirm = () => {
        navigate("/letter");
    };

    const onClose = (productCode) => {
        setProducts((prev) => prev.filter((prod) => prod.code !== productCode));
    }

    return (
        <S.Container>
            {products.length > 0 ? (
                <ProductLayout type={"list"} products={products} onClose={onClose}/>
            ) : (
                <div className="alert-empty">
                    <span>아직 선물을 고르지 않았어요!</span>
                </div>
            )}
            <S.ButtonContainer>
                <button type="button" onClick={() => navigate("/list")}>
                    <span>더 담으러 가기</span>
                </button>
                <button
                    type="button"
                    onClick={handleOnConfirm}
                    disabled={products.length === 0}
                >
                    <span>완료하기</span>
                </button>
            </S.ButtonContainer>
        </S.Container>
    );
}

export default Cart;
