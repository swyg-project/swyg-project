import { useState, useEffect, useRef, useCallback } from "react";

import ProductCard from "../ProductCard";

import * as S from "./styled";

function ProductLayout({ type, products, onClose }) {
    const observer = useRef();

    const loadMore = useCallback(
        (currentIndex, lastIndex) => {
            return products.slice(currentIndex, lastIndex);
        },
        [products]
    );

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        setProductList(loadMore(0, 10));

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setProductList((prev) => [
                    ...prev,
                    ...loadMore(prev.length, prev.length + 10),
                ]);
            }
        });
    }, [products]);

    const lastProductElementRef = useCallback((node) => {
        if (node && observer.current) observer.current.observe(node);
    }, []);

    return (
        <S.ScrollOverflowHidden>
            <S.Container $type={type}>
                {productList.map((product, index) => (
                    <ProductCard
                        key={product.code}
                        ref={
                            index === productList.length - 1
                                ? lastProductElementRef
                                : null
                        }
                        type={type}
                        product={product}
                        onClose={onClose}
                    />
                ))}
            </S.Container>
        </S.ScrollOverflowHidden>
    );
}

export default ProductLayout;
