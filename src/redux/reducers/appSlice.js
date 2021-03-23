import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    sortType: 'rating'
  },
  reducers: {
    setSortType: function (state, action) {
      state.sortType = action.payload;
      return state;
    }
  }
});

export const { setSortType } = appSlice.actions;

export default appSlice.reducer;
