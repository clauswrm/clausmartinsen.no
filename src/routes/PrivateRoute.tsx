import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useFirebaseAuth } from "../firebase";
import { routes } from "./routes";

function PrivateRoute(props: RouteProps) {
  const { children, ...rest } = props;
  const { authUser, loading } = useFirebaseAuth();

  return (
    <Route
      {...rest}
      render={() => (loading || authUser ? children : <Redirect to={routes.intern.path} />)}
    />
  );
}

export { PrivateRoute };
