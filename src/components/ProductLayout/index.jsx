import { useState, useEffect, useRef, useCallback } from "react";

import ProductCard from "../ProductCard";

import * as S from "./styled";

function ProductLayout({ type, products }) {
    const observer = useRef();

    const loadMore = useCallback(
        (currentIndex, lastIndex) => {
            return products.slice(currentIndex, lastIndex);
        },
        [products]
    );

    // productList state 초기화
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        // productList state 업데이트
        setProductList(loadMore(0, 10));

        // Observer 초기화 (새로운 products 배열에 대한 관찰 시작)
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setProductList((prev) => [
                    ...prev,
                    ...loadMore(prev.length, prev.length + 10),
                ]);
            }
        });
    }, [products]); // products prop이 변경될 때마다 effect 실행

    const lastProductElementRef = useCallback((node) => {
        if (node && observer.current) observer.current.observe(node);
    }, []);

    return (
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
                />
            ))}
        </S.Container>
    );
}

export default ProductLayout;
