import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import LoginButton from "../../components/LoginButton/LoginButton";
import { PrivateRoute, routes } from "../../routes";
import Page from "../Page/Page";
import Train from "../Train/Train";

function Intern() {
  const { path, url } = useRouteMatch();

  return (
    <Page headerMenu={<LoginButton />}>
      <Switch>
        <Route exact path={path}>
          TODO
        </Route>
        <PrivateRoute path={`${path}${routes.intern.train.path}`}>
          <Train />
        </PrivateRoute>
      </Switch>
    </Page>
  );
}

export default Intern;
