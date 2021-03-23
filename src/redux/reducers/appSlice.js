import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    sortType: 'rating',
    cartItems: 0,
    cartTotal: 0,
  },
  reducers: {
    setSortType: function (state, action) {
      state.sortType = action.payload;
      return state;
    },
    setCartItems: function (state, action) {
      switch (action.payload.operator) {
        case '-':
          state.cartItems -= action.payload.count ? action.payload.count : 1;
          break;
        case '+':
          state.cartItems += 1;
          break;
        default:
          return state;
      }
    },
    setCartTotal: function (state, action) {
      switch (action.payload.operator) {
        case '-':
          state.cartTotal -= action.payload.price;
          break;
        case '+':
          state.cartTotal += action.payload.price;
          break;
        default:
          return state;
      }
    }
  }
});

export const { setSortType, setCartItems, setCartTotal } = appSlice.actions;

export default appSlice.reducer;
