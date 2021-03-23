import { createSlice } from "@reduxjs/toolkit";

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: [],
  reducers: {
    setPizzas: function (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
