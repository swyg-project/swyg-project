import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "url",
  initialState: {
    value: { sender: "", receiver: "", productId: [], letter: "" },
  },
  reducers: {
    add(state, action) {
      state.value = action.payload;
    },
  },
});

export default urlSlice.reducer;
export const { add } = urlSlice.actions;
