import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { CART_URL, HOME_URL, PIZZAS_CATEGORY_URL } from "./urls";

export const Routes = [
  {
    path: HOME_URL,
    component: Home
  },
  {
    path: PIZZAS_CATEGORY_URL,
    component: Home
  },
  {
    path: CART_URL,
    component: Cart
  },
]