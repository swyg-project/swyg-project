import { useEffect, useState, forwardRef } from "react";

import { getItem, setItem } from "../../utils/storage";
import { CART } from "../../constants/cart";

import sliceRestText from "../../utils/sliceRestText";
import addComma from "../../utils/addComma";

import * as S from "./styled";

// 상품 카드 타입: "grid", "list"
const ProductCard = forwardRef(({ type, product }, ref) => {
    const [isInCart, setIsInCart] = useState(false);

    const handleOnCartBtnClick = (e) => {
        e.stopPropagation();
        const cart = getItem(CART, []);

        if (cart.some((prod) => prod.code === product.code)) {
            setItem(
                CART,
                cart.filter((prod) => prod.code !== product.code)
            );
        } else {
            setItem(CART, cart.concat(product));
        }

        setIsInCart((old) => !old);
    };

    const handleOnHref = (e) => {
        e.stopPropagation();
        window.open(`https://www.11st.co.kr/products/${product.code}`)
    }

    useEffect(() => {
        const cart = getItem(CART, []);
        if (cart.some((prod) => prod.code === product.code)) {
            setIsInCart(true);
        }
    }, []);

    return (
        <S.Container ref={ref} $type={type} onClick={handleOnHref}>
            <S.AddToCartBtn $isincart={isInCart} type="button" onClick={handleOnCartBtnClick}>
                <span>{isInCart ? "빼기" : "추가"}</span>
            </S.AddToCartBtn>
            <S.ImageWrapper src={product.image} alt={product.name} />
            <S.Details>
                <span className="product__detail__title">
                    {sliceRestText(product.name, 25)}
                </span>
                <span className="product__detail__price">{`${addComma(
                    product.salePrice || product.price
                )}원`}</span>
            </S.Details>
        </S.Container>
    );
});

export default ProductCard;
