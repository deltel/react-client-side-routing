import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export function GuardedRoute({ component: Component }: { component: any }) {
  const { isAuth } = useContext(AuthContext);
  return <>{isAuth ? <Component /> : <Navigate to="/login" replace />}</>;
}

export function UnGuardedRoute({ component: Component }: { component: any }) {
  const { isAuth } = useContext(AuthContext);

  return <>{isAuth ? <Navigate to="/dashboard" replace /> : <Component />}</>;
}
