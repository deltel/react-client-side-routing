import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

export function GuardedRoute({
  component: Component,
  ...rest
}: {
  component: any;
  path: string;
}) {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
export function UnGuardedRoute({
  component: Component,
  ...rest
}: {
  component: any;
  path: string;
}) {
  const { isAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}
