import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = createSelector(
    (state) => state.products.data,
    (_, category) => category,
    (productsData, category) => {
        const products =
            category === undefined
                ? [...Object.values(productsData).flat()]
                : Array.isArray(productsData[category])
                ? [...productsData[category]]
                : [];

        // code 값을 기준으로 중복 제거
        const uniqueProducts = products.filter(
            (product, index, self) =>
                index === self.findIndex((p) => p.code === product.code)
        );

        // Fisher-Yates shuffle algorithm
        for (let i = uniqueProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = uniqueProducts[i];
            uniqueProducts[i] = uniqueProducts[j];
            uniqueProducts[j] = temp;
        }

        return uniqueProducts;
    }
);
