import { createSelector } from "@reduxjs/toolkit";
import { categoryFilter } from "../../../constants/category";

export const selectProducts = createSelector(
    (state) => state.products.data,
    (_, category) => category,
    (productsData, category) => {
        const products =
            category === undefined || categoryFilter.includes(category)
                ? [...Object.values(productsData).flat()]
                : Array.isArray(productsData[category])
                ? [...productsData[category]]
                : [];

       
        const uniqueProducts = products.filter(
            (product, index, self) =>
                index === self.findIndex((p) => p.code === product.code)
        );

       
        for (let i = uniqueProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = uniqueProducts[i];
            uniqueProducts[i] = uniqueProducts[j];
            uniqueProducts[j] = temp;
        }

        if (categoryFilter.includes(category)) {
            const filterdProducts = uniqueProducts.filter((product) => {
                const price = parseInt(product.salePrice || product.price);

                switch (category) {
                    case categoryFilter[0]:
                        return price < 50000;
                    case categoryFilter[1]:
                        return price < 100000 && price >= 50000;
                    case categoryFilter[2]:
                        return price >= 100000;
                    default:
                        return false;
                }
            });
            return filterdProducts;
        }

        return uniqueProducts;
    }
);
