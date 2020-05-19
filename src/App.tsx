import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Intern from "./pages/Intern/Intern";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.path} component={Home} />
        <Route path={routes.intern.path} component={Intern} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
