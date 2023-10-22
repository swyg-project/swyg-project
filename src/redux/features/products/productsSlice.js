import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../11st/getProducts";
import { categories, suggestList } from "../../../constants/category";
import {
    RequestProduct,
    createProductList,
} from "../../../constructor/Product";
import { promiseAll } from "../../../11st/promiseAll";

export const fetchCategoryProducts = async (category) => {
    const list = [...suggestList[category]];

    const response = await promiseAll(
        getProducts,
        list.map((parameter) => new RequestProduct(parameter))
    );

    return {
        category,
        products: createProductList(response).map((product) => ({
            ...product,
        })),
    };
};

export const fetchAllCategories = createAsyncThunk(
    "products/fetchAllCategories",
    async () => {
        const promises = categories.map((category) =>
            fetchCategoryProducts(category)
        );
        return await Promise.all(promises);
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        status: "idle",
        error: null,
        data: {},
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });

        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.status = "succeeded";
            action.payload.forEach((payloadItem) => {
                state.data[payloadItem.category] = payloadItem.products;
            });
        });

        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});

export default productsSlice.reducer;
