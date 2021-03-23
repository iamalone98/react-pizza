import Cart from "../pages/Cart";
import Home from "../pages/Home";

export const Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/pizzas/:pizzasType',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
]