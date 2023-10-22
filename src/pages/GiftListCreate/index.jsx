import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../redux/features/products/productsSlice";
import { selectProducts } from "../../redux/features/products/selectProducts";

import Categories from "../../components/Categories";
import ProductLayout from "../../components/ProductLayout";
import LoadingSpinner from "../../components/LoadingSpinner"

import * as S from "./styled";

const GiftListCreate = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [showScrollButton, setShowScrollButton] = useState(false);

   
    const debounceTimerRef = useRef(null);

    const scrollToTop = useCallback(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = useSelector((state) => selectProducts(state, category));

    const status = useSelector((state) => state.products.status);

    useEffect(() => {
        if (status === "idle" || status === "failed") {
            dispatch(fetchAllCategories());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            if (debounceTimerRef.current)
                clearTimeout(debounceTimerRef.current);

            if (window.scrollY > 200) {
                setShowScrollButton(true);

                debounceTimerRef.current = setTimeout(
                    () => setShowScrollButton(false),
                    2000
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <S.Container>
            <Categories />
            <S.ScrollButton
                onClick={scrollToTop}
                className={showScrollButton ? "show-btn" : ""}
            >
                Top
            </S.ScrollButton>
            {status === "loading" || !products ? (
                <LoadingSpinner />
            ) : (
                <ProductLayout type={"grid"} products={products} />
            )}

        </S.Container>
    );
};

export default GiftListCreate;
