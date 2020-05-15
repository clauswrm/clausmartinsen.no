import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Train from "./components/Train/Train";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/train" component={Train} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
