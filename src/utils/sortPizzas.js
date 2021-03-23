export const sortPizzas = (pizzas, sortType) => {
  return pizzas.sort((a, b) => {
    if (a[sortType] > b[sortType]) {
      return 1;
    }

    if (a[sortType] < b[sortType]) {
      return -1;
    }

    return 0;
  })
}