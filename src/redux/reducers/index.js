import { combineReducers } from "redux";
import appSlice from "./appSlice";
import cartSlice from "./cartSlice";

import categoriesSlice from "./categoriesSlice";
import pizzasSlice from "./pizzasSlice";

const rootReducer = combineReducers({
  app: appSlice,
  pizzas: pizzasSlice,
  categories: categoriesSlice,
  cart: cartSlice
});

export default rootReducer;