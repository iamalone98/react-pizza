import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { setCategories } from "./redux/reducers/categoriesSlice";
import { setPizzas } from "./redux/reducers/pizzasSlice";

import { Routes } from "./router";

const StyledApp = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 50px auto;
  border-radius: 10px;
  max-width: 1400px;
`

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then(res => res.json())
      .then(data => {
        dispatch(setPizzas(data.pizzas));
        dispatch(setCategories(data.categories));
      })
  }, [dispatch])
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
