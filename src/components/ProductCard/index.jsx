import { useEffect, useState, forwardRef } from "react";

import { getItem, setItem } from "../../utils/storage";
import { CART } from "../../constants/cart";

import heartPinkSVG from "../../assets/하트-선택.svg";
import heartBlankSVG from "../../assets/빈_하트.svg";
import closeSVG from "../../assets/닫기(x).svg";

import * as S from "./styled";

// 상품 카드 타입: "grid", "list"
const ProductCard = forwardRef(({ type, product, onClose }, ref) => {
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

    const hadleOnCloseBtnClick = (e) => {
        e.stopPropagation();
        const cart = getItem(CART, []);

        setItem(
            CART,
            cart.filter((prod) => prod.code !== product.code)
        );

        onClose(product.code);
    };

    const handleOnHref = (e) => {
        e.stopPropagation();
        window.open(`https://www.11st.co.kr/products/${product.code}`);
    };

    useEffect(() => {
        const cart = getItem(CART, []);
        if (cart.some((prod) => prod.code === product.code)) {
            setIsInCart(true);
        }
    }, []);

    return (
        <S.Container ref={ref} $type={type} onClick={handleOnHref}>
            <S.ImageWrapper $type={type}>
                <img
                    className="gift_image"
                    src={product.image}
                    alt={product.name}
                />
                {type === "grid" && (
                    <>
                        <div className="gradient_block"></div>
                        <S.AddToCartBtn
                            $isInCart={isInCart}
                            type="button"
                            onClick={handleOnCartBtnClick}
                        >
                            {isInCart ? (
                                <img
                                    src={heartPinkSVG}
                                    alt="delete from cart"
                                />
                            ) : (
                                <img src={heartBlankSVG} alt="add to cart" />
                            )}
                        </S.AddToCartBtn>
                    </>
                )}
            </S.ImageWrapper>
            <S.Details $type={type}>
                {type !== "grid" && (
                    <img
                        src={closeSVG}
                        alt="close button"
                        className="close_button"
                        onClick={hadleOnCloseBtnClick}
                    />
                )}
                <p className="product__detail__title">{product.name}</p>
                <span className="product__detail__price">
                    {product.salePrice || product.price}
                </span>
            </S.Details>
        </S.Container>
    );
});

export default ProductCard;
