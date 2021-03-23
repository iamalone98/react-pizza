import { combineReducers } from "redux";

import categoriesSlice from "./categoriesSlice";
import pizzasSlice from "./pizzasSlice";

const rootReducer = combineReducers({
  pizzas: pizzasSlice,
  categories: categoriesSlice
});

export default rootReducer;