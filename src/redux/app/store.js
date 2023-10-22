import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice.js";
import scoreSlice from "../slices/scoreSlice.js";
export const store = configureStore({
  reducer: {
    score: scoreSlice,
    products: productsReducer,
  },
});
