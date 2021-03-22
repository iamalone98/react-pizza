import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

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
