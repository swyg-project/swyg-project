import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: { page: 0, scoreList: [] },
  reducers: {
    add(state, action) {
      state.page += 1;
      state.scoreList.push(action.payload);
    },

    del(state) {
      state.page -= 1;
      state.scoreList.pop();
    },

    init(state) {
      state.page = 0;
      state.scoreList = [];
    },
  },
});

export default scoreSlice.reducer;
export const { add, init, del } = scoreSlice.actions;
