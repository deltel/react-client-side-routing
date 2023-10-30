import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

import { GuardedRoute, UnGuardedRoute } from "./auth/route-guards";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <AuthProvider>
          <Router>
            <Switch>
              <UnGuardedRoute path="/login" component={Login} />
              <GuardedRoute path="/dashboard" component={Dashboard} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
