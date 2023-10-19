import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice.js";
import scoreSlice from "../slices/scoreSlice.js";
import urlSlice from "../slices/urlSlice.js";
export const store = configureStore({
    reducer: {
        score: scoreSlice,
        url: urlSlice,
        products: productsReducer,
    },
});
