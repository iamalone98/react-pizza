import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: function (state, action) {
      state = action.payload;
    }
  }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
