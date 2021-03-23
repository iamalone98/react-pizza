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
const StyledFailedRoute = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 90vh;
  font-size: 132px;
  text-align:center;
`;

function App() {
  const dispatch = useDispatch();
  const sortType = useSelector(({ app }) => app.sortType);
  useEffect(() => {
    fetch(`${HOSTNAME}/db.json`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => dispatch(setPizzas(sortPizzas(data.pizzas, sortType))), 1000);
        dispatch(setCategories(data.categories));
      })
  }, [dispatch, sortType])
  return (
    <StyledApp>
      <Switch>
        {Routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
        <Route>
          <StyledFailedRoute>404</StyledFailedRoute>
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;
