import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../11st/getProducts";
import { promiseAll } from "../11st/promiseAll";
import { createProductList } from "../constructor/Product";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductBox = styled.div`
    display: flex;
    margin: 0;
    margin-bottom: 20px;
    width: 386px;
    height: 111px;

    box-shadow: 0px 0px 6px #c194c0;
    border: 5px solid #c194c0;
    border-radius: 10px;
    opacity: 1;
`;

export const ProductImg = styled.img`
    text-align: center;
    width: 100px;
    height: 110px;
    border-radius: 5px 0 0 5px;
`;

export const NamePriceSpace = styled.div`
    display: flex;
    width: 240px;
    flex-direction: column;
    padding-left: 10px;
    justify-content: center;
    .productName {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
    }
`;

export const Heartbutton = styled.button`
    border: none;
    background-color: white;
    height: 30px;
    width: 30px;
    padding: 0;
    font-size: 20px;
    margin-top: 8px;
`;

const GiftList = () => {
    const [finalList, setfinalList] = useState([]);

    const [productIds, setProductIds] = useState([
        4756237695, 4411811312, 3966505927, 5728375032, 4423418273, 3662022092,
        6031272155, 3647229036, 6019418682, 99285112, 3919537799,
    ]);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRequests = productIds.map((productId) => ({
                    productCode: productId,
                }));

                const newProducts = await promiseAll(
                    getProducts,
                    productRequests
                );

                const result = createProductList(newProducts);

                setProducts(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const toggleLike = (e) => {
        const productId = e.target.parentNode.id;
        setfinalList((current) => {
            if (e.target.textContent === "🤍") {
                e.target.textContent = "💖";
                return [...current, productId];
            } else {
                e.target.textContent = "🤍";
                return current.filter((id) => id !== productId);
            }
        });
    };

    useEffect(() => {
        console.log(finalList);
    }, [finalList]);

    return (
        <Container>
            {products.map((product) => (
                <ProductBox key={product.productId} id={product.productId}>
                    <a href={product.productUrl}>
                        <ProductImg src={product.productImg} />
                    </a>
                    <NamePriceSpace>
                        <div className="productName">{product.productName}</div>
                        <div className="productPrice">
                            {product.productPrice}
                        </div>
                    </NamePriceSpace>
                    <Heartbutton onClick={toggleLike}>🤍</Heartbutton>
                </ProductBox>
            ))}
        </Container>
    );
};

export default GiftList;
