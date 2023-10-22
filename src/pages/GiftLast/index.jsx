import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getProducts } from "../../11st/getProducts";
import { promiseAll } from "../../11st/promiseAll";
import { createProductList } from "../../constructor/Product";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductLayout from "../../components/ProductLayout";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding-top: 36px;
    justify-content: center;
    align-items: center;
`;

function GiftLast() {
    const productId = useSearchParams()[0].get("productId");

    const [presents, setPresents] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
            try {
                const productCodes = JSON.parse(productId);
                const promises = await promiseAll(
                    getProducts,
                    productCodes.map((code) => ({ productCode: code }))
                );
                const res = promises;

                setPresents(() =>
                    createProductList(res).map(
                        ({
                            productCode,
                            productImage,
                            productName,
                            productPrice,
                            productSalePrice,
                            productUrl,
                        }) => ({
                            code: productCode,
                            image: productImage,
                            name: productName,
                            price: productPrice,
                            salePrice: productSalePrice,
                            url: productUrl,
                        })
                    )
                );
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        };
        request();
    }, []);

    if (isLoading) return <LoadingSpinner />;

    return (
        <Container>
            <ProductLayout
                type="list"
                products={presents}
                onClose={() => {
                    return;
                }}
            />
            ;
        </Container>
    );
}
export default GiftLast;
