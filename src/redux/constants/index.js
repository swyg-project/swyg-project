import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "../slices/scoreSlice.js";
import urlSlice from "../slices/urlSlice.js";
export const store = configureStore({
  reducer: {
    score: scoreSlice,
    url: urlSlice,
  },
});
