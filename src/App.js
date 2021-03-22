import { Switch, Route } from "react-router-dom";
import { Routes } from "./router";

function App() {
  return (
    <>
      <Switch>
        {Routes.map((route) => (
          <Route exact {...route} />
        ))}
      </Switch>
    </>
  );
}

export default App;
