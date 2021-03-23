import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: function (state, action) {
      state = [...state, action.payload];
      return state;
    },
    removePizza: function (state, action) {
      state = state.filter((item) => item.id !== action.payload)
      return state;
    },
    toggleCount: function (state, action) {
      switch (action.payload.operator) {
        case '-':
          state.map((item) => {
            if (item.id === action.payload.id) {
              item.count -= 1;
              return item;
            }
            return item;
          })
          break;
        case '+':
          state.map((item) => {
            if (item.id === action.payload.id) {
              item.count += 1;
              return item;
            }
            return item;
          })
          break;
        default:
          return state;
      }
    }
  }
});

export const { addToCart, removePizza, toggleCount } = cartSlice.actions;

export default cartSlice.reducer;
