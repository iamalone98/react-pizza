import { combineReducers } from "redux";
import appSlice from "./appSlice";

import categoriesSlice from "./categoriesSlice";
import pizzasSlice from "./pizzasSlice";

const rootReducer = combineReducers({
  app: appSlice,
  pizzas: pizzasSlice,
  categories: categoriesSlice
});

export default rootReducer;