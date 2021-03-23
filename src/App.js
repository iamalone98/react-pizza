import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { setCategories } from "./redux/reducers/categoriesSlice";
import { setPizzas } from "./redux/reducers/pizzasSlice";

import { Routes } from "./router";
import { HOSTNAME } from "./router/urls";
import { sortPizzas } from "./utils/sortPizzas";

const StyledApp = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
  min-width: 700px
`

function App() {
  const dispatch = useDispatch();
  const sortType = useSelector(({ app }) => app.sortType);
  useEffect(() => {
    fetch(`${HOSTNAME}/db.json`)
      .then(res => res.json())
      .then(data => {
        dispatch(setPizzas(sortPizzas(data.pizzas, sortType)));
        dispatch(setCategories(data.categories));
      })
  }, [dispatch, sortType])
  return (
    <StyledApp>
      <Switch>
        {Routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
      </Switch>
    </StyledApp>
  );
}

export default App;
