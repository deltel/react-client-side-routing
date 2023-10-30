import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { ErrorPage } from "./pages/error-page";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

import { GuardedRoute, UnGuardedRoute } from "./auth/route-guards";
import AuthProvider from "./auth/AuthProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <UnGuardedRoute component={Login} />,
  },
  {
    path: "/dashboard",
    element: <GuardedRoute component={Dashboard} />,
  },
]);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
